
#  **[DEV]** Detección automática del nivel de estratificación socioeconómico urbano usando redes neuronales convolucionales sobre imágenes satelitales con información aumentada.

### Objetivo general:
* ●	Seleccionar y evaluar redes convolucionales para la determinación del nivel socio económico urbano mediante el uso de imágenes satelitales e información adicional.

### Objetivos específicos:

* **[OK]** Identificar fuentes de datos de imágenes satelitales e información adicional. `Voy a sacar las imagenes de SASplanet y a usar KMLs echos por mi basados en los de mapas.bogota`
* **[OK]** Diseñar y construir datasets integrando los datos obtenidos de las fuentes identificadas. `El dataset ya esta creado con el nombre de OVERLAECOBO y se encuentra en` [MEGA](https://mega.nz/#!NKZz2RqL!hyl7dupDaqpNBNI8npsF6PTBRcc_7sfoDj4fADcXHe8)
* **[OK]** Seleccionar entre distintas arquitecturas de redes neuronales convolucionales existentes en la literatura y repositorios tecnológicos. `Se trabajará con las redes neuronales presentes en el siguiente` [Framework](https://github.com/GeorgeSeif/Semantic-Segmentation-Suite)
* **[OK]** Entrenar las redes convolucionales probando configuraciones de datasets. `Se realizaron 11 pruebas por cada ZOOM, un total de 66 pruebas hasta con 5 o 6 redes neuronales distintas, todo en la Carpeta de resultados`
* **[OK]** Evaluar el desempeño de las redes convolucionales con el uso de los distintos dataset. `El framework automaticamente evalua el rendimiento de las redes, mostrando varias metricas, graficas y archivos`
* **[DEV]** Elegir la mejor configuración tanto de red convolucional como de     conjunto de datos, teniendo en cuenta el desempeño obtenido.

### Justificación y/o Planteamiento del problema:

La medición del nivel económico, de una zona, actualmente conlleva un trabajo extenso, como lo expresa el DANE, “en el caso de las revisiones generales urbanas, así como en la estratificación rural se apoya en censos de vivienda”1. Es decir se requiere la elaboración de una encuesta de gran tamaño, la cual consume mucho tiempo y personal. Posteriormente, si la encuesta no se realizó usando software de recolección de datos, es necesario realizar su tipeo. Según la metodología que usa el DANE2,3, el cálculo final del estrato se realiza mediante modelos estadísticos y económicos especialmente calibrados para esta tarea.
En este contexto surgen varias interrogantes respecto a la capacidad de actualización de esta metodología:  ¿Qué sucede cuando una ciudad tiene una alta tasa de desarrollo urbano?, ¿Cómo mantiene el gobierno actualizada la información de los estratos ante éstas circunstancias?, ¿Que tan efectiva es la metodología actual ante estos casos de alto desarrollo urbano?.
Por tanto, el objetivo de este trabajo es desarrollar métodos basados en redes neuronales convolucionales y evaluar su capacidad para determinar automáticamente el estrato socioeconómico usando imágenes satelitales e información adicional (información catastral, presencia y consumo de servicios, etc.)

### Palabras y/o Términos Clave:
Imagen satelital, Nivel Socio-económico, Estrato Social, Clasificador.

### Referencias:
[1] Preguntas frecuentes
(https://www.dane.gov.co/files/geoestadistica/Preguntas_frecuentes_estratificacion.pdf) <br/>
[2] Metodología propuesta por el DANE. (http://www.dane.gov.co/index.php/servicios-al-ciudadano/servicios-de-informacion/estratificacion-socioeconomica#metodolog%C3%ADa)<br/>
[3] Procedimiento del cálculo
(http://www.dane.gov.co/files/geoestadistica/estratificacion/procedimientoDeCalculo.pdf)

### Plan
El plan del proyecto se puede encontrar en [Drive](https://drive.google.com/open?id=1yA5oFJI8OuvTws1Iu5F4vVfdCalXFfKHkt-DQbwAB4o)

### **DAIELCHOM TG - UIS EISI**
Trabajo de grado - DaielChom.

### Presentación:
En este repositorio se encuentra todo lo referente al desarrollo del poryecto de mi proyecto de grado, desde la reuniones con el profesor, las dudas, las distintas soluciones planteadas y desarrolladas entre otras cosas que permitan la elaboracion de mi trabajo de grado.

**Realizado por:** Daniel Carvajal Patiño <br/>
**Dirigido por:** Raul Ramos Pollan y Fabio Martinez <br/>
**Apoyado por:** Muchas personas que me han ayudado en pequeñas cosas.

### Descripción:

* **Bitácoras:** En este directorio se lleva un seguimiento de las tareas realizadas y por realizar, un control de las concluciones de las reuiniones y una anotacion de las disintas ideas e inquitudes que surgan.

		Developed on Python 3 using pip