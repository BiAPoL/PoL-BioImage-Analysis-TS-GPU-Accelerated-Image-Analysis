# Lazy and parallel bio-image processing using DASK

When images take too long to load or process, or don’t fit into memory, they can be split up and managed in small parts. This practical is about easily gaining control over which parts of a (bio-)image are processed when and where in the context of interactive python workflows, napari and cluster computing.

## Preparation

To get started, we need to install/activate a suitable conda environment:

### Option 1:

Use the environment created in the [course preparation](
https://biapol.github.io/PoL-BioImage-Analysis-TS-GPU-Accelerated-Image-Analysis/00_course_preparation/Readme.html) and install some further packages to it:

```
mamba activate devbio-napari-env
mamba install -c conda-forge dask-image ipycytoscape
```

### Option 2:

Create a new environment from scratch:

```
mamba create --name <dask_course> python=3.9 devbio-napari pyqt dask-image ipycytoscape -c conda-forge
mamba activate dask_course
```

## Lecture materials

### Slides

Download introductory slides [here](202308_dask_workshop_slides.pdf).

### Notebooks

1) [Dask basics](1_dask_basics.ipynb)
2) [Processing images with dask](2_dask_image.ipynb)
3) [Lazy image processing workflows](3_lazy_image_processing.ipynb)