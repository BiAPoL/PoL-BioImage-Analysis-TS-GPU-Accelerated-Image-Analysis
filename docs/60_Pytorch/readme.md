# Introduction to Pytorch

Workshop given on Aug 29, 2023 at the PoLBIAS Training school.

Event page: https://biapol.eventmember.de/


## Start JupyterLab
The instrutions are taken and adapted from [here](https://gitlab.vgiscience.de/ad/mobile_cart_workshop2020/-/blob/master/Readme.md)

1. Make sure to connect to TUD network using a VPN connection (Cisco VPN or OpenVPN), otherwise you will not be able to use any of ZIH HPC Services.
2. Add your ZIH-Login to the HPC project, using the pre-shared link
    - this needs to be done only once
    - it may take up to two hours before your login is available
3. Click [this link](https://taurus.hrsk.tu-dresden.de/jupyter/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2FBiAPoL%2FPoL-BioImage-Analysis-TS-GPU-Accelerated-Image-Analysis&urlpath=lab%2Ftree%2FPoL-BioImage-Analysis-TS-GPU-Accelerated-Image-Analysis%2Fdocs%2F60_Pytorch%2F00_versions.ipynb&branch=main#/~(partition~'alpha)) to spawn a JupyterLab instance on the TUD ZIH Jupyter Hub.
    - You'll be requested to login using your TUD Account


Afterwards, once the notebook has opened:
- If asked to select a Kernel: Confirm suggestion (Python 3) with "Select".
- execute the first cell, with SHIFT+ENTER
- this will link the conda environment we prepared for you to your user folder. Follow any instructions in the notebook.

The data required to execute the notebooks is located at `/projects/p_scads_trainings/BIAS/dsb2018` and has to be integrated into your clone of this repository (which should reside in your home directory after clicking the above link to launch jupyter Hub). 

1. Create a directory named `data` in the top level of this repo (i.e. on the same level the `*.ipynb*` notebook files and this README are located). 
2. Copy the data to the freshly created directory using `cp -r /projects/p_scads_trainings/BIAS/dsb2018 $PWD/data`

As a backup solution, the data can be downloaded as a zip file from [the stardist github repository]('https://github.com/stardist/stardist/releases/download/0.1.0/dsb2018.zip').

## Questions, concerns or feedback?

Please file an issue through the issue tab.
