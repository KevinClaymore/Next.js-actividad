# Next.js-actividad
Kevin Daniel Chaparro Molina 1152411

1.¿Qué ventajas tiene usar React frente a trabajar solo con JavaScript puro para interfaces web?
React permite construir interfaces mediante componentes reutilizables, lo que reduce la repetición y facilita el mantenimiento del código. Su Virtual DOM hace que las actualizaciones en pantalla sean más eficientes y rápidas. Además, ofrece una estructura más organizada, separación clara de lógica y presentación, y acceso a un ecosistema enorme de librerías, herramientas y buenas prácticas que no se obtienen fácilmente con JavaScript puro.

2.¿Qué beneficios ofrece Next.js al trabajar sobre React?
Next.js agrega funcionalidades avanzadas que React por sí solo no incluye, como el renderizado en servidor (SSR), generación estática (SSG) y ruteo automático sin configuración adicional. También permite crear backend mediante API Routes dentro del mismo proyecto, optimiza imágenes y fuentes automáticamente, mejora la seguridad del código sensible y ofrece un entorno preparado para producción desde el primer momento.

3.¿Qué significa que Next.js tenga un App Router y por qué se recomienda usarlo?
El App Router es el sistema moderno de navegación de Next.js basado en la carpeta /app. Este sistema soporta características avanzadas como layouts compartidos, manejo de estados de carga (loading), páginas de error, rutas anidadas y server components. Se recomienda usarlo porque permite crear aplicaciones más rápidas, mejor estructuradas, más fáciles de mantener y con una arquitectura más flexible que el sistema anterior basado en /pages.

4.¿Qué diferencia hay entre client components y server components en Next.js?
Los client components se ejecutan en el navegador y permiten toda la interactividad de la interfaz, como manejar eventos, estados con hooks (useState, useEffect), formularios y animaciones. En cambio, los server components se procesan en el servidor, pueden acceder a bases de datos, APIs seguras y variables protegidas, y envían al navegador solo HTML ya procesado, reduciendo el peso del JavaScript y mejorando el rendimiento general de la aplicación.

5.¿Por qué en desarrollo profesional se usan repositorios públicos o privados en GitHub en lugar de solo trabajar en carpetas locales?
Los repositorios garantizan un historial completo y organizado del proyecto, permitiendo revertir cambios y rastrear errores. Facilitan el trabajo colaborativo mediante ramas, pull requests y revisiones de código. También funcionan como respaldo seguro en la nube en caso de pérdida del equipo local. Además, integran herramientas de despliegue automático, CI/CD, documentación y control de versiones, lo que hace que el desarrollo sea más profesional, seguro y escalable.
