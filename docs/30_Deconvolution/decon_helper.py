# Assuming you've installed the required libraries: lib1 and lib2
try:
    import tnia.plotting.projections as tnia_proj

    is_tnia_available = True
    print('no error')
except ImportError:
    print('error')
    is_tnia_available = False

try:
    import stackview
    is_stackview_available = True
except ImportError:
    is_stackview_available = False

use_stackview = True
use_tnia = False

def test_helper():
    print("Hello from decon_helper.py")
    print("tnia available: ", is_tnia_available)
    print("stackview available: ", is_stackview_available)
    return True

def show_xyz_slice(img, imp='stackview'):
    z = img.shape[0] // 2
    y = img.shape[1] // 2
    x = img.shape[2] // 2

    if is_tnia_available and imp == 'tnia':
        tnia_proj.show_xyz_slice(img, x, y, z)
    elif is_stackview_available and imp == 'stackview':
        return stackview.orthogonal(img, continuous_update=True)
    else:
        return stackview.orthogonal(img, continuous_update=True)