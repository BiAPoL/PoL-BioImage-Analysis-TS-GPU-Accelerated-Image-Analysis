Search.setIndex({"docnames": ["30_Deconvolution/0_intro_to_decon", "30_Deconvolution/1_test_libs", "30_Deconvolution/2_cupy_forward", "30_Deconvolution/3_Nuclei_Deconvolution_Compare_to_Truth", "30_Deconvolution/4_Nuclei_Deconvolution_Segmentation", "30_Deconvolution/5_edges", "30_Deconvolution/6_decon_bead_edge_handling", "30_Deconvolution/7_decon_regularization", "30_Deconvolution/8_extract_psf", "30_Deconvolution/9_Dask_Deconvolution", "intro"], "filenames": ["30_Deconvolution/0_intro_to_decon.md", "30_Deconvolution/1_test_libs.ipynb", "30_Deconvolution/2_cupy_forward.ipynb", "30_Deconvolution/3_Nuclei_Deconvolution_Compare_to_Truth.ipynb", "30_Deconvolution/4_Nuclei_Deconvolution_Segmentation.ipynb", "30_Deconvolution/5_edges.ipynb", "30_Deconvolution/6_decon_bead_edge_handling.ipynb", "30_Deconvolution/7_decon_regularization.ipynb", "30_Deconvolution/8_extract_psf.ipynb", "30_Deconvolution/9_Dask_Deconvolution.ipynb", "intro.md"], "titles": ["Intro to Deconvolution and Restoration", "Setup environment", "Implementing the forward model (Convolution) with cupy", "Nuclei Deconvolution and Compare intensities to ground truth", "Nuclei Deconvolution and Segmentation", "Edge handling", "Edge handling experiments", "Deconvolve microtubules phantom", "A Notebook showing \u2018reverse Deconvolution\u2019 a.k.a. PSF Distilling", "Dask deconvolution", "PoL Bio-Image Analysis Training School on GPU-Accelerated Image Analysis"], "terms": {"A": [0, 5], "procedur": 0, "us": [0, 1, 3, 5, 7, 9], "revers": [0, 6], "convolut": [0, 5, 6, 8, 9], "blur": [0, 4, 8], "also": [0, 1, 3, 4, 5, 6, 8], "need": [0, 1, 2, 3, 4, 5, 8, 9], "consid": 0, "nois": [0, 4, 5], "type": [0, 5, 10], "which": [0, 4, 5, 8, 10], "attempt": [0, 2], "true": [0, 1, 2, 3, 4, 5, 6, 8], "signal": [0, 2, 5, 8], "presenc": 0, "The": [0, 2, 3, 4, 5, 6, 7, 8], "problem": [0, 2, 4, 5], "ill": 0, "pois": 0, "inform": [0, 8], "lost": 0, "thu": [0, 2, 4, 5], "cannot": 0, "origin": [0, 2, 4, 6], "complet": [0, 2], "describ": [0, 8], "respons": 0, "system": [0, 1, 3, 4, 5, 8], "like": [0, 4, 6, 9, 10], "object": [0, 4, 5, 8], "basic": 0, "unit": 0, "format": [0, 2], "len": [0, 6, 7], "doe": [0, 1, 3, 4, 6, 8, 9], "focu": 0, "light": 0, "rather": 0, "difract": 0, "pattern": 0, "later": 0, "plane": 0, "3d": [0, 4, 6], "widefield": [0, 4], "instrument": 0, "ar": [0, 1, 2, 3, 4, 5, 8, 9, 10], "hour": 0, "glass": 0, "when": [0, 2, 4, 5, 6, 8], "view": [0, 4, 5], "z": [0, 2, 4, 6, 8], "confoc": 0, "footbal": 0, "shape": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "truth": [0, 1, 7, 9], "convolv": [0, 2], "have": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10], "mean": [0, 3, 4, 8], "run": [0, 2], "forward": 0, "model": [0, 8], "import": [0, 2, 5, 6, 7, 9], "creat": [0, 1, 9, 10], "simul": [0, 1, 3, 4], "test": [0, 5], "train": [0, 1, 3, 4], "deep": [0, 1, 3, 4], "learn": [0, 1, 2, 3, 4], "high": [0, 2], "frequenc": [0, 2], "microscop": 0, "otf": [0, 2, 5], "band": 0, "limit": [0, 8], "so": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10], "some": [0, 1, 2, 3, 4], "pose": 0, "ha": [0, 4, 5, 6, 8, 10], "can": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10], "amplifi": 0, "solv": [0, 5, 8], "domain": 0, "invers": [0, 2], "filter": [0, 4], "minim": [0, 5], "wiener": 0, "below": [0, 1, 2, 3, 4, 5, 6, 8], "show": [0, 1, 5, 7], "left": [0, 5, 6], "right": [0, 5, 6], "sphere": [0, 2], "result": [0, 2, 8, 9], "10": [0, 1, 3, 4, 5, 7, 8, 9], "20": [0, 3, 4, 5, 8, 9], "30": [0, 3, 4, 9], "acceler": [0, 1, 3, 4], "onc": 0, "approch": 0, "algorithm": [0, 1, 2, 3, 4, 5, 8], "dei": 0, "etc": 0, "al": 0, "2006": 0, "wa": [0, 1, 4, 10], "deconvolv": [0, 1, 6], "50": [0, 2, 3, 4, 6, 8, 9], "factor": [0, 6, 9], "0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "002": 0, "non": [0, 3, 4, 8, 9], "circul": [0, 3, 4, 8, 9], "big": 0, "lab": [0, 10], "technic": [0, 5], "note": [0, 1, 3, 4, 5, 6, 8], "2014": [0, 5], "m": [0, 5], "bertero": 0, "p": 0, "boccaci": 0, "2005": 0, "take": [0, 2, 5, 8], "bigger": 0, "step": [0, 2, 4, 8], "each": [0, 1, 2, 4, 8, 9], "vector": 0, "bigg": 0, "hardwar": 0, "math": 0, "librari": [0, 3, 4], "multi": 0, "thread": [0, 10], "gpu": [0, 1, 3, 4, 6, 9], "In": [1, 2, 3, 4, 5, 6, 7, 8, 9], "thi": [1, 2, 3, 4, 5, 6, 7, 8, 9], "we": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "set": 1, "up": [1, 4, 6, 9], "depend": [1, 5], "instal": [1, 3, 4, 8], "properli": [1, 5], "hollow": 1, "bar": [1, 2, 9], "found": [1, 4, 5, 6, 8], "exampl": [1, 2, 3, 4, 5, 6, 7, 9], "develop": [1, 8], "biomed": 1, "group": 1, "epfl": [1, 7], "here": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "an": [1, 2, 3, 4, 8, 9, 10], "extens": 1, "development": 1, "biologi": 1, "requir": [1, 8], "coupl": [1, 8], "experiment": [1, 5], "could": [1, 8, 9], "just": [1, 3, 4, 8, 9], "add": 1, "devbio": [1, 3, 4, 8, 10], "s": [1, 2, 3, 4, 5, 10], "good": 1, "practic": [1, 5], "new": [1, 3, 4], "first": [1, 3, 4, 5, 6], "mamba": [1, 3, 4], "base": [1, 3, 4, 5, 8, 9, 10], "name": [1, 3, 4, 8], "env": [1, 3, 4, 8, 10], "python": [1, 3, 4, 8], "3": [1, 2, 3, 4, 5, 8], "9": [1, 2, 3, 4, 8], "c": [1, 3, 4, 8], "conda": [1, 5, 10], "forg": [1, 3, 4, 8], "pytorch": [1, 3, 4, 10], "now": [1, 3, 4, 5], "cuda": [1, 2, 3, 4], "cupi": [1, 3, 4, 10], "todo1": [1, 3, 4], "istal": [1, 3, 4], "part": [1, 3, 4, 5, 8, 10], "morn": [1, 3, 4], "session": [1, 3, 4], "todo2": [1, 3, 4], "clarifi": [1, 3, 4], "whether": [1, 2, 3, 4], "work": [1, 3, 4, 5, 10], "mac": [1, 3, 4, 8], "provid": [1, 3, 4], "altern": [1, 3, 4, 10], "you": [1, 3, 4, 9, 10], "probabl": [1, 3, 4], "version": [1, 3, 4, 5, 6, 8], "differ": [1, 2, 3, 4, 5, 6, 8], "than": [1, 2, 3, 4, 8, 9], "11": [1, 3, 4], "make": [1, 2, 5], "sure": [1, 2, 3, 4], "cudatookkit": [1, 3, 4], "compat": [1, 3, 4], "cudatoolkit": [1, 3, 4], "2": [1, 2, 3, 4, 5, 6, 8, 9], "cudnn": [1, 3, 4], "8": [1, 3, 4, 5, 6], "1": [1, 2, 3, 4, 5, 6, 8, 9], "pip": [1, 3, 4, 8], "cuda11x": [1, 3, 4], "let": [1, 3, 4, 5], "tnia": [1, 2, 3, 4, 6, 7, 8], "project": [1, 2, 3, 4, 6, 7, 8, 10], "helper": [1, 3, 4, 5], "function": [1, 3, 4, 8], "clij2": [1, 3, 4, 8], "fft": [1, 3, 4, 5, 8, 9], "stardist": [1, 3], "measur": [1, 3, 4, 8], "segment": [1, 3, 8, 10], "qualiti": [1, 3, 4], "compar": [1, 4, 8], "classic": [1, 3, 4], "psfmodel": [1, 3, 4], "diffract": [1, 3, 4], "psf": [1, 9], "git": [1, 3, 4, 8], "http": [1, 3, 4, 5, 7, 8], "github": [1, 3, 4, 5, 8, 10], "com": [1, 3, 4, 5, 8], "north": [1, 3, 4, 8], "intellig": [1, 3, 4, 8], "index": [1, 3, 4, 6, 7, 8], "url": [1, 3, 4, 8], "pypi": [1, 3, 4, 8], "org": [1, 3, 4, 8], "simpl": [1, 3, 4, 5, 8], "dep": [1, 3, 4, 8], "And": [1, 3, 4, 5, 6, 9], "how": [1, 2, 3, 4, 8, 9], "raster": [1, 3, 4], "geometri": [1, 3, 4], "user": [1, 3, 4, 8], "mai": [1, 2, 3, 4, 5, 8], "ocl_icd_wrapper_appl": [1, 3, 4, 8], "linux": [1, 3, 4, 8], "ocl": [1, 3, 4, 8], "icd": [1, 3, 4, 8], "abov": [1, 3, 4, 5, 8], "been": [1, 4, 5, 6, 8, 10], "try": [1, 2, 3, 4, 9], "imnotther": 1, "int": [1, 3, 4, 8, 9], "imnothtere_found": 1, "print": [1, 2, 3, 4, 5, 6, 8, 9], "except": [1, 2, 3, 4, 9], "importerror": [1, 3, 4, 9], "imnotthere_found": 1, "fals": [1, 2, 3, 4, 6, 9], "NOT": 1, "from": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "clij2fft": [1, 3, 4, 6, 7, 8, 9], "richardson_luci": [1, 3, 4, 6, 7, 8, 9], "richardson_lucy_nc": [1, 3, 4, 6, 7, 8, 9], "clij2_rl_found": 1, "redlionfishdeconv": [1, 3, 4, 6, 9], "rl": [1, 3, 4, 5, 6, 9], "redlionfish_rl_found": 1, "rlf": [1, 6], "cp": [1, 2], "cupy_found": 1, "numpi": [1, 2, 3, 4, 5, 6, 8, 9], "np": [1, 2, 3, 4, 5, 6, 8, 9], "avail": [1, 2, 8], "stackview": [1, 2, 9], "folder": [1, 3, 4, 10], "www": [1, 3, 4], "dropbox": [1, 3, 4], "scl": [1, 3, 4], "fo": [1, 3, 4], "ngs73x29t1ch8208d75lv": [1, 3, 4], "h": [1, 3, 4, 5, 6], "rlkei": [1, 3, 4], "7acq2epqp1f1x039q833ry6p4": [1, 3, 4], "dl": [1, 3, 4], "besid": [1, 3, 4], "pol": [1, 3, 4], "bioimag": [1, 3, 4, 10], "analysi": [1, 3, 4], "ts": [1, 3, 4], "place": [1, 3, 4], "insid": [1, 3, 4], "code": [1, 3, 4, 5, 9, 10], "snippet": [1, 3, 4], "chang": [1, 3, 4, 5, 8], "im_path": [1, 2, 3, 4, 5, 6, 7, 8, 9], "local": [1, 2, 3, 4, 8], "locat": [1, 3, 4], "your": [1, 3, 4, 8, 10], "machin": [1, 3, 4, 8], "where": [1, 3, 4, 5, 6, 9], "put": [1, 3, 4, 10], "imread": [1, 2, 3, 4, 5, 6, 7, 8, 9], "verifi": [1, 3, 4], "size": [1, 3, 4, 5, 8, 9], "128": [1, 2, 6, 7, 9], "256": [1, 2, 6, 9], "skimag": [1, 2, 3, 4, 5, 6, 7, 8, 9], "io": [1, 2, 3, 4, 5, 6, 7, 8, 9], "os": [1, 2, 3, 4, 6, 7, 8, 9], "r": [1, 2, 3, 4, 5, 6, 7, 8, 9], "im_nam": [1, 2, 3, 4, 7, 9], "g10": [1, 2, 9], "p30": [1, 2, 9], "stack": [1, 2, 4, 6, 8, 9], "tif": [1, 2, 3, 4, 5, 6, 7, 8, 9], "psf_name": [1, 2, 3, 7, 9], "truth_nam": [1, 3, 4, 5, 7, 9], "im": [1, 3, 4, 5, 7, 8, 9], "path": [1, 2, 3, 4, 6, 7, 8, 9], "join": [1, 2, 3, 4, 6, 7, 8, 9], "astyp": [1, 2, 3, 4, 5, 6, 8, 9], "float32": [1, 2, 3, 4, 5, 6, 8, 9], "sum": [1, 2, 5, 6, 8, 9], "xy": [1, 4, 8, 9], "xz": 1, "zy": 1, "max": [1, 2, 5, 6, 8], "decon_help": [1, 2], "test_help": 1, "show_xyz_slic": 1, "help": [1, 4, 8], "orthogon": [1, 9], "continuous_upd": 1, "tru": 1, "hello": 1, "py": [1, 5], "imnport": 1, "redlionfish": [1, 3, 4, 9], "implement": [1, 8], "richardson": [1, 2, 3, 4, 6, 7, 8, 9], "luci": [1, 2, 3, 4, 6, 7, 8, 9], "If": [1, 5, 8, 10], "thei": [1, 3, 4], "perform": [1, 4, 8, 9], "decon_clij2": 1, "100": [1, 2, 3, 4, 9], "els": [1, 2, 5], "zeros_lik": [1, 4, 5, 8], "decon_rlf": 1, "dorldeconvolutionfromnparrai": [1, 3, 4, 6, 9], "niter": [1, 3, 4, 6, 9], "method": [1, 3, 4, 6, 7, 8, 9], "resasuint8": [1, 3, 4, 6, 9], "switch": 1, "rotat": 1, "explor": 1, "dataset": [1, 8], "reconstruct": [1, 5, 8], "Is": 1, "truer": 1, "represent": 1, "excercis": 1, "1000": [1, 4, 5, 6], "iter": [1, 4, 5, 6, 7, 9], "000": 1, "fast": 1, "even": [1, 5, 6, 8, 9], "bit": [1, 6, 9], "time": [1, 2, 6], "continu": 1, "improv": [1, 4], "more": [1, 4, 8, 9], "viewer": [1, 3, 4, 5, 8], "add_imag": [1, 3, 4, 5, 8], "layer": [1, 3, 4, 5], "0x7f438f22bfa0": 1, "notebook": [2, 3, 4, 10], "see": [2, 5, 6, 9, 10], "theorem": 2, "state": 2, "two": 2, "pointwis": 2, "multipl": [2, 4, 6, 8, 9], "transform": [2, 4], "becaus": [2, 4, 8], "larg": [2, 8], "kernel": 2, "much": [2, 8], "faster": [2, 9], "mulitpli": 2, "them": [2, 4], "spatial": [2, 8], "mani": [2, 9], "deconvolut": [2, 5, 7, 10], "includ": [2, 5, 6, 8], "consist": [2, 6], "seri": 2, "both": [2, 4], "purpos": [2, 7], "out": [2, 3, 4, 9], "think": [2, 6], "through": [2, 4], "deal": [2, 3, 4], "gener": [2, 3, 4, 5, 6, 9], "block": [2, 5], "our": [2, 6, 8], "To": [2, 5], "shift": 2, "product": 2, "addit": [2, 5, 8], "temporari": 2, "buffer": [2, 9], "apr": [2, 6], "copi": [2, 5], "comput": [2, 6, 9], "adjust": 2, "reduc": 2, "increas": [2, 4], "With": [2, 9], "less": [2, 8, 9], "total": 2, "greater": 2, "For": [2, 6, 10], "larger": [2, 4, 5, 6], "manage_memori": 2, "plot": [2, 3, 4, 5, 6, 7, 8], "show_xy_zy_max": [2, 6, 8], "unpad": 2, "mempool": 2, "get_default_memory_pool": 2, "total_gpu_memori": 2, "bpg": 2, "1024": 2, "available_gpu_memori": 2, "devic": 2, "mem_info": 2, "At": 2, "begin": 2, "used_byt": 2, "xdim": 2, "ydim": 2, "zdim": 2, "bytes_per_pixel": 2, "4": [2, 5, 6, 8], "array_s": 2, "gb": 2, "7": [2, 4, 5, 6, 7, 8], "7540283203125": 2, "5972900390625": 2, "5": [2, 3, 4, 5, 6, 8], "dtype": [2, 5, 9], "fig": [2, 3, 4, 5, 6, 7, 8], "vmax": [2, 6, 8], "raster_geometri": 2, "rg": 2, "phantom": [2, 3], "add_small_to_larg": 2, "zero": [2, 5, 8], "x": [2, 5], "y": [2, 5], "250": [2, 3, 8], "200": [2, 3, 4, 5, 8], "400": [2, 3], "150": [2, 3, 4], "order": [2, 4], "do": [2, 5, 9], "wise": 2, "befor": [2, 3, 4, 5], "_": [2, 4, 5, 6], "constant": [2, 5], "after": [2, 4, 5, 8], "involv": 2, "move": 2, "center": [2, 6, 8], "pixel": [2, 8], "multipli": [2, 6], "cell": 2, "longer": 2, "without": [2, 4, 9], "phantom_cp": 2, "psf_cp": 2, "psf_cp_shift": 2, "ifftshift": [2, 5], "psf_shift": 2, "otf_cp": 2, "rfftn": [2, 5], "phantom_cp_fft": 2, "phantom_fft": 2, "temp": [2, 4], "convolved_cp": 2, "irfftn": [2, 5], "asnumpi": 2, "del": 2, "free_all_block": 2, "501953125": 2, "0029296875": 2, "50390625": 2, "5048828125": 2, "free": [2, 5], "should": [2, 3, 4, 5, 8], "ani": [2, 4, 8, 10], "sinc": [2, 5, 8], "all": [2, 4, 5, 8, 10], "scope": 2, "care": [2, 3, 4], "rememb": [2, 5, 9], "had": [2, 4, 5], "flag": 2, "indic": 2, "want": [2, 4, 5, 9, 10], "dure": 2, "process": [2, 9, 10], "exist": 2, "fail": 2, "wai": 2, "know": [2, 8], "far": [2, 8], "along": 2, "got": 2, "variabl": 2, "still": [2, 6, 8, 9], "e": 2, "0048828125": 2, "001953125": 2, "final": [2, 4, 5], "clear": 2, "real": [2, 5, 9], "program": 2, "would": [2, 6, 9, 10], "someth": [2, 3, 4, 5], "tempori": 2, "memorori": 2, "explicitli": 2, "plan": 2, "avoid": 2, "leak": 2, "config": 2, "get_plan_cach": 2, "similar": [3, 5], "ones": [3, 5, 6], "abrf": [3, 4], "studi": [3, 4], "question": [3, 4, 8, 10], "restor": 3, "closer": [3, 6, 8], "same": [3, 4, 8], "get": [3, 4, 6, 7, 8, 9], "load": [3, 4, 9], "propertli": [3, 4], "resiz": 3, "oper": [3, 4, 6], "sim": 3, "na": [3, 4, 5, 6], "119": 3, "202": 3, "show_xyz_max": [3, 4, 7, 8], "regularization_factor": [3, 4, 6], "0002": 3, "def": [3, 4, 5, 9], "img": [3, 4, 5, 9], "return": [3, 4, 5, 9], "500": [3, 4, 5, 8], "2000": [3, 6, 7], "i": [3, 4, 5, 8], "lib": [3, 4, 6, 7, 8, 9], "warn": [3, 9], "start": [3, 4, 8, 9], "finishedget": 3, "40": [3, 4, 9], "60": [3, 4, 9], "70": [3, 4, 9], "80": [3, 4, 9], "90": [3, 4, 9], "110": [3, 4], "120": [3, 4], "130": [3, 4], "140": [3, 4], "160": [3, 4], "170": [3, 4], "180": [3, 4], "190": [3, 4], "210": 3, "220": 3, "230": 3, "240": 3, "260": 3, "270": 3, "280": 3, "290": 3, "300": [3, 8], "310": 3, "320": 3, "330": 3, "340": 3, "350": 3, "360": 3, "370": 3, "380": 3, "390": 3, "410": 3, "420": 3, "430": 3, "440": 3, "450": [3, 8], "460": 3, "470": 3, "480": 3, "490": 3, "finish": [3, 4, 9], "mse": 3, "b": 3, "squar": 3, "subtract": 3, "rmse": [3, 7], "sqrt": [3, 5], "zip": 3, "7267": 3, "49": [3, 6], "5507": 3, "9326": 3, "4435": 3, "0576": 3, "3700": 3, "5608": 3, "3073": 3, "1455": 3, "2474": 3, "483": 3, "matplotlib": [3, 5, 7], "pyplot": [3, 5, 7], "plt": [3, 5, 7], "ax": [3, 5], "subplot": [3, 5], "figsiz": [3, 5, 6, 7, 8], "18": 3, "14": 3, "line": [3, 9], "label": [3, 4, 8], "str": 3, "legend": 3, "0x7f1c793758e0": 3, "0x7f1c0bfc2e50": 3, "lmrg": 4, "detail": 4, "about": [4, 5, 8, 10], "instead": [4, 8], "file": 4, "site": 4, "googl": 4, "realli": 4, "downstream": 4, "accur": [4, 8], "ground": [4, 7], "organ": 4, "match": 4, "util": [4, 8], "against": 4, "discov": 4, "tricki": 4, "optim": 4, "segmentaton": 4, "approach": [4, 6, 8], "someon": 4, "come": 4, "sophist": [4, 8], "strategi": [4, 10], "compens": 4, "other": [4, 8], "invit": 4, "peopl": [4, 10], "own": 4, "nuclei4_out_c90_dr10_imag": 4, "out_c90_dr10_label": 4, "258": 4, "161": 4, "isotrop": 4, "voxel": 4, "don": [4, 8, 9], "t": [4, 5, 8, 9], "interpol": 4, "vale": 4, "preserve_rang": 4, "anti_alias": 4, "int32": 4, "fluoresc": 4, "remov": 4, "contrast": [4, 8], "lead": [4, 5], "better": [4, 6, 8], "quantif": 4, "One": [4, 8], "hiccup": 4, "did": [4, 8], "well": 4, "meta": [4, 6], "20x": 4, "75na": 4, "dimens": [4, 8], "124x0": 4, "um": 4, "emiss": 4, "peak": 4, "wavelength": [4, 5], "nm": 4, "follow": [4, 6, 8, 10], "error": [4, 7], "read": 4, "meant": 4, "effect": [4, 7, 8], "space": [4, 5, 6], "were": [4, 5, 9], "372": [4, 7], "2800": 4, "gibson_lanni_3d": [4, 6], "x_voxel_s": 4, "z_voxel_s": 4, "xy_psf_dim": [4, 6], "206": 4, "z_psf_dim": 4, "33": 4, "75": 4, "ni": [4, 6], "ns": [4, 6], "0005": 4, "im_decon": 4, "watersh": 4, "level": [4, 8], "otsu": [4, 8], "threshold": 4, "detect": 4, "separ": 4, "bright": [4, 8], "dark": 4, "background": [4, 6], "fill": 4, "remain": 4, "hole": 4, "call": [4, 5, 8, 9], "pass": [4, 5], "spot": 4, "sigma": 4, "distanc": 4, "calcul": [4, 6, 9], "map": [4, 5], "ussual": 4, "As": 4, "loop": 4, "binari": 4, "clean": 4, "eros": 4, "close": [4, 6], "morpholog": [4, 8], "fill_hol": 4, "fill_holes_3d_slic": 4, "fill_holes_slic": 4, "threshold_otsu": [4, 8], "separate_touching2": 4, "separate_touch": 4, "binary_clos": 4, "binary_open": 4, "binary_eros": 4, "ball": 4, "regionprop": [4, 8], "sx": 4, "1238": 4, "sy": 4, "sz": [4, 6], "tend": 4, "entir": [4, 9], "1st": 4, "applic": [4, 6], "region": [4, 8], "second": [4, 5], "custom": 4, "seper": 4, "15": 4, "back": [4, 8], "object_list": 4, "labels2": 4, "surfac": 4, "gap": 4, "obj": 4, "z1": 4, "y1": 4, "x1": 4, "z2": 4, "y2": 4, "x2": 4, "bbox": 4, "pad": 4, "criterion": 4, "iou": 4, "thresh": 4, "fp": 4, "tp": 4, "fn": 4, "precis": 4, "recal": 4, "accuraci": 4, "f1": 4, "n_true": 4, "n_pred": 4, "mean_true_scor": 4, "9111653327941894": 4, "mean_matched_scor": 4, "panoptic_qu": 4, "relabel": 4, "add_label": 4, "0x7fb6d0b92dc0": 4, "veri": 5, "aspect": 5, "sever": 5, "artifact": [5, 6, 8, 9], "occur": 5, "fact": [5, 8], "possibl": [5, 9, 10], "slightli": 5, "beyond": 5, "acquir": [5, 6, 8], "field": [5, 8], "though": [5, 6], "keep": [5, 9], "mind": [5, 9], "assum": [5, 10], "condit": 5, "harder": 5, "outsid": 5, "boundari": [5, 6, 9], "design": 5, "environ": 5, "scipi": 5, "shouldn": 5, "complic": [5, 9], "great": 5, "convers": 5, "andrew": 5, "york": 5, "recent": 5, "frame": 5, "tool": [5, 8], "equat": [5, 6], "2013": 5, "grand": 5, "challeng": 5, "justificaton": 5, "modif": 5, "small": [5, 8, 9], "amount": 5, "structur": [5, 8], "window": [5, 6], "case": [5, 8, 9], "o_k": 5, "estim": [5, 8], "k": [5, 6], "observ": 5, "point": [5, 8], "spread": [5, 8], "n": [5, 6], "unknown": 5, "o": [5, 6, 8], "frac": [5, 6], "o_": [5, 6], "onli": [5, 8], "w": [5, 6], "solut": [5, 6], "wi": [5, 6], "perfectli": 5, "term": 5, "within": 5, "perfect": 5, "nonger": 5, "updat": 5, "everywher": 5, "give": 5, "express": 5, "1s": 5, "proper": [5, 6], "doesn": 5, "rel": [5, 9], "independ": 5, "modul": 5, "next": 5, "few": [5, 9], "poisson": 5, "paraxi": 5, "2d": 5, "cpu": 5, "inspir": 5, "matlab": 5, "jame": 5, "maton": 5, "modifi": 5, "guess": 5, "fftshift": 5, "ifftn": 5, "fftn": 5, "random": 5, "richardson_lucy_np": 5, "num_it": 5, "none": 5, "first_guess": [5, 8], "float64": 5, "delta": 5, "00001": 5, "otf_": 5, "conjug": [5, 6], "01": 5, "rang": 5, "reblur": 5, "ratio": [5, 6, 8], "1e": 5, "divid": [5, 8, 9], "jdmanton": 5, "rl_positivity_sim": 5, "manton": 5, "field_imag": 5, "paraxial_otf": 5, "numerical_apertur": 5, "pixel_s": 5, "nx": 5, "ny": 5, "resolut": [5, 8], "image_centre_x": 5, "image_centre_i": 5, "linspac": 5, "meshgrid": 5, "filter_radiu": 5, "v": 5, "pi": 5, "arcco": 5, "paraxial_psf": 5, "imshow2d": 5, "width": 5, "height": 5, "6": [5, 6], "paddeds": 5, "mode": 5, "arg": 5, "one": 5, "nd": [5, 6, 7, 8], "arrai": [5, 9], "tupl": 5, "lambda": 5, "j": 5, "ceil": 5, "floor": 5, "star": 5, "feel": 5, "experi": [5, 10], "truth_typ": 5, "d": [5, 6], "i2k2022": 5, "suptitl": [5, 6, 8], "text": [5, 6, 8], "98": [5, 6, 8], "101": [5, 6], "min": [5, 8], "0060154707": 5, "tmp": 5, "ipykernel_14570": 5, "2834657628": 5, "44": 5, "complexwarn": 5, "cast": 5, "complex": 5, "valu": [5, 8], "discard": 5, "imaginari": 5, "appli": [5, 6, 8], "clearli": 5, "emitt": 5, "ws": 5, "window_index": 5, "s_": [5, 8], "4177033410": 5, "flat": 5, "ones_lik": [5, 8], "float": 5, "1798348474": 5, "decon": [5, 6, 9], "0x7f4b99c9eb50": 5, "look": [6, 8], "deriv": 6, "extend": 6, "being": [6, 8], "equival": 6, "Then": [6, 8], "becom": 6, "normal": [6, 8], "htone": 6, "measuredimag": 6, "realiti": 6, "matrix": 6, "crop": [6, 8, 9], "speed": 6, "axi": [6, 7], "posit": 6, "depth": [6, 9], "coverslip": 6, "demonstr": 6, "show_xy_zy_slic": 6, "5um": 6, "z_to_view": 6, "xy_spac": 6, "0645": 6, "z_space": 6, "16": [6, 9], "data": [6, 7, 8], "refract": 6, "medium": 6, "embed": 6, "It": [6, 8, 10], "exactli": 6, "immers": 6, "media": 6, "previou": [6, 9], "dtermin": 6, "ri": 6, "ndutil": [6, 7, 8], "centercrop": [6, 7, 8], "recenter_psf_axi": 6, "imsav": 6, "518": 6, "530": 6, "255": 6, "z_compute_psf_dim": 6, "z_crop_psf_dim": 6, "decon_rl": 6, "im_decon_clij_nc": 6, "im_decon_clij": 6, "red": 6, "lionfish": 6, "half_bead": 6, "psf_crop": [6, 8], "circulan": 6, "bigwww": 7, "ch": 7, "regular": 7, "imag": [7, 9], "input": [7, 8], "decon_tv_0": 7, "decon_tv_0001": 7, "0001": [7, 9], "decon_tv_001": 7, "001": 7, "metric": 7, "panda": 7, "pd": 7, "df": 7, "datafram": 7, "column": 7, "loc": 7, "rf": 7, "style": [7, 10], "hide": 7, "000000": 7, "580": 7, "465576": 7, "387": 7, "438202": 7, "216431": 7, "392": 7, "135223": 7, "fundment": 8, "character": 8, "super": 8, "sourc": 8, "extract": 8, "singl": 8, "sometim": 8, "reliabl": 8, "interer": 8, "nearbi": 8, "further": 8, "vari": 8, "advantag": 8, "averag": 8, "done": 8, "fourier": 8, "mle": 8, "fit": [8, 9], "theoret": 8, "answer": 8, "imagesc": 8, "forum": 8, "sc": [8, 10], "astigmat": 8, "9768": 8, "pyme": 8, "psfextract": 8, "higher": 8, "expect": 8, "intens": 8, "outer": 8, "ring": 8, "62973": 8, "howev": 8, "sub": 8, "role": 8, "prior": 8, "knowledg": 8, "account": 8, "necessarilli": 8, "secondli": 8, "disadvantag": 8, "extent": 8, "captur": 8, "thirdli": 8, "stick": 8, "togeth": 8, "form": 8, "turn": 8, "deconvoltuion": 8, "obtain": 8, "jupyt": [8, 10], "noteook": 8, "opencl": 8, "fftw": 8, "napari": [8, 10], "sdeconv": 8, "xyz": 8, "figur": 8, "activ": [8, 10], "threshold_loc": 8, "agaros": 8, "courtesi": 8, "lorenz": 8, "cangiano": 8, "sp8_175nm_laurentbeads_montage_left": 8, "clair": 8, "mitchel": 8, "haase_bead_image1_crop": 8, "robert": 8, "haas": 8, "laurentbead": 8, "beads_nam": 8, "axial_stretch": 8, "elif": 8, "f": 8, "axial": 8, "stretch": 8, "obvious": 8, "my": 8, "2048": 8, "tweak": 8, "characterist": 8, "crude": 8, "25": 8, "aften": 8, "between": 8, "track": [8, 10], "script": 8, "7590055": 8, "4090": 8, "3013": 8, "4638512": 8, "cube": 8, "global": 8, "alright": 8, "job": 8, "properti": 8, "empti": 8, "draw": 8, "wrap": 8, "conveni": 8, "render": 8, "draw_centroid": 8, "clij": [8, 10], "im_32": 8, "centroids_32": 8, "enhanc": 8, "appar": 8, "dim": 8, "reflect": [8, 9], "gamma": 8, "low": 8, "awai": 8, "contain": [8, 10], "via": 8, "neg": 8, "truncat": 8, "somewhat": 8, "arbitrari": 8, "produc": 8, "awar": 8, "especi": 8, "caus": 8, "psf_": 8, "65": 8, "smaller": [8, 9], "correpsond": 8, "actual": 8, "titl": 8, "end": [8, 9], "goal": 8, "self": 8, "predict": 8, "roi": 8, "950": 8, "1150": 8, "test_deconvolv": 8, "scale": 8, "uint16": 8, "deconvolved2": 8, "access": 8, "psf_from_bead": 8, "im_preprocess": 8, "modern": 9, "gigabyt": 9, "often": 9, "memori": 9, "enough": 9, "da": 9, "half": 9, "psfhalfsiz": 9, "life": [9, 10], "pre": 9, "largest": 9, "given": 9, "constraint": 9, "num_x_chunk": 9, "num_y_chunk": 9, "num_z_chunk": 9, "z_chunk_siz": 9, "y_chunk_siz": 9, "x_chunk_siz": 9, "deconv_chunk": 9, "reg": 9, "prevent": 9, "edg": 9, "24": 9, "dimg": 9, "from_arrai": 9, "map_overlap": 9, "decon_overlap_24": 9, "num_work": 9, "31": 9, "176": 9, "finishedfinish": 9, "littl": 9, "seem": 9, "book": 10, "resourc": 10, "scientist": 10, "who": 10, "dive": 10, "specif": 10, "aim": 10, "student": 10, "microscopi": 10, "scienc": 10, "cover": 10, "symposium": 10, "clesperanto": 10, "dask": 10, "ai": 10, "denois": 10, "cours": 10, "recommend": 10, "download": 10, "repositori": 10, "made": 10, "execut": 10, "attende": 10, "reproduc": 10, "demo": 10, "exercis": 10, "desktop": 10, "open": 10, "termin": 10, "cd": 10, "pasteur": 10, "neubia": 10, "navig": 10, "lesson": 10, "doc": 10, "pleas": 10, "anonym": 10, "etherpad": 10, "email": 10, "issu": 10, "link": 10, "ask": 10, "tag": 10, "haesleinhuepf": 10, "held": 10, "dresden": 10, "august": 10, "2023": 10, "thank": 10, "share": 10, "teach": 10, "reus": 10, "deutsch": 10, "forschungsgemeinschaft": 10, "under": 10, "germani": 10, "excel": 10, "exc2068": 10, "cluster": 10, "physic": 10, "tu": 10, "grant": 10, "number": 10, "2021": 10, "237734": 10, "fiji": 10, "friend": 10, "distribut": 10, "eoss4": 10, "chan": 10, "zuckerberg": 10, "initi": 10, "daf": 10, "advis": 10, "fund": 10, "silicon": 10, "vallei": 10, "commun": 10, "foundat": 10}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"intro": 0, "deconvolut": [0, 1, 3, 4, 6, 8, 9], "restor": 0, "what": 0, "point": [0, 2], "spread": [0, 2], "function": [0, 2, 5], "psf": [0, 2, 3, 4, 5, 6, 7, 8], "imag": [0, 1, 2, 3, 4, 5, 6, 8, 10], "process": [0, 8], "approach": 0, "richardson": [0, 5], "luci": [0, 5], "iter": [0, 3], "total": 0, "variat": 0, "regular": 0, "noisi": 0, "edg": [0, 5, 6], "handl": [0, 5, 6], "how": [0, 10], "do": 0, "we": 0, "make": [0, 3, 4, 7], "fast": 0, "setup": 1, "environ": [1, 3, 4, 8], "test": [1, 3, 4, 6, 8], "import": [1, 3, 4, 8], "get": 1, "open": [1, 3, 4], "view": [1, 8], "3d": [1, 8], "data": [1, 4], "notebook": [1, 8], "librari": 1, "napari": [1, 3, 4, 5], "ask": 1, "question": 1, "implement": 2, "forward": [2, 5], "model": [2, 5], "convolut": 2, "cupi": 2, "inspect": [2, 5, 8], "memori": 2, "defin": [2, 5, 8, 9], "arrai": 2, "size": 2, "manag": 2, "strategi": 2, "load": [2, 6, 8], "creat": [2, 3, 4, 5, 6, 8], "simul": 2, "pad": [2, 5], "same": [2, 6], "perform": [2, 6], "fourier": 2, "domain": 2, "gpu": [2, 10], "check": 2, "us": [2, 4, 6, 8, 10], "delet": 2, "fft": 2, "cach": 2, "nuclei": [3, 4], "compar": 3, "intens": 3, "ground": [3, 5], "truth": [3, 4, 5], "decon": [3, 4, 7, 8], "conda": [3, 4, 8], "show": [3, 4, 8], "deconvolot": [3, 4], "deconvolv": [3, 4, 5, 7, 8, 9], "run": 3, "vari": 3, "number": [3, 9], "visual": [3, 4, 8], "segment": 4, "resiz": 4, "theoret": 4, "appli": 4, "deconolv": 4, "score": 4, "solut": 4, "stardist": 4, "matcher": 4, "math": 5, "background": [5, 8], "an": 5, "option": 5, "normal": 5, "factor": 5, "imshow": 5, "result": 5, "experi": 6, "set": [6, 8], "paramet": [6, 8], "redlionfish": 6, "clij": 6, "non": 6, "circul": 6, "half": 6, "bead": [6, 8], "microtubul": 7, "phantom": 7, "crop": 7, "bit": 7, "faster": 7, "A": 8, "revers": 8, "k": 8, "distil": 8, "flaw": 8, "approxim": 8, "depend": 8, "some": 8, "preprocess": 8, "cavaet": 8, "subtract": 8, "median": 8, "filter": 8, "threshold": 8, "find": 8, "centroid": 8, "aproxim": 8, "post": 8, "dask": 9, "chunk": 9, "overlap": 9, "between": 9, "pol": 10, "bio": 10, "analysi": 10, "train": 10, "school": 10, "acceler": 10, "thi": 10, "materi": 10, "feedback": 10, "support": 10, "acknowledg": 10}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})