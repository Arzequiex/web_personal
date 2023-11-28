// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("Tarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function() {
    listaTareas.removeChild(nuevaTarea);
    };
    const marcarComp = document.createElement("INPUT");
    marcarComp.setAttribute("type","checkbox");
    marcarComp.className = "checkbox";
    marcarComp.onclick = function() {
        nuevaTarea.classList.toggle("completed");
    };
    nuevaTarea.appendChild(marcarComp);
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
    };
    };

  
    
    // Agregar evento de clic al botón "Agregar"
 document.getElementById("agregar").addEventListener("click",
    agregarTarea);

// Función para mostrar tareas completadas
function mostrarCompletadas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
    if (tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    }
    
    // Función para mostrar tareas pendientes
    function mostrarPendientes() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
    if (!tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    }

    function mostrarTodas() {
        const tareas = document.querySelectorAll("li");
        tareas.forEach(tarea => {
            tarea.style.display = "flex";
        });
    };

    // Agregar evento de clic al botón "Mostrar Completadas"
    document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);
    
    // Agregar evento de clic al botón "Mostrar Pendientes"
    document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);

    document.getElementById("mostrarTodas").addEventListener("click", mostrarTodas);