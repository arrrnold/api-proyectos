/**
 * Rutas de la API:
Obtener la lista de todos las tareas (GET).
Obtener una teare por su ID (GET).
Agregar una nueva tarea (POST).
Actualizar una tearea por su ID (PUT).
Eliminar una tarea por su ID (DELETE).
Obtener la lista de todos los proyectos (GET).
Obtener un proyecto por su ID (GET).
Agregar un nuevo proyecto (POST).
Actualizar un proyecto por su ID (PUT).
Eliminar un proyecto por su ID (DELETE).
Mostrar todas las tareas de un proyecto.
Mostrar una tarea específica de un proyecto.
Mostrar tareas de un proyecto por estado (Use Query String para el estado).
Mostrar todas las tareas de un proyecto paginadas (User Query String para especificar número de página y cuantos registros por página).
Mostrar tareas de un proyecto por fecha de inicio.
*/

const express = require('express')
var bodyParser = require('body-parser')
const { response } = require("express");
const app = express();
const puerto = process.env.PORT || 3000;
const jsonParser = bodyParser.json();


// Usemos un arreglo de objetos de tipo Proyectos
let proyectos = [
    {
        id: 1,
        nombre_del_proyecto: "Investigación de Mercado",
        descripcion_del_proyecto: "Realizar un estudio de mercado para identificar oportunidades de negocio.",
        fecha_inicio: "01-03-2022",
        fecha_fin: "30-06-2022"
    },
    {
        id: 2,
        nombre_del_proyecto: "Desarrollo de Producto",
        descripcion_del_proyecto: "Diseñar y desarrollar un nuevo producto basado en los resultados de la investigación.",
        fecha_inicio: "15-07-2022",
        fecha_fin: "30-11-2023"
    },
    {
        id: 3,
        nombre_del_proyecto: "Lanzamiento al Mercado",
        descripcion_del_proyecto: "Preparar y llevar a cabo el lanzamiento del producto en el mercado.",
        fecha_inicio: "01-12-2023",
        fecha_fin: "28-02-2024"
    },
    {
        id: 4,
        nombre_del_proyecto: "Optimización del Producto",
        descripcion_del_proyecto: "Realizar mejoras y optimizaciones en el producto según las retroalimentaciones de los usuarios.",
        fecha_inicio: "15-03-2024",
        fecha_fin: "31-05-2024"
    },
    {
        id: 5,
        nombre_del_proyecto: "Evaluación del Rendimiento",
        descripcion_del_proyecto: "Evaluar el rendimiento del producto después de su lanzamiento y tomar medidas para mejorarlo.",
        fecha_inicio: "01-06-2024",
        fecha_fin: "30-09-2024"
    },
    {
        id: 6,
        nombre_del_proyecto: "Expansión del Mercado",
        descripcion_del_proyecto: "Explorar oportunidades para expandir el producto a nuevos mercados.",
        fecha_inicio: "01-10-2024",
        fecha_fin: "31-12-2024"
    },
    {
        id: 7,
        nombre_del_proyecto: "Mejora Continua",
        descripcion_del_proyecto: "Continuar mejorando el producto y manteniendo la satisfacción del cliente.",
        fecha_inicio: "01-01-2025",
        fecha_fin: "31-03-2025"
    },
    {
        id: 8,
        nombre_del_proyecto: "Planificación Estratégica",
        descripcion_del_proyecto: "Desarrollar una estrategia a largo plazo para el crecimiento de la empresa.",
        fecha_inicio: "01-04-2025",
        fecha_fin: "30-06-2025"
    },
    {
        id: 9,
        nombre_del_proyecto: "Desarrollo de Nuevos Productos",
        descripcion_del_proyecto: "Investigar y desarrollar nuevos productos para diversificar la oferta de la empresa.",
        fecha_inicio: "01-07-2025",
        fecha_fin: "30-09-2025"
    },
    {
        id: 10,
        nombre_del_proyecto: "Expansión Global",
        descripcion_del_proyecto: "Expandir la presencia de la empresa a nivel internacional.",
        fecha_inicio: "01-10-2025",
        fecha_fin: "31-12-2025"
    }
];

