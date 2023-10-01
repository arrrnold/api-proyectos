La API de tareas y trabajos está publicada usando render.com y se puede acceder a ella vía https://api-de-proyectos.onrender.com y el código fuente está publicado en https://github.com/arrrnold/api-proyectos.

## Rutas de la API
### Para tareas:

#### Obtener la lista de todas las tareas (GET):

- Ruta: `/socios/v1/tareas`
- Parámetros: Ninguno
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Tareas: Lista de todas las tareas (o mensaje de error si no se encuentran tareas)

#### Obtener una tarea por su ID (GET):

- Ruta: `/socios/v1/tareas/:id`
- Parámetros:
    - `id` (ID de la tarea)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Tarea: Detalles de la tarea especificada por su ID (o mensaje de error si no se encuentra la tarea)

#### Agregar una nueva tarea (POST):

- Ruta: `/socios/v1/tareas`
- Parámetros (en el cuerpo de la solicitud):
    - `id_proyecto` (ID del proyecto al que pertenece la tarea)
    - `nombre_tarea` (nombre de la tarea)
    - `descripcion_tarea` (descripción de la tarea)
    - `fecha_asignacion` (fecha de asignación en formato DÍA-MES-AÑO)
    - `estado`   (estado de la tarea: No iniciada, En Progreso, Completada)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Tarea: La tarea creada (o mensaje de error si no se pudo crear)

#### Actualizar una tarea por su ID (PUT):

- Ruta: `/socios/v1/tareas/:id`
- Parámetros:
    - `id` (ID de la tarea a actualizar)
- Parámetros (en el cuerpo de la solicitud):
    - `id_proyecto` (ID del proyecto al que pertenece la tarea)
    - `nombre_tarea` (nombre de la tarea)
    - `descripcion_tarea` (descripción de la tarea)
    - `fecha_asignacion` (fecha de asignación en formato DÍA-MES-AÑO)
    - `estado`  (estado de la tarea: No iniciada, En Progreso, Completada)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Tarea: La tarea actualizada (o mensaje de error si no se pudo actualizar)

#### Eliminar una tarea por su ID (DELETE):

- Ruta: `/socios/v1/tareas/:id`
- Parámetros:
    - `id` (ID de la tarea a eliminar)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Mensaje: "Tarea eliminada correctamente" (o mensaje de error si no se pudo eliminar la tarea)

### Para proyectos:

#### Obtener la lista de todos los proyectos (GET):

- Ruta: `/socios/v1/proyectos`
- Parámetros: Ninguno
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Proyectos: Lista de todos los proyectos (o mensaje de error si no se encuentran proyectos)

#### Obtener un proyecto por su ID (GET):

- Ruta: `/socios/v1/proyectos/:id`
- Parámetros:
    - `id` (ID del proyecto)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Proyecto: Detalles del proyecto especificado por su ID (o mensaje de error si no se encuentra el proyecto)

#### Agregar un nuevo proyecto (POST):

- Ruta: `/socios/v1/proyectos`
- Parámetros (en el cuerpo de la solicitud):
    - `nombre_del_proyecto` (nombre del proyecto)
    - `descripcion_del_proyecto` (descripción del proyecto)
    - `fecha_inicio` (fecha de inicio del proyecto en formato DÍA-MES-AÑO)
    - `fecha_fin` (fecha de finalización del proyecto en formato DÍA-MES-AÑO)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Proyecto: El proyecto creado (o mensaje de error si no se pudo crear el proyecto)

#### Actualizar un proyecto por su ID (PUT):

- Ruta: `/socios/v1/proyectos/:id`
- Parámetros:
    - `id` (ID del proyecto a actualizar)
- Parámetros (en el cuerpo de la solicitud):
    - `nombre_del_proyecto` (nombre del proyecto)
    - `descripcion_del_proyecto` (descripción del proyecto)
    - `fecha_inicio` (fecha de inicio del proyecto en formato DÍA-MES-AÑO)
    - `fecha_fin` (fecha de finalización del proyecto en formato DÍA-MES-AÑO)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Proyecto: El proyecto actualizado (o mensaje de error si no se pudo actualizar el proyecto)

#### Eliminar un proyecto por su ID (DELETE):

- Ruta: `/socios/v1/proyectos/:id`
- Parámetros:
    - `id` (ID del proyecto a eliminar)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Mensaje: "Proyecto eliminado correctamente" (o mensaje de error si no se pudo eliminar el proyecto)

### Para tareas de proyectos:

#### Mostrar todas las tareas de un proyecto (GET):

- Ruta: `/socios/v1/tareas/proyectos/:id`
- Parámetros:
    - `id` (ID del proyecto)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Tareas: Lista de todas las tareas asociadas al proyecto especificado por su ID (o mensaje de error si no se encuentran tareas)

#### Mostrar una tarea específica de un proyecto (GET):

- Ruta: `/socios/v1/tareas/:id_tar/proyectos/:id_pj`
- Parámetros:
    - `id_pj` (ID del proyecto)
    - `id_tar` (ID de la tarea)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Tarea: Detalles de la tarea específica asociada al proyecto (o mensaje de error si no se encuentra la tarea)

#### Mostrar tareas de un proyecto por estado (GET, use Query String para el estado):

- Ruta: `/socios/v1/tareas/proyectos/:id_pj/estado=`
- Parámetros:
    - `id_pj` (ID del proyecto)
- Parámetros (Query String):
    - `estado`  (estado de la tarea: No iniciada, En Progreso, Completada)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Tareas: Lista de tareas del proyecto que coinciden con el estado especificado (o mensaje de error si no se encuentran tareas)

#### Mostrar todas las tareas de un proyecto paginadas

- Se usa Query String para especificar número de página y cuántos registros por página

- Ruta: `/socios/v1/proyectos/:id_pj/tareas?pagina=&cuantos=`
- Parámetros:
    - `id_pj` (ID del proyecto)
- Parámetros (Query String):
    - `pagina` (número de página)
    - `cuantos` (cantidad de registros por página)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Tareas: Lista de tareas del proyecto paginadas según los parámetros especificados (o mensaje de error si no se encuentran tareas)

#### Mostrar tareas de un proyecto por fecha de inicio (GET):

- Ruta: `/socios/v1/proyectos/tareas/:fecInicio`
- Parámetros:
    - `fecInicio` (fecha de inicio del proyecto en formato DÍA-MES-AÑO)
- Devuelve:
    - Estado: 200 (Éxito) o 404 (No encontrado)
    - Tareas: Lista de tareas de un proyecto que coinciden con la fecha de inicio especificada en formato DÍA-MES-AÑO (o mensaje de error si no se encuentran tareas)
