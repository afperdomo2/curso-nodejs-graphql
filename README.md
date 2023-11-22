# 💻My store with GraphQL

Primero se debe crear un token desde la ruta de `/login`

Para esto, se puede crear por base de datos el usuario:

- email: `admin@gmail.com`
- password: `$2b$10$acWGO2y5KzZSd61P6DYqcei/D0HovSof5j0eggfNCDr/7fsDvXoHC` (admin123)

Una vez logueado, ese **TOKEN** debe ser pasado en las peticiones, por un `Bearer Token` (No se pasa Prefix, solo token)

## Apollo Server

http://localhost:3000/graphql

## Commands

```sh
npm install
```

### Run Development

```sh
npm run dev
```

### Run Production

```sh
npm run start
```

### Run linter

```sh
npm run lint
```

## 🐳 Docker

### Build the image

```sh
docker build -t my-store-graphql-img .
```

### Run the container

```sh
docker run -d -p 3000:3000 --name my-store-graphql my-store-graphql-img
```

## 🐳 Docker Compose

```sh
# Ejecutar todos los contenedores
docker-compose up -d

# Ejecutarlos de forma individual
docker-compose up -d postgres
```
