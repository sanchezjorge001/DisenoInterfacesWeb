
# Ejercicio Práctico: Entendiendo el Sistema de Columnas en Bootstrap

## Objetivo
Crear un diseño web responsivo utilizando el sistema de cuadrícula de Bootstrap. Este ejercicio les ayudará a comprender cómo funciona el sistema de columnas y cómo pueden adaptarse a distintos tamaños de pantalla.

## Instrucciones

1. **Estructura HTML Básica**
   - Crea un archivo `index.html`.
   - Añade la estructura básica de HTML e incluye Bootstrap desde el CDN.

   ```html
   <!DOCTYPE html>
   <html lang="es">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Práctica de Sistema de Columnas</title>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
   </head>
   <body>

     <div class="container">
       <!-- Aquí irá el contenido -->
     </div>

     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
   </body>
   </html>
   ```

2. **Práctica con Columnas Responsivas**
   - Dentro del `div.container`, crea una `row` que contenga tres `div` con las siguientes clases:
     - En pantallas grandes (`lg`), cada columna debería ocupar 4 columnas (`col-lg-4`), para que estén en una sola fila.
     - En pantallas medianas (`md`), cada columna debería ocupar 6 columnas (`col-md-6`), para que se dividan en dos filas.
     - En pantallas pequeñas (`sm`), cada columna debería ocupar 12 columnas (`col-12`), para que cada columna ocupe una fila completa.

   - Cada columna debe incluir algo de contenido, como un texto o imagen para distinguirlas.

   ```html
   <div class="container">
     <div class="row">
       <div class="">
         Columna 1
       </div>
       <div class="">

         Columna 2
       </div>
       <div class="">

         Columna 3
       </div>
     </div>
   </div>
   ```

3. **Prueba el Diseño en Diferentes Dispositivos**
   - Abre el archivo `index.html` en tu navegador.
   - Cambia el tamaño de la ventana o usa las herramientas de desarrollo del navegador para ver cómo las columnas se adaptan en diferentes tamaños de pantalla (dispositivos grandes, medianos y pequeños).

## Resultado Esperado
- En dispositivos grandes: las tres columnas estarán en una sola fila.
- En dispositivos medianos: dos columnas estarán en la primera fila y una en la segunda.
- En dispositivos pequeños: cada columna ocupará toda la fila.

Este ejercicio les permitirá observar cómo funciona la cuadrícula de Bootstrap y cómo utilizar las clases de columnas para crear un diseño adaptable a diferentes tamaños de pantalla.