// Usemos un arreglo de objetos de tipo Tareas
let tareas = [
    {
        id: 1,
        id_proyecto: 3,
        nombre_tarea: "Preparar informe de investigación",
        descripcion_tarea: "Compilar datos y preparar un informe de investigación.",
        fecha_asignacion: "30-04-2022",
        estado: "No iniciada"
    },
    {
        id: 2,
        id_proyecto: 3,
        nombre_tarea: "Presentación de resultados",
        descripcion_tarea: "Preparar una presentación para compartir los resultados de la investigación.",
        fecha_asignacion: "10-05-2022",
        estado: "En progreso"
    },
    {
        id: 3,
        id_proyecto: 4,
        nombre_tarea: "Diseño de prototipo",
        descripcion_tarea: "Crear un prototipo inicial del producto.",
        fecha_asignacion: "05-07-2023",
        estado: "Completada"
    },
    {
        id: 4,
        id_proyecto: 4,
        nombre_tarea: "Desarrollo de funcionalidades",
        descripcion_tarea: "Programar las funcionalidades clave del producto.",
        fecha_asignacion: "15-08-2023",
        estado: "No iniciada"
    },
    {
        id: 5,
        id_proyecto: 4,
        nombre_tarea: "Pruebas de usuario",
        descripcion_tarea: "Realizar pruebas de usuario para garantizar la calidad del producto.",
        fecha_asignacion: "01-09-2023",
        estado: "No iniciada"
    },
    {
        id: 6,
        id_proyecto: 3,
        nombre_tarea: "Revisar resultados",
        descripcion_tarea: "Analizar los resultados de la investigación.",
        fecha_asignacion: "20-09-2022",
        estado: "No iniciada"
    },
    {
        id: 7,
        id_proyecto: 4,
        nombre_tarea: "Optimizar código",
        descripcion_tarea: "Mejorar el rendimiento del código del producto.",
        fecha_asignacion: "10-10-2023",
        estado: "No iniciada"
    },
    {
        id: 8,
        id_proyecto: 4,
        nombre_tarea: "Realizar pruebas de carga",
        descripcion_tarea: "Evaluar el rendimiento del producto bajo carga.",
        fecha_asignacion: "25-11-2023",
        estado: "No iniciada"
    },
    {
        id: 9,
        id_proyecto: 3,
        nombre_tarea: "Documentar hallazgos",
        descripcion_tarea: "Crear documentación detallada de los hallazgos de la investigación.",
        fecha_asignacion: "15-12-2022",
        estado: "No iniciada"
    },
    {
        id: 10,
        id_proyecto: 4,
        nombre_tarea: "Preparar lanzamiento",
        descripcion_tarea: "Planificar el lanzamiento del producto al mercado.",
        fecha_asignacion: "05-01-2024",
        estado: "No iniciada"
    }
];


// endpoints de la API
// Obtener todas las tareas
app.get('/socios/v1/tareas', (req, res) => {
    if (tareas.length === 0) {
        return res.status(404).json({
            estado: 0,
            mensaje: 'No hay tareas',
            tareas: []
        });
    } else {
        return res.json({
            tareas: tareas,
            estado: 1,
            mensaje: 'Tareas obtenidas con éxito'
        });
    }
});

// Obtener una tarea por su ID
app.get('/socios/v1/tareas/:id', (req, res) => {
    const id = req.params.id;
    const tarea = tareas.find(t => t.id == id);
    if (tarea) {
        res.status(200).json({
            estado: 1,
            mensaje: "Tarea encontrada",
            tarea: tarea,
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "Tarea no encontrada",
        });
    }
});

// Agregar una nueva tarea
app.post('/socios/v1/tareas', jsonParser, (req, res) => {
    const { id_proyecto, nombre_tarea, descripcion_tarea, fecha_asignacion, estado } = req.body;
    const id = Math.round(Math.random() * 1000);

    if (!id_proyecto || !nombre_tarea || !descripcion_tarea || !fecha_asignacion || !estado) {
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan parámetros en la solicitud",
        });
    } else {
        const tarea = { id, id_proyecto, nombre_tarea, descripcion_tarea, fecha_asignacion, estado };
        tareas.push(tarea);

        res.status(201).json({
            estado: 1,
            mensaje: "Tarea creada",
            tarea: tarea
        });
    }
});

