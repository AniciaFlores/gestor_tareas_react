# Aplicación de Gestión de Tareas con React
---
Grupo # 9

Desarrolladores: 
Anicia E. Flores C. y 
Felipe Exequiel Ocampo 

Correo Electrónico: redactorweboficial@gmail.com
exeocampo1994@gmail.com

GitHub: 
https://github.com/AniciaFlores
https://github.com/FelipeOcampo22

Esta aplicación web pertenece al Proyecto Final Integrador del Curso de React de 'Argentina Programa' en conjunto con la UNT. 

Esta App, desarrollada en React, permite gestionar una lista de tareas de manera sencilla. Utiliza componentes funcionales, el hook `useState` para el manejo del estado, el hook `useEffect` para realizar efectos secundarios, y eventos para interactuar con el usuario.

## Componentes

### Componentes Funcionales

#### Componente de Lista de Tareas (TaskList):
- Muestra la lista de tareas.
- Recibe la lista de tareas como propiedades, así como funciones para gestionar eventos relacionados con las tareas (marcar como completada, eliminar, etc.).
- Cada tarea se representa mediante un componente `TaskItem`.

#### Componente de Tarea (TaskItem):
- Representa individualmente una tarea.
- Muestra el nombre de la tarea y un botón para completarla.
- Utiliza el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado cuando está completada).

#### Componente de Formulario (TaskForm):
- Contiene un formulario para agregar nuevas tareas.
- Utiliza el estado local para gestionar la entrada del usuario y envía la nueva tarea a la lista principal.

### Estado con `useState`

#### Estado Principal (tasks):
- Utiliza el hook `useState` en el componente principal para gestionar el estado de la lista de tareas.
- Cada tarea es un objeto con propiedades como id, nombre, y completada.

### Efectos con `useEffect`

#### Efecto de Actualización (`useEffect` en el componente principal):
- Utiliza `useEffect` para realizar una acción (por ejemplo, mostrar un mensaje) cuando el estado de la lista de tareas cambia.

### Interacción con el Usuario - Eventos

#### Eventos en Componente de Lista (TaskList):
- Implementa eventos que permiten al usuario interactuar con cada tarea (marcar, desmarcar como completada, eliminar, deshacer o editar).
- Estos eventos modifican el estado principal (tasks).

#### Eventos en Componente de Formulario (TaskForm):
- Implementa eventos para gestionar la entrada del usuario y agregar nuevas tareas a la lista. Las nuevas tareas se agregan abajo.

### Estilo y Diseño

- Aplicamos estilos CSS básico.


## Puntos Extra (Opcionales)

- Implementamos la persistencia de datos utilizando `localStorage` para que las tareas persistan incluso después de recargar la página.

## Instrucciones de Instalación y Ejecución

1. Clona este repositorio.
2. Navega a la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación.
5. Abre tu navegador y visita `http://localhost:3000`.

