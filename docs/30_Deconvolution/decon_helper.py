from pathlib import Path

# local path to the data folder
image_path = Path('../../data/deconvolution/')

# Path to the data folder on the cluster
# image_path = Path('/beegfs/ws/0/tkorten-cache/deconvolution/')

# Assuming you've installed the required libraries: lib1 and lib2
try:
    import tnia.plotting.projections as tnia_proj
    is_tnia_available = True
    print('tnia available')
except ImportError:
    print('error importing tnia')
    is_tnia_available = False

try:
    import stackview
    is_stackview_available = True
    print('stackview available')
except ImportError:
    is_stackview_available = False
    print('error importing stackview')

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

# code for jaccard index from https://github.com/haesleinhuepf/the-segmentation-game/blob/main/src/the_segmentation_game/metrics.py
def jaccard_index_binary(reference_label_image, test_label_image) -> float:
    """
    Determine how correct a given test segmentation is.
    As metric we use the Jaccard index.
    Assumtion: test and reference are binary images or
    label images with values 0=False, otherwise: True.
    """
    tp, tn, fp, fn = compute_tp_tn_fp_fn(reference_label_image, test_label_image)

    # return Jaccard Index
    return tp / (tp + fn + fp)


def compute_tp_tn_fp_fn(reference_label_image, test_label_image):
    """Compute overlap statistics:
    * tp = true positives
    * tn = true negatives
    * fp = false positives
    * fn = false negatives

    Parameters
    ----------
    reference_label_image: Image, e.g. a manual ground truth annotation
    test_label_image: Image, e.g. an algorithm result to determine the quality of

    Returns
    -------
    tp, tn, fp, fn
    """
    ### adapted from https://github.com/haesleinhuepf/napari-workflow-optimizer/blob/20c3baaf3009caf26909b57f08181108a731e67e/src/napari_workflow_optimizer/_optimizer.py#L248
    try:
        import pyclesperanto_prototype as cle
        binary_and = cle.binary_and

        reference_label_image = cle.push(reference_label_image)
        test_label_image = cle.push(test_label_image)
    except ImportError:
        binary_and = np.logical_and

        reference_label_image = np.asarray(reference_label_image)
        test_label_image = np.asarray(test_label_image)

    negative_reference = reference_label_image == 0
    positive_reference = reference_label_image != 0
    negative_test = test_label_image == 0
    positive_test = test_label_image != 0

    # true positive:
    tp = binary_and(positive_reference, positive_test).sum()

    # true negative:
    tn = binary_and(negative_reference, negative_test).sum()

    # false positive
    fp = binary_and(negative_reference, positive_test).sum()

    # false negative
    fn = binary_and(positive_reference, negative_test).sum()

    return tp, tn, fp, fn