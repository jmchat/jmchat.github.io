__winc_id__ = 'ae539110d03e49ea8738fd413ac44ba8'
__human_name__ = 'files'

import os, shutil, zipfile


# 1. mapjes aannmaken/verwijderen
folder = os.getcwd()
folder_cache = folder + '\\cache'

def clean_cache():
    x = os.listdir(os.getcwd())
    if 'cache' in x:
        shutil.rmtree(folder_cache) and os.mkdir(folder_cache) 
    else:
        os.mkdir(folder_cache)
    return

# 2. uitpakken maar
zip_file = folder + '\\data.zip'

def cache_zip(zip_file, folder_cache):
    with zipfile.ZipFile(zip_file, 'r') as zip_ref:
        zip_ref.extractall(folder_cache)
    return

# bestand lijst maken
def cached_files():
    files_no_dir = os.listdir(folder_cache)
    list_all_files = [os.path.join(folder_cache, file) for file in files_no_dir]
    return list_all_files

# wachtwoordje hacken
def find_password(file_paths):
    for x in file_paths:
        file = open(x, 'r')
        for line in file:
            if 'password' in line:
                password = line[line.find(" ") + 1 :-1]                  
                return password


