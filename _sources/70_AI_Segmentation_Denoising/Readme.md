# AI segmentation and denoising

Welcome to the session on segmentation on segmentation and denoising using deep learning. This tutorial will pick up where the previous session on pytorch left off. This tutoorial will cover several topics:

* [Training a Unet for segmentation](./01_2D_unet_training.ipynb): The [Unet](https://www.nature.com/articles/s41592-018-0261-2) was and is *the* working horse architecture for the segmentation of image data across all possible domains.
* [Denoising image data with Noise2Void](./02_Noise2Void.ipynb): [Noise2Void](https://openaccess.thecvf.com/content_CVPR_2019/html/Krull_Noise2Void_-_Learning_Denoising_From_Single_Noisy_Images_CVPR_2019_paper.html) and its update, [Probabilistic Noise2Void](https://www.frontiersin.org/articles/10.3389/fcomp.2020.00005/full) are powerful tools for denoising any image data without the need for ground truth data.
* [Denoising 3D image datawith Noise2Void](./03_Noise2Void_3D.ipynb): Noise2Void can be extended to 3D image data. This notebook will show you how to do that.

## Before you start

When you log into the HPC, make sure you apply the correct settings. On the login page, this is what you should set for the following tutorial:

![](./HPC_settings.PNG)

## Kernels to use

In order to install the singularity containers needed for this exercise, first clone the following repository into your home directory:

```bash
git clone https://gitlab.mn.tu-dresden.de/bia-pol/singularity-devbio-napari.git
cd singularity-devbio-napari
```

Then, install the correct container. The following table shows which container to install for which notebook. You can install a container by running this command:

```bash
./install.sh <name-of-container>
```

| Notebook | Installlation | Kernel name |
| --- | --- | --- |
| [01_2D_unet_training.ipynb](./01_2D_unet_training.ipynb) | `./install.sh pol-course-pytorch` | `pol-course-pytorch`
| [02_Noise2Void.ipynb](./02_Noise2Void.ipynb) | `./install.sh pol-course-pytorch` | `pol-course-pytorch`|
| [03_Noise2Void_3D.ipynb](./03_Noise2Void_3D.ipynb) | `./install.sh n2v` | `n2v`|


## Lecture materials

[Link to slides](./CNNs_N2V.pdf)