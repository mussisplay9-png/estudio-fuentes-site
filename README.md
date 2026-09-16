# Estudio Fuentes — sitio

Astro + Tailwind (v4), bilingüe ES/EN. Implementado a partir del handoff de diseño en
`design_handoff_estudiofuentes/README.md` ("Modernist" design system).

## Estructura

- `src/data/site.ts` — todo el copy ES/EN en un solo lugar.
- `src/lib/whatsapp.ts` — arma el link de WhatsApp (con fallback a mailto).
- `src/layouts/Layout.astro` — `<head>`, SEO, hreflang, JSON-LD.
- `src/components/` — un componente por sección (Nav, Hero, Stats, Services, Process,
  About, Banner, Contact, Footer), parametrizados por idioma.
- `src/pages/index.astro` → `/` (español, default). `src/pages/en/index.astro` → `/en`.
- `src/styles/global.css` — tokens del design system como `@theme` de Tailwind v4,
  keyframes y utilidades de reveal-on-scroll.

## Comandos

```sh
npm install
npm run dev       # localhost:4321
npm run build
npm run astro check
```

## Pendiente antes de salir a producción

1. **Formulario de contacto.** Sin `PUBLIC_FORM_ENDPOINT` configurado (ver `.env.example`),
   el form cae a un `mailto:` prellenado. Para un envío real, dar de alta un endpoint
   compatible (Formspree, Web3Forms, o una función propia) y setear la variable.
2. **Foto del estudio.** No hay imagen provista; se muestra un placeholder. Pasarle un
   `photoSrc` a `<About>` (en ambas páginas) cuando haya una foto real, servida en
   `public/` o vía CDN, en blanco y negro.
3. **Analítica.** No se agregó ningún proveedor todavía (Plausible/Umami/GA4 quedan a elección).
4. **Dominio y despliegue.** `astro.config.mjs` asume `https://estudiofuentes.ar` como `site`
   (usado por el sitemap y las URLs canónicas) — actualizar si cambia.
5. **OG image.** No se generó una imagen para redes sociales.
6. El número de WhatsApp completo (`5491167581224`) y el email de contacto están en
   `src/data/site.ts`; confirmar que sean correctos antes de publicar.
