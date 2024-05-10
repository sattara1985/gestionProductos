# Gestión de Productos

## Descripción

Este proyecto consta de dos partes: el frontend y el backend, diseñados para gestionar los productos. El frontend está construido en React y se encarga de proporcionar una interfaz de usuario para registrar, editar y eliminar un productos. El backend se basa en Node.js y Express, junto con una base de datos MySQL, para proporcionar una API que admite operaciones CRUD en la lista de productos.

 
## Frontend


El [frontend](https://contacts-backend-d9ar.onrender.com "frontend") de la aplicación se encuentra en el archivo `App.js` y es responsable de la interfaz de usuario y la interacción con el usuario. Permite realizar las siguientes acciones:

- Registrar un nuevo producto.
- Editar la informacion de un producto existente.
- Eliminar un producto.
- Mostrar la lista de productos registrados.

Tiene un diseñor responsive por medio de[ Bootstrap](https://getbootstrap.com " Bootstrap") con botones y deseño atractivo al usuario además de un diseño muy intuitivo.

## Backend

https://contacts-backend-d9ar.onrender.com

El[ backend ](https://contacts-backend-d9ar.onrender.com " backend ")de la aplicación se encuentra en el archivo `app.js` y es el servidor de la aplicación. Utiliza Express para crear una API que gestiona las solicitudes del frontend y se conecta a una base de datos MySQL. Proporciona los siguientes endpoints:


| EndPoints | Description                    |
| ------------- | ------------------------------ |
| `POST /create`      | **Crea un nuevo producto en la base de datos.**       |
| `GET /productos`   | **Recupera la lista de los productos desde la base de datos.**     |
| `PUT /update/:id`   | **Actualiza los detalles de un producto existente.**     |
| `DELETE /delete/:id*`   | **Elimina un producto según su ID.**     |


## Requisitos

### Frontend

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Bootstrap](https://getbootstrap.com/)
- [SweetAlert2](https://sweetalert2.github.io/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)

## Instalación

### Frontend

1. Navega al directorio del frontend:

    	bash  /c/crud/client/src
		cd frontend
		
1. Instala las dependencias necesarias:

    	npm install
		
1. Inicia la aplicación:

    		npm start

> ***La aplicación estará disponible en http://localhost:3000.***



### Backend

1. Navega al directorio del backend:

    	bash   /c/crud/server
		cd backend
		
1. Instala las dependencias necesarias:
		npm install

1. Configura la base de datos MySQL: Asegúrate de tener una base de datos MySQL configurada con el nombre "prueba" y la tabla producto y los detalles de acceso correspondientes. Puedes configurar la conexión en el archivo app.js.



4. Inicia el servidor:

		node index.js

> ***El servidor estará disponible en http://localhost:3001.***

### Base de Datos

- se debe crear la base de datos con nombre prueba.

		CREATE DATABASE Prueba;

- una vez creada se debe crear la table productos

		CREATE TABLE producto (
		id INT PRIMARY KEY AUTO_INCREMENT,
		nombre VARCHAR(50),
		descripcion VARCHAR(255),
		especificacion VARCHAR(255),
		cantidad INT,
		precio INT);




### Uso

- El frontend permite interactuar con la aplicación y realizar operaciones en la lista de productos. CRUD completo con avisos interactivos para el usuario.


- El backend proporciona una API REST que maneja las solicitudes del frontend y realiza operaciones en la base de datos.

- Control de errores. Fallo Conexion con la Bd



------------








