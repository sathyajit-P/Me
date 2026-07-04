---
title: "Lung Segmentation using UNet"
description: "Replicated the original 2015 paper to train a Unet model to effectively segment Lung CXRs."
tags: ["PyTorch"]
github: "https://github.com/sathyajitp/U-net"
---

Implemented the UNet architecture from scratch in PyTorch with a 4-level encoder-decoder, skip connections, bilinear
upsampling, and a 31M-parameter model trained end-to-end using BCEWithLogitsLoss and Adam optimiser.
Trained on 21715 chest X-ray images from the CovidQU dataset for 15 epochs, achieving a Dice score of 0.9774 and IoU
of 0.9565 on the CovidQU test set.
Evaluated cross-dataset generalisation on the JSRT dataset(247 images) achieving a Dice score of 0.9744, demonstrating
model robustness to out-of-distribution medical imaging data.