# Clesperanto

This regroup a collections of introduction notebook on how to use the py-Clesperanto librairy for image processing.

## Installation

First create a virtual environment:
    
```bash
conda create -n myenv python=3.9
conda activate myenv
```
Note:
- You can replace `myenv` by the name of your choice.
- You can replace `python=3.9` by the version of python you want to use (`>= 3.8`)
- You can replace `conda` by `mamba` if you have it installed.

Then install the packages:
```bash 
conda install -c conda-forge pyclesperanto-prototype
```
or using pip:
```bash
pip install pyclesperanto-prototype
```

### Troubleshooting

- see [pyclesperanto_prototype repository](https://github.com/clEsperanto/pyclesperanto_prototype/tree/master) readme for more information.

### No Device available

- see [enable OpenCL on google colab](https://github.com/clEsperanto/pyclesperanto_prototype/issues/300#issuecomment-1682266653).