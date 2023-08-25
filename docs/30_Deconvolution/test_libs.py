from clij2fft.libs import getlib
from clij2fft.richardson_lucy import richardson_lucy
import numpy as np

img= np.ones((256, 256, 128), dtype=np.float32)
psf = np.ones((128, 128, 64), dtype=np.float32)

result = richardson_lucy(img, psf, 100, 0)

print()
print(result.shape, result.mean())