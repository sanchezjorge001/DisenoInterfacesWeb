<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <!-- Meta para diseño responsivo -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Guía de ejercicios HTML/CSS</title>
  <style>
    /* =======================================
       1) Base Mobile-First
       ======================================= */
    html {
      font-size: 16px; /* 1rem = 16px */
    }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      line-height: 1.5;
      background-color: #fff;
      color: #111;
    }
    /* Contenedor fluido */
    .container {
      width: 90%; /* ancho relativo */
      max-width: 1200px; /* límite máximo */
      margin: 0 auto; /* centra el contenido */
    }

    /* =======================================
       2 Tipografía y espaciados
       ======================================= */
    h1, h2, h3, p {
      margin: 0 0 1rem 0;
    }
    p {
      font-size: 1rem; /* 16px */
    }
    h1 {
      font-size: 2rem; /* 32px en móvil */
    }
    @media (min-width: 1024px) {
      h1 {
        font-size: 3rem; /* 48px en escritorio */
      }
    }

    /* =======================================
       3 Imágenes responsivas
       ======================================= */
    img {
      max-width: 100%; /* no excede contenedor */
      height: auto; /* mantiene proporción */
      display: block;
    }

    /* =======================================
       4 Hero con <picture> (Art direction)
       ======================================= */
    /* Se hace directamente en HTML con <picture> */

    /* =======================================
       5 Grid responsivo (proyectos, carta, agenda)
       ======================================= */
    .grid {
      display: grid;
      gap: 1rem; /* espacio entre elementos */
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    /* Grid con áreas (ejemplo carta de restaurante o agenda) */
    .grid-areas {
      display: grid;
      gap: 1rem;
      grid-template-areas:
        "entrantes"
        "principales"
        "postres";
    }
    @media (min-width: 1024px) {
      .grid-areas {
        grid-template-areas: "entrantes principales postres";
      }
    }

    /* =======================================
       6 Videos e iframes responsivos
       ======================================= */
    .video-container {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;
    }
    .video-container iframe,
    .video-container video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    /* =======================================
       7 Menú tipo hamburguesa sin JS
       ======================================= */
    /* Usando checkbox y label */
    .burger-checkbox {
      display: none; /* oculto */
    }
    .burger-label {
      display: block;
      width: 30px;
      height: 30px;
      cursor: pointer;
      position: relative;
    }
    .burger-label span {
      display: block;
      height: 4px;
      background: black;
      margin: 5px 0;
      border-radius: 2px;
      transition: all 0.3s ease;
    }
    /* Menú oculto por defecto */
    .menu {
      display: none;
    }
    /* Mostrar menú al activar checkbox */
    .burger-checkbox:checked + .burger-label + .menu {
      display: block;
    }
    /* Menú en escritorio siempre visible */
    @media (min-width: 1024px) {
      .menu {
        display: flex !important;
      }
    }

    /* =======================================
       8 Modo oscuro (opcional)
       ======================================= */
    @media (prefers-color-scheme: dark) {
      body {
        background-color: #111;
        color: #eee;
      }
      .burger-label span {
        background-color: #eee;
      }
    }

  </style>
</head>
<body>

  <!-- =======================================
       Hero con <picture> (art direction)
       ======================================= -->
  <picture>
    <!-- Desktop >=1024px -->
    <source media="(min-width:1024px)" srcset="hero-desktop.jpg">
    <!-- Imagen por defecto (móvil) -->
    <img src="hero-mobile.jpg" alt="Hero Imagen">
  </picture>

  <!-- =======================================
       Grid de proyectos ejemplo
       ======================================= -->
  <div class="grid container">
    <img src="project1-small.jpg"
         srcset="project1-large.jpg 1024w, project1-medium.jpg 768w, project1-small.jpg 480w"
         sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
         alt="Proyecto 1">
    <img src="project2-small.jpg"
         srcset="project2-large.jpg 1024w, project2-medium.jpg 768w, project2-small.jpg 480w"
         sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
         alt="Proyecto 2">
    <img src="project3-small.jpg"
         srcset="project3-large.jpg 1024w, project3-medium.jpg 768w, project3-small.jpg 480w"
         sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
         alt="Proyecto 3">
  </div>

  <!-- =======================================
       Video responsivo
       ======================================= -->
  <div class="video-container">
    <video controls>
      <source src="video.mp4" type="video/mp4">
      Tu navegador no soporta video.
    </video>
  </div>

  <!-- =======================================
       Menú hamburguesa sin JS
       ======================================= -->
  <input type="checkbox" id="burger" class="burger-checkbox">
  <label for="burger" class="burger-label">
    <span></span>
    <span></span>
    <span></span>
  </label>
  <nav class="menu">
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Proyectos</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>

  <!-- =======================================
       Mapa responsive
       ======================================= -->
  <div class="video-container">
    <iframe 
      src="https://www.google.com/maps/embed?pb=..."
      frameborder="0"
      allowfullscreen
      aria-hidden="false"
      tabindex="0">
    </iframe>
  </div>

</body>
</html>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guía Completa - Diseño Responsive con CSS</title>
  <style>
    /* ============================================
       GUÍA COMPLETA: DISEÑO RESPONSIVE CON CSS
       Unidad Didáctica 1
    ============================================ */

    /* --------------------------------------------
       1. RESET BÁSICO
    -------------------------------------------- */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* --------------------------------------------
       2. UNIDADES RELATIVAS VS ABSOLUTAS
    -------------------------------------------- */
    
    /* ABSOLUTAS (px) - Tamaño fijo */
    .ejemplo-pixels {
      font-size: 20px;
      width: 300px;
      /* NO se adapta al dispositivo */
    }

    /* RELATIVAS - Se adaptan al contexto */
    
    /* em - Relativo al padre */
    .ejemplo-em {
      font-size: 1.5em; /* 1.5 veces el tamaño del padre */
    }

    /* rem - Relativo al elemento raíz (html) */
    html {
      font-size: 16px; /* Base: 1rem = 16px */
    }
    .ejemplo-rem {
      font-size: 2rem; /* 32px (2 × 16px) */
      padding: 1rem; /* 16px */
    }

    /* % - Porcentaje del contenedor */
    .ejemplo-porcentaje {
      width: 80%; /* 80% del ancho del padre */
    }

    /* vw/vh - Porcentaje del viewport */
    .ejemplo-viewport {
      width: 50vw; /* 50% del ancho de la ventana */
      height: 100vh; /* 100% del alto de la ventana */
    }

    /* --------------------------------------------
       3. MEDIA QUERIES - BREAKPOINTS COMUNES
    -------------------------------------------- */

    /* ESTRATEGIA MOBILE-FIRST */
    /* Estilos base para móviles (< 480px) */
    body {
      font-size: 14px;
      padding: 10px;
    }

    /* Tablets (481px - 768px) */
    @media only screen and (min-width: 481px) {
      body {
        font-size: 16px;
        padding: 15px;
      }
    }

    /* Escritorio (769px+) */
    @media only screen and (min-width: 769px) {
      body {
        font-size: 18px;
        padding: 20px;
      }
    }

    /* OTRAS CARACTERÍSTICAS EVALUABLES */
    
    /* Orientación horizontal */
    @media (orientation: landscape) {
      /* Estilos para modo horizontal */
    }

    /* Orientación vertical */
    @media (orientation: portrait) {
      /* Estilos para modo vertical */
    }

    /* Modo oscuro */
    @media (prefers-color-scheme: dark) {
      /* Estilos para tema oscuro */
    }

    /* Alta resolución */
    @media (min-resolution: 300dpi) {
      /* Estilos para pantallas Retina */
    }

    /* --------------------------------------------
       4. FLEXBOX - DISEÑO UNIDIMENSIONAL
    -------------------------------------------- */

    .flex-container {
      display: flex;
      
      /* Dirección del eje principal */
      flex-direction: row; /* row | row-reverse | column | column-reverse */
      
      /* Alineación en el eje principal (horizontal si row) */
      justify-content: flex-start; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
      
      /* Alineación en el eje transversal (vertical si row) */
      align-items: stretch; /* stretch | flex-start | flex-end | center | baseline */
      
      /* Permite que los items se envuelvan en múltiples líneas */
      flex-wrap: wrap; /* nowrap | wrap | wrap-reverse */
      
      /* Espacio entre items */
      gap: 10px;
    }

    .flex-item {
      /* El item puede crecer para llenar espacio */
      flex-grow: 1; /* 0 = no crece, 1+ = puede crecer */
      
      /* El item puede encogerse si es necesario */
      flex-shrink: 1; /* 0 = no encoge, 1+ = puede encoger */
      
      /* Tamaño base del item antes de distribuir espacio */
      flex-basis: auto; /* auto | valor específico */
      
      /* Shorthand: flex-grow flex-shrink flex-basis */
      flex: 1 1 auto;
    }

    /* EJEMPLO PRÁCTICO: 3 columnas responsivas */
    .columnas-flex {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .columna {
      flex: 1 1 100%; /* En móvil: 100% ancho */
      background: #f0f0f0;
      padding: 20px;
    }

    @media (min-width: 768px) {
      .columna {
        flex: 1 1 33.33%; /* En escritorio: 3 columnas */
      }
    }

    /* --------------------------------------------
       5. CSS GRID - DISEÑO BIDIMENSIONAL
    -------------------------------------------- */

    .grid-container {
      display: grid;
      
      /* Define columnas */
      grid-template-columns: 1fr 2fr 1fr; /* 3 columnas, la del medio es el doble */
      /* Otras opciones:
         repeat(3, 1fr) - 3 columnas iguales
         100px auto 200px - tamaños específicos
         minmax(100px, 1fr) - mínimo y máximo */
      
      /* Define filas */
      grid-template-rows: auto 100px; /* 2 filas */
      
      /* Espacio entre celdas */
      gap: 20px; /* row-gap y column-gap también disponibles */
      
      /* Define áreas con nombres */
      grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    }

    /* Items del grid */
    .grid-item {
      /* Posiciona el item en columnas específicas */
      grid-column: 1 / 3; /* Desde línea 1 hasta línea 3 (2 columnas) */
      /* También: grid-column: span 2; - ocupa 2 columnas */
      
      /* Posiciona el item en filas específicas */
      grid-row: 1 / 2; /* Desde línea 1 hasta línea 2 (1 fila) */
    }

    /* Usando áreas nombradas */
    .header { grid-area: header; }
    .sidebar { grid-area: sidebar; }
    .main { grid-area: main; }
    .footer { grid-area: footer; }

    /* EJEMPLO PRÁCTICO: Grid responsivo */
    .galeria-grid {
      display: grid;
      grid-template-columns: 1fr; /* Móvil: 1 columna */
      gap: 15px;
    }

    @media (min-width: 768px) {
      .galeria-grid {
        grid-template-columns: repeat(3, 1fr); /* Escritorio: 3 columnas */
      }
    }

    /* --------------------------------------------
       6. IMÁGENES RESPONSIVAS
    -------------------------------------------- */

    /* Imágenes fluidas - SE ADAPTAN AL CONTENEDOR */
    img {
      max-width: 100%; /* Nunca excede el ancho del contenedor */
      height: auto; /* Mantiene proporción original */
      display: block; /* Elimina espacio inferior */
    }

    /* --------------------------------------------
       7. VIDEOS E IFRAMES RESPONSIVOS
    -------------------------------------------- */

    /* Contenedor para mantener relación de aspecto 16:9 */
    .video-container {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%; /* 16:9 = 9/16 = 0.5625 = 56.25% */
      height: 0;
      overflow: hidden;
    }

    .video-container iframe,
    .video-container video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    /* Para relación 4:3 usar padding-bottom: 75% */

    /* --------------------------------------------
       8. NAVEGACIÓN MÓVIL - MENÚ HAMBURGUESA
    -------------------------------------------- */

    .menu-icon {
      width: 30px;
      height: 30px;
      cursor: pointer;
      display: block;
    }

    .menu-icon span {
      display: block;
      height: 4px;
      background: #000;
      margin: 5px 0;
      transition: 0.3s;
    }

    .menu {
      display: none; /* Oculto en móvil */
      list-style: none;
    }

    /* Mostrar menú en escritorio */
    @media (min-width: 768px) {
      .menu-icon {
        display: none; /* Ocultar icono hamburguesa */
      }
      
      .menu {
        display: flex; /* Mostrar menú completo */
      }
    }

    /* --------------------------------------------
       9. TIPOGRAFÍA RESPONSIVA
    -------------------------------------------- */

    /* Mobile First */
    h1 { font-size: 1.5rem; } /* 24px */
    h2 { font-size: 1.25rem; } /* 20px */
    p { font-size: 1rem; } /* 16px */

    /* Tablet */
    @media (min-width: 768px) {
      h1 { font-size: 2rem; } /* 32px */
      h2 { font-size: 1.5rem; } /* 24px */
      p { font-size: 1.125rem; } /* 18px */
    }

    /* Desktop */
    @media (min-width: 1024px) {
      h1 { font-size: 2.5rem; } /* 40px */
      h2 { font-size: 2rem; } /* 32px */
      p { font-size: 1.125rem; } /* 18px */
    }

    /* --------------------------------------------
       10. UTILIDADES COMUNES
    -------------------------------------------- */

    /* Contenedor con ancho máximo centrado */
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
    }

    /* Ocultar elementos según dispositivo */
    .mobile-only {
      display: block;
    }

    .desktop-only {
      display: none;
    }

    @media (min-width: 768px) {
      .mobile-only {
        display: none;
      }
      
      .desktop-only {
        display: block;
      }
    }

    /* --------------------------------------------
       11. EJEMPLO COMPLETO DE LAYOUT RESPONSIVO
    -------------------------------------------- */

    .layout {
      display: grid;
      grid-template-areas:
        "header"
        "main"
        "sidebar"
        "footer";
      gap: 20px;
      padding: 20px;
    }

    @media (min-width: 768px) {
      .layout {
        grid-template-columns: 1fr 3fr;
        grid-template-areas:
          "header header"
          "sidebar main"
          "footer footer";
      }
    }

    .layout-header { grid-area: header; background: #e3f2fd; padding: 20px; }
    .layout-main { grid-area: main; background: #f5f5f5; padding: 20px; }
    .layout-sidebar { grid-area: sidebar; background: #fff3e0; padding: 20px; }
    .layout-footer { grid-area: footer; background: #e0e0e0; padding: 20px; }

  </style>
</head>
<body>

  <!-- ============================================
       ESTRUCTURA HTML CON EJEMPLOS
  ============================================ -->

  <div class="container">
    <h1>Guía de Diseño Responsive con CSS</h1>

    <!-- EJEMPLO: Imagen responsiva con srcset -->
    <section>
      <h2>Imagen Responsiva</h2>
      <!-- 
        srcset: Define múltiples versiones de la imagen
        sizes: Define cómo se muestra en diferentes viewports
      -->
      <img 
        src="imagen-small.jpg"
        srcset="imagen-large.jpg 1024w, 
                imagen-medium.jpg 768w, 
                imagen-small.jpg 480w"
        sizes="(max-width: 768px) 100vw, 50vw"
        alt="Descripción de la imagen">
    </section>

    <!-- EJEMPLO: Video responsivo -->
    <section>
      <h2>Video Responsivo</h2>
      <div class="video-container">
        <video controls>
          <source src="video.mp4" type="video/mp4">
          Tu navegador no soporta el elemento video.
        </video>
      </div>
    </section>

    <!-- EJEMPLO: Iframe responsivo (YouTube) -->
    <section>
      <h2>Iframe Responsivo</h2>
      <div class="video-container">
        <iframe 
          src="https://www.youtube.com/embed/VIDEO_ID" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
      </div>
    </section>

    <!-- EJEMPLO: Flexbox - 3 columnas -->
    <section>
      <h2>Layout con Flexbox</h2>
      <div class="columnas-flex">
        <div class="columna">Columna 1</div>
        <div class="columna">Columna 2</div>
        <div class="columna">Columna 3</div>
      </div>
    </section>

    <!-- EJEMPLO: Grid - Galería -->
    <section>
      <h2>Galería con Grid</h2>
      <div class="galeria-grid">
        <div style="background: #ffcdd2; padding: 20px;">Item 1</div>
        <div style="background: #f8bbd0; padding: 20px;">Item 2</div>
        <div style="background: #e1bee7; padding: 20px;">Item 3</div>
        <div style="background: #d1c4e9; padding: 20px;">Item 4</div>
        <div style="background: #c5cae9; padding: 20px;">Item 5</div>
        <div style="background: #bbdefb; padding: 20px;">Item 6</div>
      </div>
    </section>

    <!-- EJEMPLO: Layout completo -->
    <section>
      <h2>Layout Completo Responsivo</h2>
      <div class="layout">
        <header class="layout-header">HEADER</header>
        <aside class="layout-sidebar">SIDEBAR</aside>
        <main class="layout-main">MAIN CONTENT</main>
        <footer class="layout-footer">FOOTER</footer>
      </div>
    </section>

    <!-- EJEMPLO: Navegación móvil -->
    <section>
      <h2>Navegación Móvil</h2>
      <div class="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul class="menu">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </section>

  </div>

  <!-- ============================================
       NOTAS IMPORTANTES
  ============================================ -->
  <!--
    
    BREAKPOINTS ESTÁNDAR:
    - Móvil: < 480px
    - Tablet: 481px - 768px
    - Desktop: 769px+

    ESTRATEGIA MOBILE-FIRST:
    1. Diseñar primero para móviles
    2. Usar min-width en media queries
    3. Añadir complejidad progresivamente

    FLEXBOX vs GRID:
    - Flexbox: Layouts unidimensionales (filas O columnas)
    - Grid: Layouts bidimensionales (filas Y columnas)

    IMÁGENES RESPONSIVAS:
    - Siempre usar: max-width: 100%; height: auto;
    - Usar srcset para diferentes resoluciones
    - Optimizar peso de las imágenes

    VIEWPORT META TAG (OBLIGATORIO):
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    UNIDADES RECOMENDADAS:
    - Tipografía: rem
    - Espaciados: rem o em
    - Anchos de contenedores: % o vw
    - Márgenes/Padding: rem

  -->

</body>
</html>




1. navegacion con logotipo y navegacion responsive con css
en movil(hasta 1023px) navegacion colapsada tipo hamburguesa
en escritorio >= 1024 px navegacion horizontal





.grid {
  max-width: var(--maxw);
  margin: 24px auto;
  display: grid;
  gap: var(--gap);
  grid-template-columns: repeat(3, 1fr); /* Por defecto: 3 columnas (≥1024px) */
  padding: 0 16px;
}

/* Tablets: 2 columnas (768px - 1023px) */
@media (max-width: 1023px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Móviles: 1 columna (<768px) */
@media (max-width: 767px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

/* Tarjeta individual */
.card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
}

/* Texto de la tarjeta */
.card figcaption {
  padding: 8px;
  text-align: center;
}


seccion adicional con tarjetas
- obligatorio felxbox
- tarjetas alineadas y distribuidas con display: flex, gap;
- flex -grap y reglas responsive



<section id="tarjetas">
  <h2>Información útil</h2>
  <div class="tarjetas-container">
    <article class="tarjeta">
      <img src="img/trompeta1.jpg" alt="Trompeta clásica">
      <h3>Trompeta clásica</h3>
      <p>Descubre la historia y evolución de la trompeta a lo largo de los siglos.</p>
    </article>

    <article class="tarjeta">
      <img src="img/trompeta2.jpg" alt="Mantenimiento">
      <h3>Mantenimiento</h3>
      <p>Aprende a mantener tu trompeta en perfecto estado con consejos de expertos.</p>
    </article>

    <article class="tarjeta">
      <img src="img/trompeta3.jpg" alt="Eventos">
      <h3>Eventos</h3>
      <p>Consulta los próximos conciertos y exposiciones relacionadas con la trompeta.</p>
    </article>
  </div>
</section>


/* Sección de tarjetas */
#tarjetas {
  padding: 2rem 1rem;
  background: #f9fafb;
  text-align: center;
}

#tarjetas h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

/* Contenedor flex */
.tarjetas-container {
  display: flex;
  flex-wrap: wrap; /* permite que bajen de línea */
  justify-content: center;
  gap: 24px; /* espacio entre tarjetas */
}

/* Tarjeta individual */
.tarjeta {
  flex: 1 1 300px; /* base 300px, se adaptan */
  max-width: 320px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  text-align: left;
  transition: transform 0.2s ease;
}

.tarjeta:hover {
  transform: translateY(-4px);
}

.tarjeta img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.tarjeta h3 {
  font-size: 1.2rem;
  margin: 0.8rem;
}

.tarjeta p {
  font-size: 0.95rem;
  color: #555;
  margin: 0 0.8rem 1rem;
}

/* 🔁 Responsive */
@media (max-width: 1024px) {
  .tarjeta {
    flex: 1 1 45%; /* 2 por fila aprox */
  }
}

@media (max-width: 768px) {
  .tarjeta {
    flex: 1 1 100%; /* 1 por fila en móvil */
    max-width: 100%;
  }
}

