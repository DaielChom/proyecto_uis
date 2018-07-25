
# Proyecto de Grado

Proyecto de grado para optar por el titulo de ingeniero de sistemas con la Univerisdad Industrail de Santander - Colombia. Se creó un [documento](https://github.com/DaielChom/proyecto_uis/blob/master/Libro%20UIS/Libro%20Daniel%20C%20Pati%C3%B1o.pdf) donde se describe toda la elaboración del proyecto.

## Descripción:

* **TITULO**: Detección automática del nivel de estratificación socioeconómico urbano usando redes neuronales convolucionales sobre imágenes satelitales con información aumentada.

* **OBJETIVO GENERAL**: Seleccionar y evaluar redes convolucionales para la determinación del nivel socio económico urbano mediante el uso de imágenes satelitales e información adicional.

* **OBJETIVOS ESPECIFICOS:**

	* Identificar fuentes de datos de imágenes satelitales e información adicional. `Se crearon archivos [KML]() basados en la información del portal de mapas bogota`
	* Diseñar y construir datasets integrando los datos obtenidos de las fuentes identificadas. `Se diseño un dataset denominado OVERLAECOBO el cual esta disponible en` [MEGA](https://mega.nz/#!5a5EWCwD!ik2Rid52eJ5fMQXNeKBkpRkoYv___n_Wk6F1aS0E8Bw)
	* Seleccionar entre distintas arquitecturas de redes neuronales convolucionales existentes en la literatura y repositorios tecnológicos. `Se trabajo con el` [Framework](https://github.com/GeorgeSeif/Semantic-Segmentation-Suite) del usuario de Github @GeorgeSeif
	*  Entrenar las redes convolucionales probando configuraciones de datasets. `Se realizaron 11 pruebas por cada configuración del dataset, un total de 66 pruebas hasta con 5 o 6 redes neuronales distintas, todo en la Carpeta de resultados`
	* Evaluar el desempeño de las redes convolucionales con el uso de los distintos dataset. `El framework automaticamente evalua el rendimiento de las redes, mostrando varias metricas, graficas y archivos, sin embargo para este caso solamente se tuvieron en cuenta los valores de la metrica Iou - Intersection over Union, ya que para segmentación semántica esta es la mejor metrica`
	* Elegir la mejor configuración tanto de red convolucional como de conjunto de datos, teniendo en cuenta el desempeño obtenido.`Las pruebas indican que el mejor modelo para la detección del estrato social es FC-DenseNet56 con Epoch de 70 y match-size de 1, estos resultados obtenidos con la configuración 15_COMPOUND de OVERLAECOBO`

## Estructura:

El repositorio cuenta con un numero de directorios y notebooks donde se puede observar el desarrollo del proyecto anteriormente descrito, todo en el proyecto fue elaborado con Python 3.

* **Bitácora:** Directorio de Notebooks donde se llevan anotaciones cronolgicas sobre el avance del proyecto como comentarios personales de las reuniones y tareas realizadas.
* **Libro UIS:** Directorio con las plantillas de latex y word ofrecidas por la universidad para la creación del documento final que debe entregarse, la plantilla de latex ya se encuentra editada y la version del libro que se entrego a la universidad.
* **Resultados:** Directorio con notebooks y archivos referentes a los resultados de las 66 pruebas realizadas
* **Semantic-Segmentation-Suite:** [Framework](https://github.com/GeorgeSeif/Semantic-Segmentation-Suite) para segmentación semántica del usuario de Github @GeorgeSeif.
* **data:** Archivos usados para la creación de OVERLAECOBO
* **img:** Imagenes usadas en los distintos Notebooks del repositorio.
* **vector:** Imágenes vectoriales usadas en los Notebooks del repositorio.
* **01 - Posibles Fuente de Datos:** Notebook donde se muestra la busqueda y selección de fuente para los datos usados para los entrenamientos.
* **02 - dataset:** Notebook donde se muesta la creación del dataset OVERLAECOBO.
* **03 - Dataset Información Extra:** Notebook donde se muestra la creación de la configuración COMPOUND del dataset
* **04 - Search of Segmentation:** Notebook donde se muestra la busqueda y selección de un Framework o tutorial sobre segmentación semántica.
* **05 - Limpiando imágenes:** Notebook donde se muestra el proceso de eliminacion del fondo a las imágenes satelitales del dataset.
* **06 - Resultados:** Notebook donde se muestran los resultados, sin organizar, dados por las pruebas.
* **07 - Presentación Resultados:** Notebook donde se realiza una presentación de los distintos resultados entregados por las pruebas.
* **helper.py:** script con funciones usadas en varios notebooks del repositorio

## OVERLAECOBO:
dataset creado usando SASplanet y archivos KML creados usando la informacion del portal de mapas de bogotá. OVERLAECOBO es un dataset creado para la tarea de predecir el nivel socio-economico de una zona urbana usando imagenes satelitales y segmentación semantica. OVERLAECOBO cuenta con 5 niveles de acercamiento satelital o ZOOMS cada uno de los cuales cuenta con 3 tipos de imaǵenes satelitales geograficamente correspondidas entre sí. Los tres tipos de imágenes son SIMPLE, COMPOUND y LABEL. SIMPLE consta de imagenes satelitales RGB, COMPOUND consta de imagenes satelitales de 4 canales RGB + informacion extra, donde el cuarto canal es el porcentaje por localidad del riesgo que corren las mujeres en horarios nocturnos y por ultimo LABEL son las imagenes RGB Ground Truth, cuenta con un total de 7 colores, dode cada color indica una clase del dataset. el archivo classdict.csv indica esta relación clase - color.

## Replicar resultados:
Para replicar los resultados unicamente se requiere de descargar el dataset, descargar el framework, instalar sus dependencias entre ellas Tensorflow-gpu, organizar el dataset en el directorio del framework como se explica en el mismo y finalmente ejecutar los comandos de entrenamiento y testo en el directorio del framework, igualmente estas instrucciones estan en el README del Framework.
