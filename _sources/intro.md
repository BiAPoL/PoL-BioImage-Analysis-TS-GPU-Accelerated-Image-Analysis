# PoL Bio-Image Analysis Training School on GPU-Accelerated Image Analysis

This [Jupyter book](https://jupyterbook.org/) contains training resources for scientists who want to dive into image processing.
It specifically aims for students and scientists working with microscopy images in the life sciences.

Here, we cover the *GPU-Accelerated Image Analysis* Track of the [PoL Bio-Image Analysis Symposium](https://biopol-training.eventmember.de/)

* clesperanto
* cupy
* dask
* Deconvolution
* Pytorch
* AI-based Denoising
* AI-based Segmentation

## How to use this material

For following the course, we recommend downloading [the repository from which this Jupyter book is made](https://github.com/BiAPoL/Pasteur-NEUBIAS-training-school-on-Bioimage-Analysis).
All Jupyter Notebooks are executable so that attendees can reproduce all demos and exercises.

![img.png](how_to_download.png)

Assuming you downloaded the repository to your Desktop, you can open the Jupyter book by opening a terminal and typing:

```bash
cd Desktop/Pasteur-NEUBIAS-training-school-on-Bioimage-Analysis

conda activate devbio-napari-env

jupyter lab
```

Using Jupyter lab, you can navigate to the course lessons in the `docs` folder.
![img.png](jupyterlab.png)

... and execute the code and experiment with it.
![img.png](jupyterlab2.png)

## Feedback and support

If you have any questions, please use the anonymous etherpad (see email) or create a [github issue](https://github.com/BiAPoL/Pasteur-NEUBIAS-training-school-on-Bioimage-Analysis/issues).
Alternatively, open a thread on [image.sc](https://image.sc), put a link to the lesson or exercise you want to ask a question about and tag @haesleinhuepf.

## Acknowledgements

This course was held virtually at EPFL Lausanne in December 2022. We would like to thank Suliana Manley for the invitation, Edward Andò, Mallory Wittwer, Florian Aymanns for the local support and the EPFL Lausanne for financial support.
We would like to thank all the people who shared teaching materials we are reusing here, in particular Anna Poetsch ([Biotec Dresden](https://tu-dresden.de/cmcb/biotec/forschungsgruppen/poetsch)),
Benoit Lombardot (MPI-CBG Dresden), Martin Weigert (EPFL Lausanne) and Alexander Krull (U Birmingham).
We acknowledge support by the Deutsche Forschungsgemeinschaft under Germany’s Excellence Strategy—EXC2068–Cluster of Excellence Physics of Life of TU Dresden.
