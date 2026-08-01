(() => {
  const tasks = {
    detection: { title: 'Video object detection', text: 'Per-frame box evaluation on the official XS-VID test protocol. YOLOFT-L is the released temporal baseline for extremely small-object video detection.', main: '29.3 AP', label: 'YOLOFT-L · XS-VID Detection', metrics: [['29.3', 'AP'], ['VID', 'test protocol'], ['7', 'categories']] },
    mot: { title: 'Multi-object tracking', text: 'Trajectory-aware detection is evaluated with the bundled TAO-compatible protocol. The release also provides a Track-by-Detection baseline with BoT-SORT and OSNet.', main: '31.5 mAP', label: 'YOLOFT-omni · TAO protocol', metrics: [['31.5', 'YOLOFT-omni'], ['32.1', 'Track-by-Detection'], ['TAO', 'official evaluator']] },
    sot: { title: 'Single-object tracking', text: 'The SOT test set contains 272 target sequences and a dedicated evaluator. The released TransT-based head reuses the temporal YOLOFT representation.', main: '57.09 AUC', label: 'YOLOFT-L · 272 SOT sequences', metrics: [['57.09', 'Success AUC'], ['79.35', 'Precision'], ['272', 'test sequences']] }
  };
  const panel = document.getElementById('benchmark-content');
  function render(task) {
    const item = tasks[task];
    panel.innerHTML = `<div class="benchmark-panel"><div><h3>${item.title}</h3><p>${item.text}</p><div class="metric-list">${item.metrics.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('')}</div></div><div class="metric-callout"><strong>${item.main}</strong><span>${item.label}</span></div></div>`;
  }
  document.querySelectorAll('.task-tab').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('.task-tab').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    render(button.dataset.task);
  }));
  render('detection');

  const canvas = document.getElementById('annotation-canvas');
  const context = canvas.getContext('2d');
  const loading = document.querySelector('.canvas-loading');
  const meta = document.getElementById('sample-meta');
  const tags = document.getElementById('sample-tags');
  const scale = document.getElementById('sample-scale');
  const strip = document.getElementById('sample-strip');
  const toggle = document.getElementById('toggle-boxes');
  let samples = [];
  let current = 0;
  let image = new Image();
  function draw() {
    if (!samples.length || !image.complete) return;
    const sample = samples[current];
    canvas.width = sample.width;
    canvas.height = sample.height;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    if (!toggle.checked) return;
    context.lineWidth = Math.max(2, canvas.width / 420);
    context.font = `${Math.max(14, canvas.width / 55)}px Manrope`;
    sample.boxes.forEach((box, index) => {
      const [x, y, w, h] = box.bbox;
      context.strokeStyle = index % 2 ? '#d9ee83' : '#ff8a75';
      context.strokeRect(x, y, w, h);
      context.fillStyle = context.strokeStyle;
      context.fillRect(x, Math.max(0, y - 19), Math.min(w + 8, 142), 18);
      context.fillStyle = '#10231f';
      context.fillText(box.label, x + 3, Math.max(13, y - 5));
    });
  }
  function select(index) {
    current = (index + samples.length) % samples.length;
    const sample = samples[current];
    loading.style.display = 'block';
    image = new Image();
    image.onload = () => { loading.style.display = 'none'; draw(); };
    image.src = sample.src;
    meta.textContent = `${sample.video} · frame ${sample.frame} · ${sample.boxes.length} annotated objects`;
    tags.innerHTML = [...new Set(sample.boxes.map(item => item.label))].map(label => `<span>${label}</span>`).join('');
    const areas = sample.boxes.map(item => item.bbox[2] * item.bbox[3]);
    const small = areas.filter(area => area <= 32 * 32).length;
    scale.innerHTML = `<strong>${small}/${areas.length}</strong><span>displayed boxes at small-object scale</span>`;
    [...strip.children].forEach((item, itemIndex) => item.classList.toggle('selected', itemIndex === current));
  }
  fetch('assets/explorer/samples.json').then(response => response.json()).then(data => {
    samples = data;
    samples.forEach((sample, index) => {
      const button = document.createElement('button');
      button.setAttribute('aria-label', `View ${sample.video}, frame ${sample.frame}`);
      button.innerHTML = `<img src="${sample.src}" alt="">`;
      button.addEventListener('click', () => select(index));
      strip.appendChild(button);
    });
    select(0);
  });
  toggle.addEventListener('change', draw);
  document.getElementById('previous-sample').addEventListener('click', () => select(current - 1));
  document.getElementById('next-sample').addEventListener('click', () => select(current + 1));
  window.addEventListener('resize', draw);
  document.getElementById('copy-command').addEventListener('click', async event => {
    await navigator.clipboard.writeText(document.getElementById('quick-command').textContent);
    event.currentTarget.textContent = 'Copied';
    setTimeout(() => { event.currentTarget.textContent = 'Copy'; }, 1200);
  });
})();
