import torch

torch_version = torch.__version__
print(f"PyTorch version: {torch_version}")

num_of_gpus = torch.cuda.device_count();
print(f"Total number of GPU devices available: {num_of_gpus}")
print("Following device(s) are available:")
for i in range(torch.cuda.device_count()):
   print(torch.cuda.get_device_properties(i).name)
