import matplotlib.pyplot as plt
import numpy as np

def get_target_matrix(layer_to_extract):
    
    to_extract = layer_to_extract.reshape(256*256,3)
    newmat = np.zeros((256*256,))+45

    for j,i in enumerate(to_extract):

        # Clases 3, 4 o 6
        if i[0] <= 96:

            # Clase 3
            if 150 <= i[2]:
                newmat[j] = 3
            
            # Clase 3 o 4
            if 150 >= i[2]:

                # Clase 4
                if 190 <= i[1]:
                    newmat[j] = 4

                # Clases 6:
                if i[1] <= 190:
                    newmat[j] = 6


        # Clases 1, 2, 5 o 0
        if 96 <= i[0]:
            
            # Clases 0:
            if i[2] > 130:
                newmat[j] = 0
            
            # Clases 1, 2 o 5:
            if i[2] <= 130:
                newmat[j] = 0          

                # Clases 5:
                if 64 < i[1] < 191:
                    newmat[j] = 5

                # Clases 2:
                if 191 <= i[1]:
                    newmat[j] = 2

                # Clase 1:
                if i[1] <= 64:
                    newmat[j] = 1
           
    return newmat.reshape((256,256))

def target_matrix_to_image_color(mask):
        
    to_extract = mask.reshape((256*256,1))
    newmat = []

    for j,i in enumerate(to_exatract):
        if i == 0:
            newmat.append([192, 192, 192])
        if i == 1:
            newmat.append([255, 1, 1])
        if i == 2:
            newmat.append([225, 255, 1])
        if i == 3:
            newmat.append([1, 255, 255])
        if i == 4:
            newmat.append([1, 255, 1])
        if i == 5:
            newmat.append([255, 127, 0])
        if i == 6:
            newmat.append([2, 128, 2])
    return np.array(newmat).reshape((256,256,3))

# Function create by soply on GithubGist
def show_images(images, cols = 1, titles = None):
    """Display a list of images in a single figure with matplotlib.
    
    Parameters
    ---------
    images: List of np.arrays compatible with plt.imshow.
    
    cols (Default = 1): Number of columns in figure (number of rows is 
                        set to np.ceil(n_images/float(cols))).
    
    titles: List of titles corresponding to each image. Must have
            the same length as titles.
    """
    assert((titles is None)or (len(images) == len(titles)))
    n_images = len(images)
    if titles is None: titles = ['Image (%d)' % i for i in range(1,n_images + 1)]
    fig = plt.figure()
    for n, (image, title) in enumerate(zip(images, titles)):
        a = fig.add_subplot(cols, np.ceil(n_images/float(cols)), n + 1)
        if image.ndim == 2:
            plt.gray()
        plt.imshow(image)
        a.set_title(title)
    fig.set_size_inches(np.array(fig.get_size_inches()) * n_images)
plt.show()