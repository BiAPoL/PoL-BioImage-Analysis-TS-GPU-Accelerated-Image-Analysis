# cupy
In this session we will focus on image processing using [cupy](https://docs.cupy.dev/) a library that makes processing of images on [CUDA](https://developer.nvidia.com/cuda-toolkit)-compatible NVidia graphics cards available from Python.

To get started, we need to install cupy, e.g. like this:
```
mamba create --name cupy39 python=3.9 devbio-napari pyqt cupy cudatoolkit napari-cupy-image-processing -c conda-forge
```

Afterwards, we can activate the environment and start jupyter lab:
```bash
mamba create --name cupy39
```

```bash
jupyter lab
```

In case your computer does not have an NVidia graphics card, you can follow the exercises on [Google colab](https://colab.research.google.com/?utm_source=scs-index), where cupy is commonly installed. 

You can directly load notebooks there by entering the name of the `<notebook>` in this URL:
```
https://colab.research.google.com/github/BiAPoL/PoL-BioImage-Analysis-TS-GPU-Accelerated-Image-Analysis/blob/main/docs/25_cupy/<notebook>.ipynb
```

For example [https://colab.research.google.com/github/BiAPoL/PoL-BioImage-Analysis-TS-GPU-Accelerated-Image-Analysis/blob/main/docs/25_cupy/10_basics.ipynb](https://colab.research.google.com/github/BiAPoL/PoL-BioImage-Analysis-TS-GPU-Accelerated-Image-Analysis/blob/main/docs/25_cupy/10_basics.ipynb)

When working with Google colab, you may have to install packages in your kernel, such as [stackview](https://github.com/haesleinhuepf/stackview):

```
!pip install stackview ipycanvas==0.11
```

Make sure to select a GPU-runtime from the menu `Runtime > Change runtime type` ([read more](https://biapol.github.io/blog/robert_haase/cupy_cucim/readme.html))

![](colab_runtime.png)

