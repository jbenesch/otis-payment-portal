import { injectGlobal } from 'styled-components'

// Style body of document to match mockup provided by design because I'm a perfectionist
const backgroundSvg = `
<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'>
  <linearGradient id="yellow2pink" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="rgb(244,201,90)" stop-opacity="1" />
    <stop offset="100%" stop-color="rgb(230,62,183)" stop-opacity="1" />
  </linearGradient>
  <linearGradient id="blue2purple" x1="0%" y1="40%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="rgb(136,85,204)" stop-opacity="1" />
    <stop offset="100%" stop-color="rgb(34,85,238)" stop-opacity="1" />
  </linearGradient>
  <g transform="translate(60 -80) rotate(-30)">
    <rect x="0" y="0" width="175" height="175" rx="40" ry="40" fill="url(#blue2purple)" />
  </g>
  <g transform="translate(200 140) rotate(-30)">
    <rect x="0" y="0" width="175" height="175" rx="40" ry="40" fill="url(#blue2purple)" />
  </g>
  <g transform="translate(70 -40) rotate(-30)">
    <rect x="300" y="100" width="175" height="175" rx="40" ry="40" fill="url(#yellow2pink)" />
  </g>
  <g transform="translate(-80 -120) rotate(-30)">
    <rect x="150" y="500" width="500" height="500" rx="80" ry="80" fill="url(#yellow2pink)" />
  </g>
</svg>
`

injectGlobal`
  body {
    color: #fdfeff;
    background-color: #293742;
    background-image: url("data:image/svg+xml,${encodeURIComponent(
      backgroundSvg
    )}");
    background-repeat: no-repeat;
    background-position: right top;
  }
`
