# Sistema de Gestión de Cafetería

## Descripción General

Sistema CRUD desarrollado para la gestión de productos de cafetería, permitiendo crear, consultar, actualizar, buscar y eliminar productos mediante una interfaz web conectada a un backend NestJS.

El sistema fue evolucionado aplicando distintos tipos de mantenimiento de software con el objetivo de mejorar la estabilidad, seguridad, mantenibilidad y trazabilidad de la aplicación.

Además, el sistema registra eventos de auditoría mediante un Event Manager implementado en NestJS, permitiendo monitorear las operaciones realizadas sobre el CRUD.

---

# Tecnologías Utilizadas

## Frontend

* HTML5
* CSS3
* JavaScript Vanilla

## Backend

* NestJS
* TypeScript
* SQLite

## Seguridad y Auditoría

* API Key
* Logs estructurados
* Registro de eventos CRUD

---

# Funcionalidades del Sistema

El sistema permite:

* Crear productos
* Listar productos
* Buscar productos dinámicamente
* Editar productos
* Eliminar productos con confirmación
* Validar entradas de usuario
* Sanitizar entradas contra inyección HTML/XSS
* Registrar eventos de auditoría
* Consultar eventos almacenados

---

# Arquitectura del Sistema

El proyecto está dividido en dos módulos principales:

## 1. Frontend CRUD

Responsable de la interfaz de usuario y manejo de productos.

Ubicación:

```text
cafeteria-crud/
```

## 2. Backend Event Manager

Responsable de:

* Recepción de eventos
* Persistencia en SQLite
* Logs estructurados
* Seguridad mediante API Key
* Consulta de auditoría

Ubicación:

```text
epn-event-manager/
```

---

# Seguridad

Los endpoints del backend están protegidos mediante API Key.

Header requerido:

```text
x-epn-key: FIS-EPN-2026
```

Esto evita el acceso no autorizado a los endpoints del sistema.

---

# Ejecución del Proyecto

## Backend

Ingresar a:

```bash
cd epn-event-manager
```

Instalar dependencias:

```bash
npm install
```

Ejecutar servidor:

```bash
npm run start:dev
```

Backend disponible en:

```text
http://localhost:3000
```

---

## Frontend

Abrir:

```text
cafeteria-crud/index.html
```

O ejecutar con Live Server en VS Code.

---

# Endpoints Disponibles

## Eventos

```text
POST /events
GET /events
GET /events/source/:source
GET /events/entity/:entity
```

## Monitoreo

```text
GET /health
GET /stats
```

---

# Tipos de Eventos Registrados

El sistema registra automáticamente:

```text
CREATE
UPDATE
QUERY
DELETE
```

Cada evento almacena:

* tipo de operación
* entidad afectada
* descripción
* fecha y hora
* origen del evento

---

# Mantenimientos Aplicados

## 1. Mantenimiento Correctivo

### Problemas encontrados

El sistema inicial presentaba errores funcionales:

* El precio no aceptaba correctamente valores decimales.
* El CRUD podía fallar con entradas inválidas.
* Existían inconsistencias al registrar eventos.
* El sistema permitía datos incorrectos.

### Correcciones realizadas

Se implementaron correcciones en:

* manejo de precios decimales
* validación de formularios
* flujo de creación y actualización
* envío correcto de eventos al backend

### Ejemplo implementado

```javascript
if(precio <= 0){
    alert("El precio debe ser mayor a 0");
    return;
}
```

Además, se agregó:

```html
step="0.01"
```

para permitir precios decimales correctamente.

---

## 2. Mantenimiento Adaptativo

El sistema fue adaptado para integrarse con un entorno externo mediante API REST.

### Adaptaciones realizadas

* Integración con Event Manager
* Comunicación HTTP mediante fetch()
* Uso de async/await
* Envío de datos JSON
* Protección mediante API Key
* Configuración externa usando variables de entorno (.env)

### Integración implementada

```javascript
fetch("http://localhost:3000/events")
```

Esto permitió adaptar el CRUD a nuevas reglas y requisitos del entorno.

---

## 3. Mantenimiento Perfectivo

Se realizaron mejoras para aumentar la mantenibilidad y experiencia del usuario.

### Mejoras implementadas

* Buscador dinámico de productos
* Logs estructurados
* Mejor organización del código
* Mayor trazabilidad de eventos
* Documentación técnica del sistema
* Mejor experiencia de uso

### Buscador dinámico

```javascript
searchInput.addEventListener("input", () => {
    renderProducts();
});
```

---

## 4. Mantenimiento Preventivo

Se implementaron mecanismos defensivos para evitar errores futuros y vulnerabilidades.

### Medidas preventivas

* Validación de nombres vacíos
* Validación de precios inválidos
* Validación de stock negativo
* Confirmación antes de eliminar
* Sanitización básica contra XSS
* Manejo defensivo de entradas

### Validaciones implementadas

```javascript
if(nombre.trim() === ""){
    alert("El nombre es obligatorio");
    return;
}
```

```javascript
if(stock < 0){
    alert("El stock no puede ser negativo");
    return;
}
```

---

# Logs y Auditoría

El backend registra eventos estructurados para auditoría y trazabilidad.

Los logs permiten:

* monitorear operaciones
* detectar errores
* validar funcionamiento
* revisar historial CRUD

---

# Evidencias Funcionales

El sistema permite demostrar:

* Creación de productos
* Búsqueda dinámica
* Actualización de productos
* Eliminación de productos
* Registro de eventos
* Comunicación frontend-backend
* Protección mediante API Key

---

# Prueba de Vida

La demostración funcional incluye:

1. CRUD funcionando correctamente.
2. Backend NestJS en ejecución.
3. Registro de eventos CREATE.
4. Registro de eventos UPDATE.
5. Registro de eventos QUERY.
6. Registro de eventos DELETE.
7. Consulta de eventos desde `/events`.

---

# Conclusión

El sistema evolucionó desde un CRUD básico hacia un sistema más robusto, seguro y mantenible mediante la aplicación de mantenimientos correctivos, adaptativos, perfectivos y preventivos.

La integración con el Event Manager permitió incorporar trazabilidad y auditoría, mejorando significativamente la calidad del sistema.
