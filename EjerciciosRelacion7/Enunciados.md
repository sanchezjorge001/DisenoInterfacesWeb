🚀 Ejercicio 1 — Menú hamburguesa básico (sin JS)

🎯 Objetivo
Crear un menú hamburguesa responsive sin usar JavaScript, únicamente con HTML y CSS, mediante un input checkbox y un label que actúe como botón.

📋 Instrucciones
Crea un archivo index.html con la estructura básica:
Un encabezado <header> con un logo, un input type="checkbox" y su label asociado con tres líneas (<span>).
Un <nav> con cuatro enlaces: Inicio, Servicios, Galería y Contacto.
Por defecto, el menú debe estar oculto en pantallas pequeñas.
Cuando el usuario marque el checkbox, el menú debe mostrarse.
En pantallas grandes (a partir de 1024px):
El menú debe mostrarse siempre visible en línea.
El icono hamburguesa debe ocultarse.
🧠 Cómo hacerlo con JavaScript (idea previa para el Ejercicio 2)
En el siguiente ejercicio usaremos JavaScript en lugar del “checkbox hack”. El flujo básico:

Selecciona .burger, #menu y .overlay.
Al hacer clic en .burger:
Alterna .is-open en el botón y en el menú.
Actualiza aria-expanded a true/false.
Quita/añade hidden en menú y overlay.
Cierra también al clic en overlay, al pulsar Esc o al hacer clic en un enlace del menú.
Esto da más control, transiciones suaves y mejor accesibilidad.

🚀 Ejercicio 2 — Menú hamburguesa con overlay y JavaScript

🎯 Objetivo
Crear un menú hamburguesa animado que se abra y cierre con JavaScript, mostrando un overlay oscuro detrás y una animación del icono (de tres líneas a una “X”).

📋 Instrucciones
index.html: logo, botón .burger, <nav id="menu"> con enlaces y <div class="overlay">.
styles.css:
Móvil: menú oculto, desliza desde la derecha; overlay semitransparente.
Escritorio (≥1024px): menú visible y horizontal; sin overlay ni botón.
menu.js:
Abre/cierra con el botón (clases .is-open/.is-active).
Cierra con overlay, con Escape y al navegar por un enlace.
Actualiza aria-expanded y sincroniza hidden.
Usa transiciones para suavizar.
🧩 Pistas
classList.toggle() y setAttribute() para aria-expanded.
Usa hidden para ocultar semánticamente mientras el menú está cerrado.
Respeta el focus y que sea usable con teclado.