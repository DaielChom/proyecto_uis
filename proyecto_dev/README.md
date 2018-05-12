# Detección automática del nivel de estratificación socioeconómico urbano usando redes neuronales convolucionales sobre imágenes satelitales con información aumentada. **[DEV]**

### Objetivo general:
* Diseñar, desarrollar y evaluar redes convolucionales para la determinación del nivel socio económico urbano mediante el uso de imágenes satelitales e información adicional.

### Objetivos específicos:

* **[OK]** Identificar fuentes de datos de imágenes satelitales e información adicional. `Voy a sacar las imagenes de SASplanet y a usar KMLs echos por mi basados en los de mapas.bogota`
* **[OK]** Diseñar y construir datasets integrando los datos obtenidos de las fuentes identificadas. `El dataset ya esta creado con el nombre de OVERLAECOBO y se encuentra en ![mega](https://mega.nz/#!NKZz2RqL!hyl7dupDaqpNBNI8npsF6PTBRcc_7sfoDj4fADcXHe8)` 
* **[Dev]** Diseñar distintas arquitecturas de redes convolucionales.    
* Entrenar las redes convolucionales probando configuraciones de datasets.
* Evaluar el desempeño de las redes convolucionales con el uso de los distintos dataset.    
* Elegir la mejor configuración tanto de red convolucional como de     conjunto de datos, teniendo en cuenta el desempeño obtenido.

### Justificación y/o Planteamiento del problema:

La medición del nivel económico, de una zona, actualmente conlleva un trabajo extenso, como lo expresa el DANE, “en el caso de las revisiones generales urbanas, así como en la estratificación rural se apoya en censos de vivienda”1. Es decir se requiere la elaboración de una encuesta de gran tamaño, la cual consume mucho tiempo y personal. Posteriormente, si la encuesta no se realizó usando software de recolección de datos, es necesario realizar su tipeo. Según la metodología que usa el DANE2,3, el cálculo final del estrato se realiza mediante modelos estadísticos y económicos especialmente calibrados para esta tarea.
En este contexto surgen varias interrogantes respecto a la capacidad de actualización de esta metodología:  ¿Qué sucede cuando una ciudad tiene una alta tasa de desarrollo urbano?, ¿Cómo mantiene el gobierno actualizada la información de los estratos ante éstas circunstancias?, ¿Que tan efectiva es la metodología actual ante estos casos de alto desarrollo urbano?.
Por tanto, el objetivo de este trabajo es desarrollar métodos basados en redes neuronales convolucionales y evaluar su capacidad para determinar automáticamente el estrato socioeconómico usando imágenes satelitales e información adicional (información catastral, presencia y consumo de servicios, etc.)

### Palabras y/o Términos Clave:
Imagen satelital, Nivel Socio-económico, Estrato Social, Clasificador.

### Referencias:
[1] Preguntas frecuentes
(https://www.dane.gov.co/files/geoestadistica/Preguntas_frecuentes_estratificacion.pdf)
[2] Metodología propuesta por el DANE. (http://www.dane.gov.co/index.php/servicios-al-ciudadano/servicios-de-informacion/estratificacion-socioeconomica#metodolog%C3%ADa)
[3] Procedimiento del cálculo
(http://www.dane.gov.co/files/geoestadistica/estratificacion/procedimientoDeCalculo.pdf)

#### Plan
El plan del proyecto se puede encontrar en [Drive](https://drive.google.com/open?id=1yA5oFJI8OuvTws1Iu5F4vVfdCalXFfKHkt-DQbwAB4o)