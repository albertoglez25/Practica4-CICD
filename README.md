# Pipeline Lab – Práctica CI/CD

Dashboard Angular de demostración para integración y despliegue continuos con GitHub Actions y GitHub Pages.

## Ejecución local
Instala Node.js 22, ejecuta `npm install` y `npm start`; visita http://localhost:4200.

## Tests
`npm test -- --watch=false`. Karma publica cobertura HTML y texto; los límites globales son 80% en sentencias, funciones y líneas, y 70% en ramas.

## Workflow
En PR a main y push a main se hace checkout, setup Node 22, instalación npm, tests y build. El despliegue a Pages ocurre solo en push a main y depende del job build.

En Settings > Pages, configura GitHub Actions como source para habilitar la publicación.
