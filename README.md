# jorgezapata.es

Hub personal de Jorge Zapata sobre software, IA, automatización y tecnología.

## Stack

- Next.js 15 (Pages Router)
- React 19
- TypeScript
- Tailwind CSS 4
- API Routes
- Neon Postgres para contadores de descargas
- Google Analytics y Metricool

## Desarrollo local

```bash
npm install
npm run dev
```

La web estará disponible en `http://localhost:3000`.

## Variables de entorno

### Contacto

```env
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=
```

### Descargas

```env
DATABASE_URL=
```

`DATABASE_URL` debe contener la connection string de PostgreSQL de Neon. No debe versionarse ninguna credencial.

Antes de activar descargas, ejecuta `db/schema.sql` una vez en la base de datos.

## Añadir un recurso

Los recursos viven en `data/resources.ts`.

Para publicar uno nuevo:

1. añade sus metadatos al array `resources`;
2. define un `slug` único;
3. añade `downloadUrl` con el destino real;
4. cambia `available` a `true` cuando esté listo para publicar;
5. añade imágenes o capturas en `public/` cuando sean necesarias.

La descarga pública siempre pasa por `/api/download/[slug]`. La API resuelve el destino desde `data/resources.ts`, incrementa el contador en PostgreSQL y redirige después al destino configurado.

## Añadir un proyecto

Los proyectos viven en `data/projects.ts`. Añadir uno nuevo no requiere modificar la home.

## Validación

```bash
npm run build
```

La rama `feature/tech-hub-v1` incluye una validación temporal de GitHub Actions para mantener `package-lock.json` sincronizado y comprobar el build durante esta implementación.
