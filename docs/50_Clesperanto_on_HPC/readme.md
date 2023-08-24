#  Using Clesperanto on Taurus

In this session we will make use of [clesperanto](https://github.com/clEsperanto/pyclesperanto_prototype) on TU Dresden's HPC infrastructure.

Therefore, we need to install a singularity container on the HPC cluster as explained [in detail here](https://gitlab.mn.tu-dresden.de/bia-pol/singularity-devbio-napari#quick-start). In very short: [Login to taurus](https://taurus.hrsk.tu-dresden.de/jupyter/hub/home) and execute the following commands:

```bash
git clone https://gitlab.mn.tu-dresden.de/bia-pol/singularity-devbio-napari.git
```

```bash
cd singularity-devbio-napari
```

```bash
./install.sh <version>
```
