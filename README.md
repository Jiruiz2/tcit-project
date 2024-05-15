# Prueba técnica TCIT - Javier Ruiz

Requisitos mínimos para asegurar funcionamiento:
- Rails >= 7.0
- Ruby = 3.3.1
- Node >= 18.0
- Npm >= 10.0
- Postgres >= 14.0

El proyecto se divide en dos carpetas donde *server* consiste en el backend desarrollado en Rails y *web* en el frontend desarrollado en React con Redux.

Para poder ejecutar el proyecto debemos seguir los siguientes pasos:

## Paso 1: Configurar el Backend

### Paso 1.1: Ingresar a la carpeta *server*

Para esto puedes usar tu explorador de archivos, o bien, el siguiente comando

```
cd server
```

### Paso 1.2: Crear una base de datos local

Puedes seguir el siguiente tutorial para crear una base de datos en Postgres, la cual utilizaremos para almacenar la información de nuestra API.

> https://kinsta.com/es/blog/postgres-crear-bases-de-datos/

### Paso 1.3: Definir las variables de entorno

Debes crear un archivo *.env* dentro de la carpeta *server* para eso puedes usar tu explorador de archivos, o bien, el siguiente comando

```
touch .env
```

Luego debes agregar las siguientes variables de entorno para que funcione la API:

- DATABASE_HOST: Host de la base datos, debiese ser 'localhost'
- DATABASE_USERNAME: Nombre de usuario de la base de datos, normalmente es 'postgres'
- DATABASE_PASSWORD: Contraseña del usuario de la base de datos
- PORT: Puerto para que la API reciba solicitudes, utilizar el 5000 por simplicidad

Un ejemplo de como debería quedar el archivo es lo siguiente:

![image](https://hackmd.io/_uploads/B1MZmhb7A.png)

### Paso 1.4: Instalar las dependencias

Debes ejecutar el siguiente comando

```
bundle install
```

### Paso 1.5: Levantar el servidor

Una vez realizado todos los pasos anteriores, solo basta con ejecutar el siguiente comando:

```
rails server
```

Si todo salió bien, debieses ver esto en tu consola:

![image](https://hackmd.io/_uploads/rycmVhWQA.png)


## Parte 2: Configurar el frontend

### Paso 2.1: Ingresar a la carpeta *web*

Para esto puedes usar tu explorador de archivos, o bien, el siguiente comando

```
cd web
```

O en caso de que sigas en la carpeta *server*

```
cd ../web
```

### Paso 2.2: Instalar las dependencias

Para esto debes ejecutar el siguiente comando
```
npm install
```

### Paso 2.3: Definir las variables de entorno

Al igual que en el paso 1.3, debes crear un archivo .env y agregar la siguiente variable:
- REACT_APP_POSTS_API_URL=http://localhost:5000

### Paso 2.4: Levantar la página web

Para esto solo debes ejecutar el siguiente comando

```
npm start
```
