# cupy
In this session we will focus on image processing using [cupy](https://docs.cupy.dev/) a library that makes processing of images on [CUDA](https://developer.nvidia.com/cuda-toolkit)-compatible NVidia graphics cards available from Python.

To get started, we need to install cupy, e.g. like this:
```
mamba create --name cupy39 python=3.9 devbio-napari pyqt cupy cudatoolkit napari-cupy-image-processing -c conda-forge
```

In case your computer does not have an NVidia graphics card, you can follow the exercises on [Google colab](https://colab.research.google.com/?utm_source=scs-index), where cupy is commonly installed. Make sure to select a GPU-runtime from the menu `Runtime > Change runtime type` ([read more](https://biapol.github.io/blog/robert_haase/cupy_cucim/readme.html))

![](colab_runtime.png)

