📚 Práctica – Imágenes y Medios Responsivos (4 ejercicios)
Este set repasa imágenes fluidas, srcset + sizes, densidades 1x/2x y medios embebidos (video/iframe).

🧩 Ejercicio 1 — Imágenes fluidas sin distorsión
Objetivo: Evitar desbordes y mantener la relación de aspecto usando max-width: 100% y height: auto.

Tareas

Crea una cuadrícula simple de tarjetas con imagen y título.
Haz que todas las imágenes sean fluidas (no deben desbordar su contenedor en móvil).
Asegura que no se distorsionen al cambiar el ancho de la página.
Añade un borde y sombra ligera a cada tarjeta.


🧩 Ejercicio 2 — srcset + sizes (descriptores por ancho)
Objetivo: Servir la imagen óptima según el ancho del viewport/columna usando descriptores w y sizes.

Tareas

Muestra una misma foto en distintas tarjetas.
Utiliza srcset con tres anchos: 480w, 768w, 1024w.
Define sizes para que:
≤ 600px → 100vw
601–1023px → 50vw
≥ 1024px → 33vw
Verifica en Network que el navegador descarga el archivo adecuado.


🧩 Ejercicio 3 — Densidad de píxeles (1x/2x) + picture (art direction)
Objetivo: Mejorar nitidez en pantallas Retina con descriptores de densidad (1x, 2x) y cambiar composición con picture.

Tareas

Implementa un <img> con srcset usando 1x/2x.
Crea un hero con <picture> que muestre:
Imagen vertical en móviles.
Imagen horizontal en escritorio (≥ 1024px).
Asegura que el hero cubra el ancho y mantenga proporción con object-fit: cover.


🧩 Ejercicio 4 — Medios embebidos responsivos (iframe + video)
Objetivo: Incrustar YouTube (iframe) y un <video> local de forma responsiva, manteniendo 16:9.

Tareas

Crea un contenedor .media con técnica de padding-bottom: 56.25% y posicionamiento absoluto.
Mete dentro un <iframe> de YouTube. Debe adaptarse sin desbordes.
Repite con un <video controls> y comprueba que respeta la relación de aspecto.