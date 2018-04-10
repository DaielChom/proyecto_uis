# DATASET

### Paquetes

* **dataset raw - Bogota Estrato Economico**: [Drive](https://drive.google.com/file/d/1cQPLqVHW9f7alj_CNRApJNj-XmqDDXb3/view?usp=sharing) Con SASplanet se obtuvieron las imagenes del archivo `dataset raw - Bogota Estrato Economico.zip` el cual consiste en imagenes satelitales e imagenes de la informacion del estrato. Las imagenes satelitales estan sin etiquetar y son de tamaño bastante considerable, las imagenes layers, de igual manera de tamaño considerable, son la etiqueta de las imagenes satelitales.

#### TEST
zoom|satellite_count|satellite_size|layer_count|layer_size
-|-|-|-|-
13|1|"591x780"|1|"591x780"
14|1|"1180x1559"|1|"1180x1559"
15|1|"2360x3118"|1|"2360x3118"
16|4|"2360x3118"|4|"2360x3118"
17|9|"3146x4157"|9|"3146x4157"
18|25|"3775x4988"|25|"3775x4988"
19|100|"3775x4988"|100|"3775x4988"
20|256|"4719x6235"|256|"4719x6235"
21|625|"6040x7980"|625|"6040x7980"

#### TRAIN
zoom|satellite_count|satellite_size|layer_count|layer_size
-|-|-|-|-
13|1|"481x895"|1|"481x895"
14|1|"962x1789"|1|"962x1789"
15|1|"1922x3576"|1|"1922x3576"
16|4|"1921x3575"|4|"1921x3575"
17|9|"2560x4767"|9|"2560x4767"
18|25|"3072x5720"|25|"3072x5720"
19|100|"3072x5720"|100|"3072x5720"
20|256|"3840x7150"|256|"3840x7150"
21|625|"4915x9153"|625|"4915x9153"

* **zoom:** Nivel de zoom de las imagenes
* **count:** Canidad de imagenes del respectivo zoom
* **size:** Resolucion de cada imagen del respectivo zoom

Como se menciono este es el dataset que en su mayoria se usa para el notebook `dataset`.

* **bogota_dataset_without_griss:**
[Drive](https://drive.google.com/open?id=1vj9DXsSeMhTY6WywQrrQDpUZUYpAttyy) imágenes de varias zoom, obtenidas de SASplanet pero esta vez se eliminan las imagenes grises que podrian arruinar el entranamiento

#### TEST
zoom|satellite_count|satellite_size|layer_count|layer_size
-|-|-|-|-
13|1|"591x780"|1|"591x780"
14|1|"1180x1559"|1|"1180x1559"
15|1|"2360x3118"|1|"2360x3118"
16|4|"2360x3118"|4|"2360x3118"
17|7|"3146x4157"|7|"3146x4157"
18|13|"3775x4988"|13|"3775x4988"
19|45|"3775x4988"|45|"3775x4988"
20|96|"4719x6235"|96|"4719x6235"
21|214|"6040x7980"|214|"6040x7980"

#### TRAIN
zoom|satellite_count|satellite_size|layer_count|layer_size
-|-|-|-|-
13|1|"481x895"|1|"481x895"
14|1|"962x1789"|1|"962x1789"
15|1|"1922x3576"|1|"1922x3576"
16|4|"1921x3575"|4|"1921x3575"
17|7|"2560x4767"|7|"2560x4767"
18|16|"3072x5720"|16|"3072x5720"
19|51|"3072x5720"|51|"3072x5720"
20|114|"3840x7150"|114|"3840x7150"
21|246|"4915x9153"|246|"4915x9153"
