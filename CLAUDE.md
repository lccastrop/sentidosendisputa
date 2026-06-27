# CLAUDE.md — Sentidos en Disputa (SED)

Este archivo da contexto a Claude Code para que pueda colaborar en la web del proyecto de forma coherente con su universo intelectual y visual.

---

## El proyecto

**Sentidos en Disputa (SED)** es una plataforma híbrida académica-pública que analiza la cultura política en América Latina — específicamente el desplazamiento de los valores de los sectores populares por el capitalismo neoliberal y el avance cultural de la derecha. Su propósito: *"cualificar, en niveles teórico y práctico, la discusión en torno a la cultura política, con el objetivo de combatir el avance de la derecha neoliberal."*

Combina sitio web, blog, Instagram, reels y escritura académica.

---

## Autor

**Camilo** — investigador en comunicación política y estudios culturales (Colombia/México). Maestría en Comunicación, UNAM (Posgrado en Ciencias Políticas y Sociales). Tesis: *"Estéticas Beligerantes y Cultura Insurgente"* — sobre cómo las estéticas beligerantes movilizan emociones en jóvenes en territorios de conflicto (Arauca, Colombia), con metodología fenomenológico-hermenéutica y etnográfica.

Referencias teóricas clave: Gramsci, Stuart Hall, Chantal Mouffe, Nancy Fraser, Jesús Martín-Barbero, Maristella Svampa, Rancière, Galtung, Dussel.

---

## Stack técnico

- HTML/CSS/JS estático — sin frameworks
- Hospedaje: Vercel / Netlify / GitHub Pages
- Dominio: Cloudflare o Namecheap
- Editor: VS Code con Claude Code

---

## Sitemap

1. `index.html` — Inicio
2. `pages/publicaciones.html` — Publicaciones
3. `pages/formacion.html` — Formación
4. `pages/contacto.html` — Contacto

---

## Identidad visual

### Paleta
| Nombre | Hex | Uso |
|---|---|---|
| Rojo SED | `#B5151F` | Acento principal, énfasis, CTA |
| Negro SED | `#1A1714` | Fondo oscuro, texto sobre claro |
| Crema SED | `#EFE7D8` | Fondo claro, texto sobre oscuro |

La paleta es **rojinegra** — referencia directa a las estéticas insurgentes y anarco-socialistas de América Latina.

### Tipografía
| Rol | Familia | Peso |
|---|---|---|
| Display / Títulos | Libre Baskerville | 700 |
| Cuerpo / Lectura | Source Serif 4 | 400 / 600 |
| Metadata / Código | IBM Plex Mono | 400 |

### Estética general
- Inspiración en stencil, serigrafía, graffiti político, cartelería insurgente
- Dos siluetas de rostro estilo stencil como elemento visual central
- Anti-genérico, anti-decorativo — cada decisión visual debe estar anclada en el contenido político-cultural del proyecto
- Rechazar cualquier cosa que suene a "branding corporativo" o estética de startup

---

## Principios editoriales y de diseño

- Camilo rechaza opciones que se sientan genéricas o desconectadas del universo intelectual del proyecto
- Tipografías rechazadas previamente: Oswald (demasiado poster), Fraunces (demasiado redonda), Playfair Display (demasiado decorativa)
- Todo debe evocar el registro insurgente, anti-elitista, latinoamericano del proyecto
- El sitio es a la vez herramienta de divulgación académica y plataforma de intervención política-cultural

---

## Notas para Claude Code

- Trabajar siempre en español salvo indicación contraria
- Priorizar legibilidad y coherencia con la identidad visual sobre soluciones técnicamente elegantes pero visualmente neutras
- Antes de proponer cambios de diseño, verificar que sean consistentes con la paleta y tipografías definidas
- El sitio debe poder ser leído y navegado sin JS — el JS es mejora progresiva
- No introducir dependencias externas (npm, bundlers) sin consultarlo — el stack es intencionalmente simple
