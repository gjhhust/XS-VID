(() => {
  const sources = {
    DFF: 'https://openaccess.thecvf.com/content_cvpr_2017/html/Zhu_Deep_Feature_Flow_CVPR_2017_paper.html', FGFA: 'https://openaccess.thecvf.com/content_iccv_2017/html/Zhu_Flow-Guided_Feature_Aggregation_ICCV_2017_paper.html', SELSA: 'https://github.com/happywu/Sequence-Level-Semantics-Aggregation', TROI: 'https://arxiv.org/abs/2109.03495', MEGA: 'https://openaccess.thecvf.com/content_CVPR_2020/html/Chen_Memory_Enhanced_Global-Local_Aggregation_for_Video_Object_Detection_CVPR_2020_paper.html', DiffusionVID: 'https://doi.org/10.1109/ACCESS.2023.3328341', StreamYOLO: 'https://github.com/yancie-yjr/StreamYOLO', TransVOD: 'https://github.com/SJTU-LuHe/TransVOD', FCOS: 'https://github.com/tianzhi0549/FCOS', ATSS: 'https://github.com/sfzhang15/ATSS', DyHead: 'https://arxiv.org/abs/2106.08322', RepPoints: 'https://github.com/microsoft/RepPoints', 'Deformable-DETR': 'https://github.com/fundamentalvision/Deformable-DETR', 'Sparse R-CNN': 'https://github.com/PeizeSun/SparseR-CNN', 'Cascade R-CNN': 'https://arxiv.org/abs/1712.00726', 'D-FINE-S': 'https://github.com/Peterande/D-FINE', 'D-FINE-L': 'https://github.com/Peterande/D-FINE', 'UFPMP-Det': 'https://github.com/PuAnysh/UFPMP-Det', CEASC: 'https://github.com/Cuogeihong/CEASC', CFINet: 'https://github.com/shaunyuan22/CFINet', YOLOX: 'https://github.com/Megvii-BaseDetection/YOLOX', 'YOLOv8-S': 'https://github.com/ultralytics/ultralytics', 'YOLOv8-L': 'https://github.com/ultralytics/ultralytics', 'YOLOv9-C': 'https://github.com/WongKinYiu/yolov9', 'YOLO11-L': 'https://github.com/ultralytics/ultralytics', 'HyperYOLO-S': 'https://github.com/iMoonLab/Hyper-YOLO', 'HyperYOLO-L': 'https://github.com/iMoonLab/Hyper-YOLO', 'YOLO-World-S (zero-shot)': 'https://github.com/AILab-CVC/YOLO-World', 'YOLO-World-S': 'https://github.com/AILab-CVC/YOLO-World', 'YOLO-World-L (zero-shot)': 'https://github.com/AILab-CVC/YOLO-World', 'YOLO-World-L': 'https://github.com/AILab-CVC/YOLO-World', 'Grounding DINO': 'https://github.com/IDEA-Research/GroundingDINO', 'YOLOFT-S': 'https://github.com/gjhhust/YOLOFT', 'YOLOFT-L': 'https://github.com/gjhhust/YOLOFT', SUSHI: 'https://github.com/dvl-tum/SUSHI', BoostTrack: 'https://github.com/vukasin-stanojevic/BoostTrack', HybridSORT: 'https://github.com/ymzis69/HybridSORT', 'OC-SORT': 'https://github.com/noahcao/OC_SORT', ByteTrack: 'https://github.com/ifzhang/ByteTrack', StrongSORT: 'https://github.com/dyhBUPT/StrongSORT', DeepOCSORT: 'https://github.com/GerardMaggiolino/Deep-OC-SORT', 'BoT-SORT': 'https://github.com/NirAharon/BoT-SORT', TrackFormer: 'https://github.com/timmeinhardt/trackformer', MOTR: 'https://github.com/megvii-research/MOTR', MOTIP: 'https://github.com/MCG-NJU/MOTIP', Unicorn: 'https://github.com/MasterBin-IIAU/Unicorn', UNINEXT: 'https://github.com/MasterBin-IIAU/UNINEXT', SeqTrack: 'https://github.com/microsoft/VideoX/tree/master/SeqTrack', 'PVT++': 'https://github.com/Jaraxxus-Me/PVT_pp', LoRAT: 'https://github.com/LitingLin/LoRAT', ODTrack: 'https://github.com/GXNU-ZhongLab/ODTrack', HIPTrack: 'https://github.com/WenRuiCai/HIPTrack', MCITrack: 'https://github.com/kangben258/MCITrack', SiamFC: 'https://github.com/bertinetto/siamese-fc', MDNet: 'https://github.com/hyseob/PyMDNet', ToMP50: 'https://github.com/visionml/pytracking', TransT: 'https://openaccess.thecvf.com/content/CVPR2021/html/Chen_Transformer_Tracking_CVPR_2021_paper.html'
  };
  const detection = [
    ['DFF', 'VOD', 10.9, 0, 0.2, 1.1, 7.6, 23.0, '62.12 M', '187.24 G', '20.9 ms'], ['FGFA', 'VOD', 11.7, 0, 0.2, 1.5, 9.3, 23.4, '64.48 M', '5579.10 G', '151.5 ms'], ['SELSA', 'VOD', 13.9, 0, 0.5, 2.3, 11.6, 28.1, '70.63 M', '2846.46 G', '88.5 ms'], ['TROI', 'VOD', 12.3, 0, 0.3, 1.8, 10.4, 25.6, '78.12 M', '3416.44 G', '232.1 ms'], ['MEGA', 'VOD', 9.8, 0, 0.1, 0.6, 6.8, 22.8, '—', '—', '—'], ['DiffusionVID', 'VOD', 11.5, 0, 0.2, 1.4, 9.0, 23.3, '—', '—', '—'], ['StreamYOLO', 'VOD', 21.1, 7.2, 10.3, 11.1, 22.0, 35.5, '54.84 M', '698.08 G', '47.54 ms'], ['TransVOD', 'VOD', 17.4, 3.8, 6.4, 6.0, 18.3, 30.1, '33.78 M', '613.92 G', '136.4 ms'],
    ['FCOS', 'GOD', 20.2, 5.3, 7.8, 7.2, 20.0, 35.5, '32.1 M', '202.0 G', '31.8 ms'], ['ATSS', 'GOD', 23.4, 7.7, 10.9, 11.8, 25.3, 36.0, '32.1 M', '206.0 G', '34.9 ms'], ['DyHead', 'GOD', 20.9, 4.8, 8.2, 8.2, 21.6, 32.1, '38.91 M', '112.0 G', '98.4 ms'], ['RepPoints', 'GOD', 23.9, 6.2, 10.3, 11.0, 24.8, 41.3, '36.8 M', '194.0 G', '37.8 ms'], ['Deformable-DETR', 'GOD', 17.1, 3.8, 5.2, 5.8, 16.5, 42.5, '40.1 M', '200.0 G', '52.3 ms'], ['Sparse R-CNN', 'GOD', 23.3, 7.2, 11.3, 12.3, 23.4, 39.4, '106.0 M', '181.3 G', '41.8 ms'], ['Cascade R-CNN', 'GOD', 15.6, 1.9, 5.3, 5.5, 15.5, 23.0, '41.38 M', '196.73 G', '45.3 ms'], ['D-FINE-S', 'GOD', 24.5, 9.6, 13.5, 12.2, 26.5, 35.5, '10.18 M', '59.3 G', '54.2 ms'], ['D-FINE-L', 'GOD', 28.3, 11.0, 15.4, 15.1, 28.6, 48.3, '30.64 M', '223.9 G', '72.3 ms'],
    ['UFPMP-Det', 'Small-object', 23.3, 5.9, 11.4, 8.9, 23.7, 31.7, '64.68 M', '167.80 G', '212.4 ms'], ['CEASC', 'Small-object', 17.2, 4.6, 6.1, 7.3, 20.1, 23.7, '43.05 M', '103.21 G', '31.5 ms'], ['CFINet', 'Small-object', 19.8, 5.4, 9.2, 8.0, 18.6, 27.7, '43.9 M', '231.70 G', '47.1 ms'],
    ['YOLOX', 'YOLO', 17.3, 6.9, 8.2, 10.8, 19.5, 19.9, '8.9 M', '34.1 G', '24.3 ms'], ['YOLOv8-S', 'YOLO', 22.7, 9.0, 11.7, 11.6, 23.7, 36.0, '11.17 M', '28.8 G', '14.6 ms'], ['YOLOv8-L', 'YOLO', 26.7, 10.1, 14.4, 14.8, 26.2, 39.2, '43.69 M', '165.7 G', '26.4 ms'], ['YOLOv9-C', 'YOLO', 22.6, 7.7, 12.4, 10.9, 26.0, 39.2, '25.54 M', '104.0 G', '22.3 ms'], ['YOLO11-L', 'YOLO', 21.1, 7.7, 12.3, 11.0, 26.0, 37.9, '25.30 M', '87.6 G', '18.2 ms'], ['HyperYOLO-S', 'YOLO', 23.9, 9.2, 12.9, 10.8, 26.4, 39.4, '14.8 M', '39.4 G', '16.8 ms'], ['HyperYOLO-L', 'YOLO', 26.2, 11.1, 14.5, 11.9, 28.3, 37.1, '56.2 M', '212.0 G', '31.2 ms'],
    ['YOLO-World-S (zero-shot)', 'Open-vocabulary', 10.2, 0.2, 1.2, 7.6, 18.3, 29.3, '12.7 M', '33.5 G', '11.5 ms'], ['YOLO-World-S', 'Open-vocabulary', 22.0, 9.3, 12.3, 10.8, 26.0, 40.5, '12.7 M', '33.5 G', '11.5 ms'], ['YOLO-World-L (zero-shot)', 'Open-vocabulary', 16.5, 1.5, 4.2, 12.2, 23.5, 36.9, '46.8 M', '177.1 G', '26.7 ms'], ['YOLO-World-L', 'Open-vocabulary', 27.2, 11.0, 14.9, 14.4, 31.0, 50.4, '46.8 M', '177.1 G', '26.7 ms'], ['Grounding DINO', 'Open-vocabulary', 21.7, 5.5, 8.0, 9.3, 22.4, 42.6, '—', '—', '—'],
    ['YOLOFT-S', 'YOLOFT', 25.8, 9.8, 13.3, 14.4, 28.1, 39.2, '13.4 M', '36.6 G', '16.3 ms'], ['YOLOFT-L', 'YOLOFT', 29.3, 11.5, 16.2, 17.0, 29.6, 47.4, '49.8 M', '194.5 G', '29.3 ms']
  ];
  const mot = [
    ['SUSHI', 'Multi-stage', 'GNN', 15.1, 1.4, 15.1, 9.7, 27.5, 26.7, 40.5, 4821], ['BoostTrack', 'Multi-stage', 'T-by-D', 14.4, 8.0, 11.6, 9.9, 14.6, 17.3, 40.3, 9616], ['HybridSORT', 'Multi-stage', 'T-by-D', 16.5, 4.0, 16.2, 11.9, 26.6, 37.5, 48.7, 2076], ['OC-SORT', 'Multi-stage', 'T-by-D', 20.1, 8.8, 26.1, 11.6, 32.0, 34.8, 47.8, 7116], ['ByteTrack', 'Multi-stage', 'T-by-D', 22.3, 11.4, 26.7, 11.9, 34.3, 36.1, 52.6, 1603], ['StrongSORT', 'Multi-stage', 'T-by-D', 26.0, 18.9, 25.8, 13.9, 38.3, 36.8, 53.9, 4283], ['DeepOCSORT', 'Multi-stage', 'T-by-D', 26.9, 20.0, 25.2, 16.6, 39.1, 37.4, 53.0, 3563], ['BoT-SORT', 'Multi-stage', 'T-by-D', 32.1, 22.4, 33.4, 18.1, 40.8, 37.1, 54.7, 3411],
    ['TrackFormer', 'End-to-end', 'E2E-Trans', 15.2, 3.7, 18.5, 1.5, 26.2, 27.6, 41.2, 1680], ['MOTR', 'End-to-end', 'E2E-Trans', 13.0, 2.8, 13.4, 10.3, 17.3, 19.8, 35.7, 65], ['MOTIP', 'End-to-end', 'E2E-Trans', 6.5, 0.5, 7.6, 0.0, 20.3, 13.2, 36.2, 2549], ['Unicorn', 'Unified', 'Unified', 24.6, 10.2, 31.2, 6.4, 33.4, 32.4, 51.2, 1537], ['UNINEXT', 'Unified', 'Unified', 20.1, 11.5, 23.5, 3.3, 29.4, 32.6, 50.2, 1757], ['YOLOFT-L', 'Unified', 'Unified', 31.5, 21.7, 32.8, 16.4, 40.4, 30.7, 55.2, 1220]
  ];
  const sot = [
    ['SeqTrack', 'Specialized', 52.94, 76.96, 36.0, 'CVPR', 2023, 'SeqTrack_b256'], ['SeqTrack', 'Specialized', 54.26, 78.34, 7.6, 'CVPR', 2023, 'SeqTrack_l384'], ['PVT++', 'Specialized', 11.49, 25.71, 36.2, 'ICCV', 2023], ['LoRAT', 'Specialized', 62.41, 83.31, 209.0, 'ECCV', 2024, 'LoRAT_b224'], ['LoRAT', 'Specialized', 66.40, 87.07, 50.0, 'ECCV', 2024, 'LoRAT_g224'], ['ODTrack', 'Specialized', 58.50, 85.30, 28.55, 'AAAI', 2024, 'ODTrack_base'], ['ODTrack', 'Specialized', 61.25, 89.11, 15.67, 'AAAI', 2024, 'ODTrack_large'], ['HIPTrack', 'Specialized', 57.75, 81.93, 46.5, 'CVPR', 2024], ['MCITrack', 'Specialized', 56.53, 79.88, 8.5, 'AAAI', 2025, 'MCITrack_l384'], ['MCITrack', 'Specialized', 53.63, 76.17, 19.8, 'AAAI', 2025, 'MCITrack_s224'], ['SiamFC', 'Specialized', 42.42, 69.85, 118.0, 'ECCVW', 2016], ['MDNet', 'Specialized', 45.59, 72.83, 2.7, 'CVPR', 2016], ['ToMP50', 'Specialized', 53.51, 78.42, 17.0, 'CVPR', 2022], ['TransT', 'Specialized', 57.31, 80.72, 22.0, 'CVPR', 2021],
    ['Unicorn', 'Unified', 25.62, 45.83, 5.1, 'ECCV', 2022], ['UNINEXT', 'Unified', 38.84, 54.30, 21.0, 'CVPR', 2023], ['YOLOFT-L', 'Unified', 59.63, 81.35, 17.1, '—', '—']
  ];
  const taskConfig = {
    detection: { title: 'Detection', text: 'All methods are evaluated on the released XS-VID Detection protocol. AP columns report scale-specific results.', metric: 'AP', rows: detection, headers: ['Method', 'Family', 'AP', 'APes', 'APrs', 'APgs', 'APm', 'APl', 'Params', 'FLOPs', 'Latency'], numeric: [2, 3, 4, 5, 6, 7], callout: ['29.3 AP', 'YOLOFT-L'] },
    mot: { title: 'Multi-object tracking', text: 'Multi-stage methods use the common YOLOFT detections. End-to-end and unified methods are reported as model-level entries.', metric: 'TAO mAP', rows: mot, headers: ['Tracker / model', 'Family', 'Paradigm', 'mAP', 'APs', 'APm', 'APs*', 'APm*', 'MOTA', 'IDF1', 'IDSw'], numeric: [3, 4, 5, 6, 7, 8, 9, 10], callout: ['32.1 mAP', 'BoT-SORT · track-by-detection'] },
    sot: { title: 'Single-object tracking', text: 'Trackers are evaluated on the released target trajectories using success AUC and 20-pixel precision.', metric: 'Success AUC', rows: sot, headers: ['Tracker', 'Family', 'AUC', 'Precision', 'FPS', 'Venue', 'Year'], numeric: [2, 3, 4, 6], callout: ['66.40 AUC', 'LoRAT-g224'] }
  };
  const panel = document.getElementById('benchmark-content');
  let activeTask = 'detection';
  let activeFilter = 'All';
  let sortState = { index: null, direction: -1 };
  const methodBase = (name) => name.replace(/[-_].*$/, '').replace(/ \(.+\)$/, '');
  const methodLink = (name, label) => sources[name] || sources[methodBase(name)] ? `<a class="method-link" href="${sources[name] || sources[methodBase(name)]}" target="_blank" rel="noreferrer">${label} <span>↗</span></a>` : label;
  const format = (value) => typeof value === 'number' ? value.toFixed(2).replace(/\.00$/, '.0').replace(/(\.\d)0$/, '$1') : value;
  function renderBenchmark() {
    const config = taskConfig[activeTask];
    const families = ['All', ...new Set(config.rows.map(row => row[1]))];
    let rows = config.rows.filter(row => activeFilter === 'All' || row[1] === activeFilter);
    if (sortState.index !== null) {
      rows = [...rows].sort((a, b) => {
        const av = a[sortState.index]; const bv = b[sortState.index];
        const an = typeof av === 'number' ? av : Number.parseFloat(av);
        const bn = typeof bv === 'number' ? bv : Number.parseFloat(bv);
        const result = Number.isFinite(an) && Number.isFinite(bn) ? an - bn : String(av).localeCompare(String(bv));
        return result * sortState.direction;
      });
    }
    const cells = (row) => row.slice(0, config.headers.length).map((value, index) => {
      const label = index === 0 && activeTask === 'sot' && row[7] ? `${value} <small>${row[7]}</small>` : value;
      const content = index === 0 ? methodLink(value, label) : format(value);
      return `<td>${content}</td>`;
    });
    panel.innerHTML = `<div class="benchmark-panel"><div><div class="benchmark-panel-top"><div><h3>${config.title}</h3><p>${config.text}</p></div><div class="metric-callout"><strong>${config.callout[0]}</strong><span>${config.callout[1]}</span></div></div><div class="benchmark-tools"><div class="family-filter" role="group" aria-label="Filter ${config.title} methods">${families.map(family => `<button class="family-button ${family === activeFilter ? 'active' : ''}" data-family="${family}">${family}</button>`).join('')}</div><p>Click a column heading to sort. <span>${rows.length}/${config.rows.length} methods shown.</span></p></div><div class="table-wrap"><table class="results-table"><thead><tr>${config.headers.map((header, index) => `<th><button class="sort-button" data-sort="${index}">${header}${sortState.index === index ? `<span>${sortState.direction === 1 ? '↑' : '↓'}</span>` : ''}</button></th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr class="${row[1] === 'YOLOFT' || row[0] === 'YOLOFT-L' ? 'ours-row' : ''}">${cells(row).join('')}</tr>`).join('')}</tbody></table></div></div></div>`;
    panel.querySelectorAll('.family-button').forEach(button => button.addEventListener('click', () => { activeFilter = button.dataset.family; renderBenchmark(); }));
    panel.querySelectorAll('.sort-button').forEach(button => button.addEventListener('click', () => { const index = Number(button.dataset.sort); sortState = { index, direction: sortState.index === index ? -sortState.direction : -1 }; renderBenchmark(); }));
  }
  document.querySelectorAll('.task-tab').forEach(button => button.addEventListener('click', () => { activeTask = button.dataset.task; activeFilter = 'All'; sortState = { index: null, direction: -1 }; document.querySelectorAll('.task-tab').forEach(item => item.classList.toggle('active', item === button)); renderBenchmark(); }));
  renderBenchmark();

  const canvas = document.getElementById('annotation-canvas');
  const context = canvas.getContext('2d');
  const loading = document.querySelector('.canvas-loading');
  const meta = document.getElementById('sample-meta');
  const tags = document.getElementById('sample-tags');
  const scale = document.getElementById('sample-scale');
  const strip = document.getElementById('sample-strip');
  const picker = document.getElementById('sequence-picker');
  const trackList = document.getElementById('track-list');
  const selectAllTracks = document.getElementById('select-all-tracks');
  const clearTracks = document.getElementById('clear-tracks');
  const toggle = document.getElementById('toggle-boxes');
  const playButton = document.getElementById('autoplay-sequence');
  toggle.checked = true;
  let sequences = [];
  let sequenceIndex = 0;
  let frameIndex = 0;
  let image = new Image();
  let frameImages = [];
  let timer = null;
  let loadGeneration = 0;
  let framesReady = false;
  let playbackTimestamp = 0;
  let selectedTrackKeys = new Set();
  const categoryColors = {
    person: '#d9ee83',
    car: '#ff8a75',
    'bicycle-person': '#8ad3e8',
    'bicycle-static': '#d6b5eb'
  };
  const categoryClass = label => `tag--${label.replace(/[^a-z0-9]+/gi, '-')}`;
  const trackKey = box => `${box.label}::${box.trackId}`;
  const currentFrame = () => sequences[sequenceIndex]?.frames[frameIndex];
  const sequenceTracks = sequence => {
    const tracks = new Map();
    sequence.frames.flatMap(frame => frame.boxes).forEach(box => tracks.set(trackKey(box), { label: box.label, trackId: box.trackId }));
    return [...tracks.entries()].sort(([, a], [, b]) => a.label.localeCompare(b.label) || Number(a.trackId) - Number(b.trackId));
  };
  const visibleBoxes = frame => frame.boxes.filter(box => selectedTrackKeys.has(trackKey(box)));
  function renderTrackFilter() {
    const sequence = sequences[sequenceIndex];
    if (!sequence) return;
    const tracks = sequenceTracks(sequence);
    trackList.innerHTML = tracks.map(([key, track]) => {
      const color = categoryColors[track.label] || '#d9ee83';
      const checked = selectedTrackKeys.has(key) ? ' checked' : '';
      return `<label class="track-choice" style="--track-color:${color}"><input type="checkbox" data-track-key="${key}"${checked}><i></i><span>${track.label} · #${track.trackId}</span></label>`;
    }).join('');
    trackList.querySelectorAll('input').forEach(input => input.addEventListener('change', () => {
      if (input.checked) selectedTrackKeys.add(input.dataset.trackKey);
      else selectedTrackKeys.delete(input.dataset.trackKey);
      draw();
      updateFrameDetails();
    }));
  }
  function draw() {
    const frame = currentFrame();
    if (!frame || !image.complete) return;
    canvas.width = frame.width; canvas.height = frame.height;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    if (!toggle.checked) return;
    const displayScale = canvas.width / Math.max(1, canvas.clientWidth || canvas.width);
    context.lineWidth = Math.max(2 * displayScale, canvas.width / 420);
    const labelFontSize = Math.max(13 * displayScale, canvas.width / 65);
    const labelPadding = Math.ceil(3 * displayScale);
    const labelHeight = Math.ceil(labelFontSize + labelPadding * 2);
    context.font = `${labelFontSize}px Manrope`;
    visibleBoxes(frame).forEach(box => {
      const [x, y, width, height] = box.bbox;
      const color = categoryColors[box.label] || '#d9ee83';
      context.strokeStyle = color;
      context.strokeRect(x, y, width, height);
      if (width * height >= 850) {
        const text = box.trackId === undefined || box.trackId === null ? box.label : `${box.label} · #${box.trackId}`;
        const textWidth = context.measureText(text).width + labelPadding * 2;
        const labelY = Math.max(0, y - labelHeight);
        context.fillStyle = color;
        context.fillRect(x, labelY, textWidth, labelHeight);
        context.fillStyle = '#10231f';
        context.fillText(text, x + labelPadding, labelY + labelFontSize + labelPadding / 2);
      }
    });
  }
  function updateFrameDetails() {
    const sequence = sequences[sequenceIndex];
    const frame = currentFrame();
    if (!sequence || !frame) return;
    const boxes = visibleBoxes(frame);
    meta.textContent = `${sequence.video} · frame ${frame.frame} · ${boxes.length}/${frame.boxes.length} displayed objects`;
    tags.innerHTML = [...new Set(boxes.map(item => item.label))].map(label => `<span class="${categoryClass(label)}">${label}</span>`).join('') || '<span>no selected track in this frame</span>';
    const areas = boxes.map(item => item.bbox[2] * item.bbox[3]);
    const small = areas.filter(area => area <= 32 * 32).length;
    scale.innerHTML = `<strong>${small}/${areas.length}</strong><span>displayed boxes at small-object scale</span>`;
    [...strip.children].forEach((item, itemIndex) => item.classList.toggle('selected', itemIndex === frameIndex));
  }
  function renderFrame(index, updateDetails = false) {
    const sequence = sequences[sequenceIndex];
    if (!sequence) return;
    frameIndex = (index + sequence.frames.length) % sequence.frames.length;
    const frame = currentFrame();
    const target = frameImages[frameIndex] || new Image();
    if (!target.src) target.src = frame.src;
    image = target;
    const generation = loadGeneration;
    const finish = () => {
      if (generation !== loadGeneration || image !== target) return;
      loading.style.display = 'none';
      draw();
    };
    if (target.complete && target.naturalWidth) finish();
    else {
      if (!framesReady) loading.style.display = 'block';
      target.addEventListener('load', finish, { once: true });
    }
    const selected = strip.children[frameIndex];
    const previous = strip.querySelector('.selected');
    if (previous && previous !== selected) previous.classList.remove('selected');
    if (selected) selected.classList.add('selected');
    if (updateDetails) updateFrameDetails();
  }
  function selectFrame(index) {
    setAutoplay(false);
    renderFrame(index, true);
  }
  function preloadFrames(sequence, generation) {
    framesReady = false;
    frameImages = sequence.frames.map(frame => {
      const cached = new Image();
      cached.decoding = 'async';
      cached.src = frame.src;
      return cached;
    });
    return Promise.all(frameImages.map(async cached => {
      if (!cached.complete || !cached.naturalWidth) {
        await new Promise(resolve => {
          cached.addEventListener('load', resolve, { once: true });
          cached.addEventListener('error', resolve, { once: true });
        });
      }
      if (cached.naturalWidth && cached.decode) {
        try { await cached.decode(); } catch (_) {}
      }
    })).then(() => {
      if (generation !== loadGeneration) return;
      framesReady = true;
      renderFrame(frameIndex, true);
      setAutoplay(true);
    });
  }
  function selectSequence(index) {
    setAutoplay(false);
    loadGeneration += 1;
    const generation = loadGeneration;
    sequenceIndex = index; frameIndex = 0;
    picker.querySelectorAll('button').forEach((button, buttonIndex) => button.classList.toggle('selected', buttonIndex === sequenceIndex));
    const sequence = sequences[sequenceIndex];
    selectedTrackKeys = new Set(sequenceTracks(sequence).map(([key]) => key));
    renderTrackFilter();
    strip.innerHTML = '';
    sequence.frames.forEach((frame, indexFrame) => {
      const button = document.createElement('button');
      button.setAttribute('aria-label', `View ${sequence.title}, frame ${frame.frame}`);
      button.innerHTML = `<img src="${frame.src}" alt="">`;
      button.addEventListener('click', () => selectFrame(indexFrame));
      strip.appendChild(button);
    });
    const preload = preloadFrames(sequence, generation);
    renderFrame(0, true);
    preload.catch(() => {});
  }
  function animate(timestamp) {
    if (timer === null) return;
    const sequence = sequences[sequenceIndex];
    const duration = 1000 / (sequence.fps || 10);
    if (!playbackTimestamp) playbackTimestamp = timestamp;
    const elapsed = timestamp - playbackTimestamp;
    if (elapsed >= duration) {
      const steps = Math.floor(elapsed / duration);
      playbackTimestamp += steps * duration;
      renderFrame(frameIndex + steps, true);
    }
    timer = requestAnimationFrame(animate);
  }
  function setAutoplay(enabled) {
    if (timer !== null) cancelAnimationFrame(timer);
    timer = null;
    playbackTimestamp = 0;
    const shouldPlay = enabled && framesReady && Boolean(sequences[sequenceIndex]);
    playButton.classList.toggle('active', shouldPlay);
    playButton.setAttribute('aria-pressed', String(shouldPlay));
    playButton.textContent = shouldPlay ? 'Pause' : 'Play';
    if (shouldPlay) timer = requestAnimationFrame(animate);
  }
  fetch('assets/explorer/sequences.json?v=explorer-tracks-1').then(response => response.json()).then(data => {
    sequences = data;
    sequences.forEach((sequence, index) => {
      const button = document.createElement('button');
      button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span><strong>${sequence.title}</strong><small>${sequence.description}</small>`;
      button.addEventListener('click', () => selectSequence(index));
      picker.appendChild(button);
    });
    selectSequence(0);
  });
  toggle.addEventListener('change', draw);
  selectAllTracks.addEventListener('click', () => {
    selectedTrackKeys = new Set(sequenceTracks(sequences[sequenceIndex]).map(([key]) => key));
    renderTrackFilter();
    draw();
    updateFrameDetails();
  });
  clearTracks.addEventListener('click', () => {
    selectedTrackKeys.clear();
    renderTrackFilter();
    draw();
    updateFrameDetails();
  });
  playButton.addEventListener('click', () => {
    const wasPlaying = timer !== null;
    setAutoplay(!wasPlaying);
    if (wasPlaying) updateFrameDetails();
  });
  document.getElementById('previous-sample').addEventListener('click', () => { setAutoplay(false); selectFrame(frameIndex - 1); });
  document.getElementById('next-sample').addEventListener('click', () => { setAutoplay(false); selectFrame(frameIndex + 1); });
  window.addEventListener('resize', draw);
  document.getElementById('copy-command').addEventListener('click', async event => {
    await navigator.clipboard.writeText(document.getElementById('quick-command').textContent);
    event.currentTarget.textContent = 'Copied';
    setTimeout(() => { event.currentTarget.textContent = 'Copy'; }, 1200);
  });
})();
