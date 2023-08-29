# Exercises: GPU-accelerated image processing on HPC

## clesperanto & cupy benchmarking

On the Taurus cluster you have access to powerful NVidia A100 GPUs. Upload an run the benchmarking notebook from the [cupy session](https://github.com/BiAPoL/PoL-BioImage-Analysis-TS-GPU-Accelerated-Image-Analysis/tree/main/docs/25_cupy) and compare the performance of the cluster's GPU with your local GPU.

## Bio-image Analysis workflows on HPC

Upload a tif file from this [zenodo repository](https://zenodo.org/record/5837363) to the project space at the cluster. Program a Jupyter notebook using clesperano that segments the nuclei in this 3D dataset (hint 1: generate a notebook on your local computer and upload it to the cluster, hint 2: use [top-hat background-removal](https://haesleinhuepf.github.io/BioImageAnalysisNotebooks/18_image_filtering/03_background_removal.html) and [Voronoi-Otsu-Labeling](https://haesleinhuepf.github.io/BioImageAnalysisNotebooks/20_image_segmentation/11_voronoi_otsu_labeling.html)). Store the segmentation result on the project space.
