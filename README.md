# XS-VID benchmark
To access the XS-VID benchmark go to https://gjhhust.github.io/XS-VID/

# Update
- [20250303] We have provided a new download of XS-VIDv2 with the v1 data merged to form a new dataset, with a convenient command line download: [XS-VID](https://gjhhust.github.io/XS-VID/)!
- [20250301] We have released XS-VIDv2 containing 374 videos with 186446 frames for training 36478 frames for testing!
- [20241124] We will soon be releasing XS-VIDv2, incorporating many new videos and scenarios!
- [20241011] our paper released on **https://arxiv.org/abs/2407.18137**
- [20240811] Annotation in YOLO format released!
- [20240530] The quantitative results of several mainstream methods on XS-VID test-set are reported!
- [20240530] We add the visualization of images in XS-VID.
- [20240528] Our **[Homepage](https://gjhhust.github.io/XS-VID/)** for XS-VID benchmark opens!

# use eval tool
1. clone main branch file, include "eval_tool.py"、"cocoeval.py"、"mask.py"
2. set test coco json and prediction json in eval_tool.py
3. python eval_tool.py
