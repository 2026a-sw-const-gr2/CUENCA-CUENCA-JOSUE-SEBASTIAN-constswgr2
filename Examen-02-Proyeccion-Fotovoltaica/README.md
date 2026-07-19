# Examen 02 — Proyección Fotovoltaica

## Información académica

- **Institución:** Escuela Politécnica Nacional
- **Facultad:** Facultad de Ingeniería de Sistemas
- **Materia:** Construcción y Evolución de Software
- **Estudiante:** Josué Cuenca
- **Caso asignado:** Proyección de Rendimiento Fotovoltaico
- **Arquitectura:** Monorepo administrado con Nx

## Descripción

Aplicación de extremo a extremo que calcula la producción energética de una instalación de paneles solares usando el área de los paneles, su porcentaje de eficiencia y las horas de sol pico.

El examen contiene:

- Backend desarrollado con NestJS.
- Frontend desarrollado con React y Vite.
- Librería TypeScript compartida.
- API pública v1 con resultados crudos.
- API segura v2 con resultados formateados.
- Validación local en el frontend.
- Seguridad mediante API Key.
- Documentación interactiva con Swagger.
- Pruebas automatizadas y compilación mediante Nx.

## Organización de la entrega

```text
Examen-02-Proyeccion-Fotovoltaica/
├── examen-monorepo/   Código y archivos completos del monorepo
├── video/      Video demostrativo del examen
└── README.md   Información y guía de ejecución
```

## Arquitectura del monorepo

```text
proyecto/
├── apps/
│   ├── api/       Backend NestJS
│   └── client/    Frontend React + Vite
├── libs/
│   └── shared/    Tipos, validaciones y formateadores compartidos
├── nx.json
├── package.json
└── tsconfig.base.json
```

Tanto el frontend como el backend importan directamente la librería compartida:

```typescript
import {
  formatSolarResult,
  validateSolarInput,
} from '@examen-monorepo/shared';
```

## Versiones del API

### API v1 — Pública

- **Endpoint:** `POST /api/v1/solar/calculate`
- No requiere autenticación.
- El backend devuelve resultados numéricos crudos.
- El frontend utiliza `libs/shared` para formatearlos.

### API v2 — Segura

- **Endpoint:** `POST /api/v2/solar/calculate`
- Requiere el encabezado `x-api-key`.
- La clave de demostración es: `epn-solar-2026`
- El backend utiliza `libs/shared` y devuelve resultados formateados.
- El frontend valida la estructura recibida utilizando la librería compartida.

## Requisitos

- Node.js 20
- npm 10 o superior
- Git
- Git LFS

## Instalación

Abre una terminal dentro de la carpeta `proyecto` y ejecuta:

```bash
npm install
```

## Ejecución completa

Para iniciar el backend y el frontend con un único comando de Nx:

```bash
npm run start:all
```

Servicios disponibles:

- **Frontend:** http://localhost:4200
- **API:** http://localhost:3000/api
- **Swagger:** http://localhost:3000/api/docs

## Pruebas y compilación

Pruebas de la librería compartida:

```bash
npx nx test @examen-monorepo/shared
```

Pruebas del frontend:

```bash
npx nx test @org/client
```

Compilación del backend y frontend:

```bash
npx nx run-many -t build
```

## Casos demostrados

1. Validación local con información incorrecta.
2. Consumo de la API v1 y formateo en el frontend.
3. Petición a la API v2 sin API Key y respuesta HTTP 401.
4. Consumo de la API v2 con una API Key válida.
5. Documentación de ambas versiones en Swagger.
6. Uso compartido de tipos, validaciones y formateadores.
7. Arranque del monorepo mediante un único comando Nx.

## Video

El video demostrativo está ubicado en:

```text
video/Examen02_Josue_Cuenca.mp4
```

El archivo de video se administra con Git LFS debido a su tamaño.