# DATASET
Se creará una copia de los datos en la carpeta de [Drive](https://drive.google.com/open?id=1XEgCJ6I5MNf84vwempFXAJf59X-gDZCW)

### Paquetes

* **bogota_dataset_raw**: En primera medida y con SASplanet se obtuvieron las imagenes del archivo `bogota_dataset_raw` el cual consiste en imagenes satelitales e imagenes de la informacion del estrato. Las imagenes satelitales estan sin etiquetar y son de tamaño bastante considerable, en el notebook `dataset` se transforman (reducen) y etiquetan dichas imagenes usando las imagnes de los estratos. Estas imagenes estan descritas de la siguiente manera

zoom|satelital_count|satelital_size|estrato_count|estrato_size
-|-|-|-|-
12|1|"307x528"|1|"307x528"
13|1|"613x1055"|1|"613x1055"
14|1|"1225x2109"|1|"1225x2109"
15|1|"2450x4217"|1|"2450x4217"
16|4|"2449x4217"|4|"2449x4217"
17|9|"3265x5622"|9|"3265x5622"
18|25|"3918x6746"|25|"3918x6746"
19|49|"5597x9637"|49|"5597x9637"
20|121|"7124x12265"|121|"7124x12265"

* **zoom: ** Nivel de zoom de las imagenes
* **satelital_count: ** Canidad de imagenes del respectivo zoom
* **satelital_size: ** Resolucion de cada imagen del respectivo zoom

Como se menciono este es el dataset que en su mayoria se usa para el notebook `dataset`

* **bogota_dataset_without_target: ** Igualmente dos tipos de imagenes satelitales, pero esta vez dividas en imagenes más pequeñas lo siguiente es etiquetarlas en el notebook `target_dataset`.

zoom|satelital_count|satelital_size|estrato_count|estrato_size
-|-|-|-|-
12|1|"307x528"|1|"307x528"
13|4|"306x527"|4|"306x527"
14|12|"408x527"|12|"408x527"
15|40|"490x527"|40|"490x527"
16|128|"612x527"|128|"612x527"
17|495|"653x511"|495|"653x511"
18|1800|"653x562"|1800|"653x562"
19|16905|"373x419"|16905|"373x419"
20|37752|"548x511"|37752|"548x511"

Se recuerda que este nuevo dataset es el que se usará en el notebook `target_dataset`