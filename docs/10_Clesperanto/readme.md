# Clesperanto

This regroup a collections of introduction notebook for the cours on the py-Clesperanto librairy for image processing.

## Installation instruction for pyclesperanto-prototype

First create a virtual environment:
    
```bash
mamba create -n myenv python=3.9
mamba activate myenv
```
Note:
- You can replace `myenv` by the name of your choice.
- You can replace `python=3.9` by the version of python you want to use.

Then install the packages:
```bash 
mamba install -c conda-forge pyclesperanto-prototype
```
or using pip:
```bash
pip install pyclesperanto-prototype
```

### Troubleshooting

#### MacOs
```bash
mamba install -c conda-forge ocl_icd_wrapper_apple
```
#### Linux
```bash
mamba install -c conda-forge ocl-icd-system
```
#### No OpenCL device compatible (no GPUs found)
```bash
mamba install  oclgrind -c conda-forge
```
OR
```bash
mamba install  oclgrind -c conda-forge
```
#### Other issues? 
Please go have a look [here](https://github.com/clEsperanto/pyclesperanto_prototype/issues) and call for help if possible.



## Installation instruction for pyclesperanto

__WARNING__: this is still under development, but we are looking for testers and people to start using it for improvement and feedbacks.

First create a virtual environment:
    
```bash
mamba create -n myenv
mamba activate myenv
```

Then install the packages:
```bash
pip install pyclesperanto
```

Note: no mamba recipe is available yet.

### Notebook update

If you want to try the ongoing development version of the librairy with these notebooks, you will have to update the `import` line of the library and remove the `_prototype` to:
```python
import pyclesperanto as cle
```