# UI Kit — Sitio del realizador

Portada del sitio personal de Juan Alaimes / TRAMALATIERRA. Recreación de alta fidelidad del portfolio de un documentalista.

## Pantallas / secciones
- **SiteHeader** (`SiteChrome.jsx`) — barra sticky con logo, navegación e idioma.
- **Hero** (`Hero.jsx`) — portada a sangre con obra destacada, scrim, titular de afiche, tráiler.
- **WorkGrid** (`WorkGrid.jsx`) — filmografía en grilla, filtrable por tema (tierra/agua/monte/lucha/foto).
- **SiteFooter** (`SiteChrome.jsx`) — contacto, redes, eslogan.
- **Bio** — banda editorial sobre el autor (inline en `index.html`).

## Composición
Estas pantallas componen los primitivos del sistema (`Button`, `Badge`, `Tag`, `Card`, `IconButton`). No reimplementan primitivos.

## Imágenes
Los fotogramas son **placeholders duotono** (gradientes tierra/agua/monte con grano + scrim). Reemplazar por fotogramas reales del archivo de Juan.

## Interacción demostrada
Filtrado de la filmografía por tema mediante los chips `Tag`.
