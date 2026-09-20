# Sitio Gracia & Vida Huechuraba

Página estática, sin instalar nada. Se publica con GitHub Pages.

## Cómo actualizar
Todo se edita en **`config.js`**:
- **Evento nuevo:** copia la plantilla comentada en `eventos`, cambia fecha y horas. Los eventos vencidos se ocultan solos.
- **Horarios semanales:** lista `reuniones` (día 0 = domingo … 6 = sábado).
- **Enlaces:** listas dentro de `secciones`.

## Probar una fecha
`index.html?ahora=2026-09-05T15:30` simula esa fecha y hora (hora de Chile).
Conviene abrirlo con un servidor (`python -m http.server`) o directamente en GitHub Pages.

## Archivos
`index.html` (diseño y lógica) · `config.js` (datos) · `logo-h.webp/png` (logo de portada) · `logo.png`, `favicon.png`, `og-image.jpg` (íconos y vista previa al compartir).

## Por ajustar
Las URLs `og:url` y `og:image` de `index.html` asumen `https://steamcraft14-glitch.github.io/gracia-y-vida/`.
