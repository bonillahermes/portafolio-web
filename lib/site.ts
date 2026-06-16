// Fuente unica de verdad del host canonico del sitio.
// La decision de canonicalizacion es www (coherente con la redireccion de Vercel,
// que fuerza www). Cualquier URL absoluta del sitio debe derivarse de esta
// constante, nunca hardcodearse. SITE_URL no termina en barra: las rutas se
// componen como `${SITE_URL}/ruta` y la raiz es SITE_URL a secas.
export const SITE_URL = "https://www.hermesbonilla.com"
