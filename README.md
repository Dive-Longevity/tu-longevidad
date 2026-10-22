# Tú Longevidad

Revista editorial de longevidad: sueño, alimentación, movimiento, hábitos y análisis de productos, explicados con estudios y no con promesas.

Sitio estático con [Astro](https://astro.build), publicado en Vercel. Diseño basado en el sistema «Consulta Abierta»: lino y espresso, Albert Sans + DM Mono, cristal esmerilado, fotos en marcos muy redondeados y cada dato con su fuente.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Publicar un artículo

1. Crea un archivo `.mdx` en `src/content/articulos/`. El nombre del archivo es la URL (`mi-articulo.mdx` → `/articulos/mi-articulo`).
2. Rellena el frontmatter:

```yaml
---
title: "Te despiertas a las 3:00."          # afirmación, en una frase
remate: "No es mala suerte. Es la arquitectura del sueño."  # opcional
description: "Resumen de 1–2 frases para tarjetas y SEO."
serie: sueno            # sueno | alimentacion | movimiento | habitos | analisis
formato: "Lo que pasa a las 3:00"   # opcional, etiqueta sobre la foto
pubDate: 2026-10-20
image: /img/mi-foto.jpg  # opcional; foto real en public/img/. Sin ella se ve el hueco cálido
imageAlt: "Descripción de la foto"
featured: false          # true = destacado en portada
draft: false             # true = no se publica
fuentes:
  - label: "Autor et al. Título. Revista, año."
    url: https://doi.org/...   # opcional
---
```

3. Haz `git push` a `main`: Vercel lo publica solo en uno o dos minutos.

### Bloques disponibles dentro del artículo

No hace falta importarlos.

| Bloque | Para qué |
| --- | --- |
| `<DatoClave kicker="Mortalidad" value="−47%" text="…" source="…" serie="movimiento" />` | La cifra del estudio, con fuente |
| `<Protocolo title="…" kicker="Esta noche" steps={["…", "…"]} />` | 3–4 pasos para hacer hoy |
| `<MitoODato mito="…" dato="…" fuente="…" />` | Desmontar una creencia |
| `<PreguntaConsulta pregunta="…" />` | La duda de una lectora, sobre foto |
| `<DiagramaHUD factores={["Cortisol", "Luz", …]} title="…" />` | Mecanismo con 4–6 factores |
| `<Veredicto producto="…" nivel="moderada" si={[…]} no={[…]} fuente="…" />` | Serie Análisis: evidencia de un tipo de producto |

## Reglas editoriales (resumen)

- Cada dato lleva su fuente en pantalla y se expresa como asociación («se asoció con»), nunca como promesa.
- Titulares en mayúsculas (lo hace el CSS), en pares de afirmación y remate.
- Sin dosis de suplementos ni pautas de tratamiento: «háblalo con tu médico».
- Fotografía real (personas de 40 a 60 años, luz natural, b-roll de casa). Nunca generada, nunca flores ni hojas.
- Paleta solo de marrones, beiges y blancos cálidos. Sin emojis.

## Configuración en Vercel

| Variable | Para qué |
| --- | --- |
| `SITE_URL` | URL pública (p. ej. `https://tulongevidad.com`) para canonical, sitemap y RSS |
| `PUBLIC_NEWSLETTER_ACTION` | URL del formulario de tu proveedor de email; sin ella el formulario aparece desactivado |

## Estructura

```
src/
  content/articulos/   artículos en MDX
  components/          bloques editoriales (DatoClave, Protocolo…)
  layouts/Base.astro   cabecera, pie, SEO
  pages/               portada, artículo, categoría, archivo, método, RSS
  styles/tokens.css    tokens del sistema de diseño (claro y oscuro)
  lib/site.ts          nombre, series y textos globales
```
