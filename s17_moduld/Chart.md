## Chart.js integráció

A Chart.js egy népszerű, nyílt forráskódú JavaScript könyvtár diagramok készítésére. React-ben a `react-chartjs-2` wrapper-t használjuk.
<br>
<a href="https://www.chartjs.org/docs/latest/getting-started/">Chart.js dokumentáció </a>
<br>
<a href="https://react-chartjs-2.js.org/">React - chartjs-2 dokumentáció </a>
<br>
<a href="https://github.com/reactchartjs/react-chartjs-2/blob/master/sandboxes/line/default/App.tsx">Vonaldiagram példa a github-on</a>

### Chart.js telepítése

```bash
npm install chart.js react-chartjs-2
```

### Diagramok használata

1. Importálni kell a megfelelő komponenseket a chart.js és a react-chartjs-2 csomagokból. A dokumnetáció példáiban pontosan megmutatja, hogy melyeket. <a href="https://github.com/reactchartjs/react-chartjs-2/blob/master/sandboxes/line/default/App.tsx">Vonaldiagram példa a github-on</a>
2. Regisztrálni kell a felhasznált komponenseket
3. A diagram konfigurálása (options)
4. A vízszintes tengely/cimkék feliratainak megadása (labels)
5. Adatok megadása
6. Diagramkomponens elhelyezése a megfelelő helyre. 


