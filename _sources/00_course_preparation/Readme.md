# Course preparation
Before attending the course, please install mambaforge on your computer as explained in this [blog post](https://biapol.github.io/blog/johannes_mueller/anaconda_getting_started/). 

If you already have some conda or anaconda installation on your computer, ***please install mambaforge*** anyway as explained in the blog post linked above. 

Furthermore, please install [devbio-napari](https://github.com/haesleinhuepf/devbio-napari#installation) into a fresh conda environment, e.g. using this command:

```
mamba create --name devbio-napari-env python=3.9 devbio-napari pyqt -c conda-forge
```

When you are done, you can test your setup by executing these commands from the command line:
```
conda activate devbio-napari-env

naparia
```

After Napari opens, click the menu `File > Open Samples > clEsperanto > blobs (from ImageJ)`. In the Panel on the right click on the `Label` button. If Napari then looks like this, you are ready to go:

![img.png](img.png)


## Access to the ZIH HPC System

Please follow the instructions outlined here to set up your access to the ZIH HPC System in advance of the training. 

### VPN - for all users (Linux, Win, MacOS)
The ZIH HPC system can be accessed only via VPN (or within the campus data net).

Please, configure the VPN access as follows:
● [Linux users](https://tu-dresden.de/zih/dienste/service-katalog/arbeitsumgebung/zugang_datennetz/vpn/openvpn/linux)
● [Windows users](https://tu-dresden.de/zih/dienste/service-katalog/arbeitsumgebung/zugang_datennetz/vpn/openvpn/windows)
● [MacOS](https://tu-dresden.de/zih/dienste/service-katalog/arbeitsumgebung/zugang_datennetz/vpn/openvpn/macos)

Please use the credentials that have been provided to you, esp. the concrete login name.

### ssh connection (Linux, MacOS)
Linux and MacOS users: Please check whether you can access the ZIH HPC system. Make sure you have established a VPN connection!
1) Open a console and type the follwing (change XXX to the login name)
ssh XXX@taurus.hrsk.tu-dresden.de

### ssh connection (Windows)
Windows users need an ssh client for connecting to the ZIH HPC system.
0) we recommend using MobaXterm
1) download the home edition (free) of [MobaXterm here](https://mobaxterm.mobatek.net/download.html)
2) Install the client to your machine. A short demo on MobaXterm can be found [here](https://mobaxterm.mobatek.net/demo.html)
3) After starting MobXterm an ssh connection to the ZIH HPC system can be established using the credentials as for VPN (for connection
use remote host: taurus.hrsk.tu-dresden.de):

Hint: make sure to have the VPN connection established!

## Troubleshooting: DLL load failed

In case of error messages such as this one:
```
[...] _get_win_folder_with_pywin32
from win32com.shell import shellcon, shell
ImportError: DLL load failed while importing shell: The specified procedure could not be found.
```

Try this command, within the base environment:

```
conda activate base

pip install --upgrade pywin32==228
```

[Source](https://github.com/conda/conda/issues/11503)

## Troubleshooting: Graphics cards drivers

In case error messages contains "ImportError: DLL load failed while importing cl: The specified procedure could not be found" [see also](https://github.com/clEsperanto/pyclesperanto_prototype/issues/55) or ""clGetPlatformIDs failed: PLATFORM_NOT_FOUND_KHR", please install recent drivers for your graphics card and/or OpenCL device. Select the right driver source depending on your hardware from this list:

* [AMD drivers](https://www.amd.com/en/support)
* [NVidia drivers](https://www.nvidia.com/download/index.aspx)
* [Intel GPU drivers]()(https://www.intel.com/content/www/us/en/download/726609/intel-arc-graphics-windows-dch-driver.html)
* [Intel CPU OpenCL drivers](https://www.intel.com/content/www/us/en/developer/articles/tool/opencl-drivers.html#latest_CPU_runtime)
* [Microsoft Windows OpenCL support](https://www.microsoft.com/en-us/p/opencl-and-opengl-compatibility-pack/9nqpsl29bfff)

Sometimes, mac-users need to install this:

    mamba install -c conda-forge ocl_icd_wrapper_apple

Sometimes, linux users need to install this:

    mamba install -c conda-forge ocl-icd-system

In case installation didn't work in the first attempt, you may have to call this command line to reset the napari configuration:

```
napari --reset
```

## Online support

In case you run into any trouble while installing software, please create a thread on [https://image.sc](https://image.sc) and tag @haesleinhuepf