// Actualizar una tarea por su ID
app.put('/socios/v1/tareas/:id', jsonParser, (req, res) => {
    const id = req.params.id;
    const { id_proyecto, nombre_tarea, descripcion_tarea, fecha_asignacion, estado } = req.body;

    if (!id_proyecto || !nombre_tarea || !descripcion_tarea || !fecha_asignacion || !estado) {
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan parámetros en la solicitud",
        });
    } else {
        const index = tareas.findIndex(t => t.id == id);

        if (index !== -1) {
            tareas[index] = { id, id_proyecto, nombre_tarea, descripcion_tarea, fecha_asignacion, estado };
            res.status(200).json({
                estado: 1,
                mensaje: "Tarea actualizada",
                tarea: tareas[index],
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "ID no encontrado"
            });
        }
    }
});

// Eliminar una tarea por su ID
app.delete('/socios/v1/tareas/:id', (req, res) => {
    const id = req.params.id;
    const index = tareas.findIndex(t => t.id == id);

    if (index !== -1) {
        tareas.splice(index, 1);
        res.status(200).json({
            estado: 1,
            mensaje: "Tarea borrada correctamente"
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "Tarea no encontrada"
        });
    }
});

/**
 * 
 * CRUD DE PROYECTOS
 * 
 * 
 */

// Obtener todas los proyectos
app.get('/socios/v1/proyectos', (req, res) => {
    if (proyectos.length === 0) {
        return res.status(404).json({
            estado: 0,
            mensaje: 'No hay proyectos',
            proyectos: []
        });
    } else {
        return res.json({
            proyectos: proyectos,
            estado: 1,
            mensaje: 'proyectos obtenidos con éxito'
        });
    }
});

// Obtener una proyecto por su ID
app.get('/socios/v1/proyectos/:id', (req, res) => {
    const id = req.params.id;
    const proyecto = proyectos.find(t => t.id == id);
    if (proyecto) {
        res.status(200).json({
            estado: 1,
            mensaje: "proyecto encontrado",
            proyecto: proyecto,
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "proyecto no encontrado",
        });
    }
});

// Agregar un nuevo proyecto
app.post('/socios/v1/proyectos', jsonParser, (req, res) => {
    const { nombre_del_proyecto, descripcion_del_proyecto, fecha_inicio, fecha_fin } = req.body;
    const id = Math.round(Math.random() * 1000);

    if (!nombre_del_proyecto || !descripcion_del_proyecto || !fecha_inicio || !fecha_fin) {
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan parámetros en la solicitud",
        });
    } else {
        const proyecto = { id, nombre_del_proyecto, descripcion_del_proyecto, fecha_inicio, fecha_fin };
        proyectos.push(proyecto);

        res.status(201).json({
            estado: 1,
            mensaje: "proyecto creado",
            proyecto: proyecto
        });
    }
});

// Actualizar una proyecto por su ID
app.put('/socios/v1/proyectos/:id', jsonParser, (req, res) => {
    const id = req.params.id;
    const { nombre_del_proyecto, descripcion_del_proyecto, fecha_inicio, fecha_fin } = req.body;

    if (!nombre_del_proyecto || !descripcion_proye || !fecha_inicio || !fecha_fin) {
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan parámetros en la solicitud",
        });
    } else {
        const index = proyectos.findIndex(t => t.id == id);

        if (index !== -1) {
            proyectos[index] = { id, nombre_del_proyecto, descripcion_del_proyecto, fecha_inicio, fecha_fin };
            res.status(200).json({
                estado: 1,
                mensaje: "proyecto actualizado",
                proyecto: proyectos[index],
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "ID no encontrado"
            });
        }
    }
});

