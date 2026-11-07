"# ControlLabs API

API REST de ControlLabs para la gestión de préstamos, usuarios, ambientes, equipos y novedades. Está construida con Express y TypeScript. Los préstamos usan la capa de servicios y un repositorio temporal en memoria; los demás recursos responden `501 Not Implemented` hasta conectar sus servicios.

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

`POST /api/v1/loans` requiere exactamente estos campos:

```json
{
  "roomId": "d3eebc99-9c0b-4ef8-bb6d-6bb9bd380d44",
  "instructorId": "c2eebc99-9c0b-4ef8-bb6d-6bb9bd380c33",
  "guardaId": "b1eebc99-9c0b-4ef8-bb6d-6bb9bd380b22",
  "numeroPc": 1
}
```

Los tres identificadores deben ser UUID y `numeroPc` un entero positivo. Los campos adicionales no están permitidos. `guardaId` se envía en el body solo para esta práctica; con autenticación debe obtenerse de la identidad verificada.

Los préstamos se guardan en memoria: desaparecen al detener o reiniciar el servidor. El servicio permite consultarlos por `roomId` y aceptar una sola vez cada préstamo. No se requiere PostgreSQL para ejecutar esta sesión. El modelo relacional de referencia está en [`database/controllabs.sql`](./database/controllabs.sql); no se carga automáticamente.

La ruta `GET /__test/error` provoca un error `500` para pruebas y solo está disponible cuando `NODE_ENV` no es `production`.

## Respuestas comunes

- `GET /api/v1/health`: `200` con el estado `success`.
- Ruta inexistente: `404` con el mensaje `Ruta no encontrada.`
- Payload de préstamo inválido: `400` con el mensaje `Datos del préstamo inválidos.`
- Reglas de negocio incumplidas: `400` con el código `VALIDATION_ERROR`.
- Préstamo inexistente: `404` con el código `NOT_FOUND`.
- Intento de aceptar dos veces el mismo préstamo: `409` con el código `CONFLICT`.
- JSON malformado: `400` con el mensaje `El cuerpo JSON está malformado.`
- Error inesperado: `500` con un mensaje genérico.

Cada solicitud se registra en la consola con el prefijo `[AUDIT SENA]`."
