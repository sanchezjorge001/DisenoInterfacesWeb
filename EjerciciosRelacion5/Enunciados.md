🧩 Ejercicio 1 — Cuadrícula 3×3 y posicionamiento
🎯 Objetivo
Practicar la creación de una cuadrícula 3×3 con display: grid, el uso de grid-template-columns / rows, gap, y el posicionamiento manual de elementos con grid-column y grid-row.

🧠 Tareas
Crea una cuadrícula 3×3 con separación (gap) de 12px.
Coloca las 9 tarjetas (del 1 al 9) en la cuadrícula.
Posiciona manualmente:
La tarjeta 1 debe ocupar 2 columnas (de la 1 a la 3 sin incluir la 3).
La tarjeta 5 debe ocupar 2 filas.
La tarjeta 9 debe centrarse horizontal y verticalmente en su celda.
Alinea el contenido de la cuadrícula usando justify-items y align-items.
Aplica un color de fondo distinto para diferenciar las tarjetas.

🧩 Ejercicio 2 — Galería responsive con auto-fit y minmax
🎯 Objetivo
Crear una galería responsive que ajuste el número de columnas automáticamente usando repeat(auto-fit, minmax()).
Practicar gap, adaptabilidad y efectos hover.

🧠 Tareas
Crea una cuadrícula que, en pantallas pequeñas, muestre 1–2 columnas y, en grandes, tantas como quepan.
Usa repeat(auto-fit, minmax(200px, 1fr)).
Añade un gap de 16px y bordes/sombreado a las tarjetas.
Al pasar el ratón (hover), eleva ligeramente cada tarjeta con transform y box-shadow.


🧩 Ejercicio 3 — Layout de página con áreas de Grid
🎯 Objetivo
Construir un layout completo de página usando grid-template-areas, con cabecera, navegación, contenido principal, barra lateral y pie de página.
El layout debe cambiar de disposición según el ancho de pantalla.

🧠 Disposición deseada
📱 Móvil (≤ 640px)
header
nav
main
aside
footer
💻 Escritorio (≥ 1024px)
header header
nav    main
nav    aside
footer footer
🧠 Tareas
Define las áreas: header, nav, main, aside, footer.
Crea el layout móvil por defecto (mobile-first).
A partir de 1024px, aplica la cuadrícula de 2 columnas con las áreas indicadas.
Da estilos básicos a cada bloque para distinguirlos visualmente.