// Eliminar una proyecto por su ID
app.delete('/socios/v1/proyectos/:id', (req, res) => {
    const id = req.params.id;
    const index = proyectos.findIndex(t => t.id == id);

    if (index !== -1) {
        proyectos.splice(index, 1);
        res.status(200).json({
            estado: 1,
            mensaje: "proyecto borrado correctamente"
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "proyecto no encontrado"
        });
    }
});

// mostrar todas las tareas de un proyecto
app.get('/socios/v1/tareas/proyectos/:id', (req, res) => {
    const id = req.params.id; // id del proyecto en los params

    const tareas_por_proyecto = tareas.filter(t => t.id_proyecto == id);

    if (tareas_por_proyecto.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: "Tareas encontradas",
            tareas: tareas_por_proyecto,
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "El proyecto no tiene tareas",
        });
    }
});

// Mostrar una tarea específica de un proyecto
app.get('/socios/v1/tareas/:id_tar/proyectos/:id_pj', (req, res) => {
    const id_pj = req.params.id_pj; // Obtener el id del proyecto de los params
    const id_tar = req.params.id_tar; // Obtener el id de la tarea de los params

    const tarea_de_proyecto = tareas.filter(t => t.id_proyecto == id_pj && t.id == id_tar);

    if (tarea_de_proyecto.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: "Tarea encontrada",
            tarea: tarea_de_proyecto, // Se asume que solo se encontrará una tarea
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "No se encuentra la tarea",
        });
    }
});

// Mostrar tareas de un proyecto por estado (Use Query String para el estado)
app.get('/socios/v1/tareas/proyectos/:id_pj', (req, res) => {
    const id_pj = req.params.id_pj;
    const estado = req.query.estado;
    const tareas_por_proyecto_por_estado = tareas.filter((tarea) => tarea.id_proyecto === Number(id_pj) && tarea.estado === estado);

    if (tareas_por_proyecto_por_estado.length == 0) {
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontraron tareas con ese estado en el proyecto"
        });
    } else {
        res.status(201).json({
            estado: 1,
            mensaje: "Se encontraron tareas",
            tarea: tareas_por_proyecto_por_estado
        });
    }
});

// Mostrar todas las tareas de un proyecto paginadas (User Query String para especificar número de página y cuantos registros por página)
app.get('/socios/v1/proyectos/:id_pj/tareas', (req, res) => {
    const id_pj = req.params.id_pj;
    const pagina = req.query.pagina; // Obtener el número de página
    const cuantos = req.query.cuantos; // Obtener la cantidad de registros por página
    
    // Calcula índice inicial y final para la paginación
    const inicio = (pagina - 1) * cuantos;
    const fin = pagina * cuantos;
    
    const tareasProyecto = tareas.filter(tarea => tarea.id_proyecto == id_pj);

    if (tareasProyecto.length > 0) {
        const tareasPaginadas = tareasProyecto.slice(inicio, fin);
        
        res.status(200).json({
            estado: 1,
            mensaje: "Tareas del proyecto encontradas y paginadas",
            tareas: tareasPaginadas
        })
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontraron tareas para el proyecto especificado"
        })
    }
});

// Mostrar tareas de un proyecto por fecha de inicio
app.get('/socios/v1/proyectos/tareas/:fecInicio', (req, res) => {
    const fecInicio = req.params.fecInicio;

    // Buscar el proyecto por fecha de inicio del proyecto
    const proyecto_por_fecha_inicio = proyectos.find(
        proyecto => proyecto.fecha_inicio === fecInicio
    );

    if (!proyecto_por_fecha_inicio) {
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontró un proyecto con la fecha de inicio del proyecto",
        });
    } else {
        // Filtrar las tareas por el ID del proyecto encontrado
        const tareas_del_proyecto = tareas.filter(
            tarea => tarea.id_proyecto === proyecto_por_fecha_inicio.id
        );

        if (tareas_del_proyecto.length > 0) {
            res.status(200).json({
                estado: 1,
                mensaje: "Tareas encontradas por fecha de inicio del proyecto",
                tareas: tareas_del_proyecto,
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "No se encontraron tareas para el proyecto con la fecha de inicio del proyecto",
            });
        }
    }
});



app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
})