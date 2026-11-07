"# ControlLabs API

API REST de ControlLabs para la gestión de préstamos, usuarios, ambientes, equipos y novedades. Está construida con Express y TypeScript. Las operaciones de negocio están preparadas como endpoints, pero responden con `501 Not Implemented` hasta que se conecten sus servicios.

## Requisitos

- Node.js y npm

## Instalación y ejecución

```bash
npm install
cp .env.example .env
npm run dev
```

El servidor usa el puerto `5000` de forma predeterminada. Puedes cambiarlo mediante la variable `PORT` en `.env`.

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor en modo de desarrollo con recarga automática. |
| `npm run build` | Compila TypeScript en `dist/`. |
| `npm start` | Ejecuta el servidor compilado. |

Para iniciar la versión compilada:

```bash
npm run build
npm start
```

## Endpoints

Todos los endpoints de recursos usan el prefijo `/api/v1`.

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/api/v1/health` | Comprueba el estado de la API. |
| `GET` | `/api/v1/loans/search` | Consulta el historial de préstamos. |
| `POST` | `/api/v1/loans` | Registra un préstamo. |
| `GET` | `/api/v1/loans/:id` | Consulta un préstamo por ID. |
| `PUT` | `/api/v1/loans/:id/accept` | Acepta el inventario de un préstamo. |
| `GET` | `/api/v1/users` | Lista usuarios. |
| `POST` | `/api/v1/users` | Registra un usuario. |
| `GET` | `/api/v1/users/:id` | Consulta un usuario por ID. |
| `PATCH` | `/api/v1/users/:id` | Actualiza parcialmente un usuario. |
| `DELETE` | `/api/v1/users/:id` | Solicita la eliminación lógica de un usuario. |
| `GET` | `/api/v1/environments` | Lista ambientes y laboratorios. |
| `POST` | `/api/v1/environments` | Registra un ambiente. |
| `PATCH` | `/api/v1/environments/:id` | Actualiza parcialmente un ambiente. |
| `GET` | `/api/v1/equipment` | Lista equipos; admite el filtro `environmentId`. |
| `POST` | `/api/v1/equipment` | Registra un equipo. |
| `PATCH` | `/api/v1/equipment/:id` | Actualiza parcialmente un equipo. |
| `GET` | `/api/v1/incidents` | Consulta el historial de novedades. |
| `POST` | `/api/v1/incidents` | Reporta una novedad. |
| `PATCH` | `/api/v1/incidents/:id` | Actualiza el estado de una novedad. |
| `GET` | `/api/v1/dashboard/summary` | Consulta el resumen del dashboard. |

Las rutas todavía no conectadas a servicios responden `501` intencionalmente.

### Registro de préstamos

`POST /api/v1/loans` requiere un objeto JSON con todos estos campos:

```json
{
  "aula": "Lab 1",
  "numeroPC": 4,
  "nombreGuardaEntrega": "Ana",
  "instructorRecibe": "Luis"
}
```

`numeroPC` debe ser un número entero y los demás campos deben ser cadenas no vacías. Un payload inválido responde `400`.

## Respuestas comunes

- `GET /api/v1/health`: `200` con el estado `success`.
- Ruta inexistente: `404` con el mensaje `Ruta no encontrada.`
- Payload de préstamo inválido: `400` con el mensaje `Datos del préstamo inválidos.`
- JSON malformado: `400` con el mensaje `El cuerpo JSON está malformado.`
- Error inesperado: `500` con un mensaje genérico.

Cada solicitud se registra en la consola con el prefijo `[AUDIT SENA]`."
