# UI Kit — Página de documental

Vista de un proyecto/documental individual. Reutiliza el chrome del sitio (`SiteHeader`, `SiteFooter`) y agrega superficies propias de video.

## Pantallas / secciones
- **PlayerHero** (`PlayerHero.jsx`) — reproductor con fotograma, botón de play, barra de control y timecode.
- **Ficha** (`Ficha.jsx`) — sinopsis editorial en serif + ficha técnica en mono (dirección, año, formato…).
- **Stills** (`Ficha.jsx`) — grilla de fotogramas (placeholders duotono).
- Overlay de reproducción simulada al pulsar play.

## Composición
Reutiliza `SiteHeader`/`SiteFooter` del kit *sitio* y los primitivos `Badge`, `Button`, `IconButton`. Demuestra composición entre kits.

## Imágenes
Fotogramas = placeholders. Reemplazar por fotogramas reales.
