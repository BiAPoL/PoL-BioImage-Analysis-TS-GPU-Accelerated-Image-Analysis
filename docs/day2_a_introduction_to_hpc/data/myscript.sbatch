#!/bin/bash

#SBATCH --job-name=example  
#SBATCH --nodes=1             # Number of nodes
#SBATCH --ntasks=1            # Run on a single CPU
#SBATCH --gres=gpu:1          # 1 GPU per node
#SBATCH --time=0-00:05:00     # d-hh:mm:ss
#SBATCH --partition=alpha
#SBATCH --mem=2GB             # Memory per node
#SBATCH --output=%j.out       # Standard output and error log

module load modenv/hiera GCC/10.2.0 CUDA/11.1.1 OpenMPI/4.0.5 PyTorch/1.10.0 tqdm/4.56.2

myworkspace="$(ws_find myworkspace)"

python "$myworkspace"/src/myscript.py
