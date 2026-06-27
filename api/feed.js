// Vercel serverless function — proxy del feed RSS de Substack
// Usa el módulo https nativo (sin dependencia de fetch global / Node 18+)

const https = require('https');

module.exports = function handler(req, res) {
  https.get(
    'https://sentidosendisputa.substack.com/feed',
    { headers: { 'User-Agent': 'SED-site/1.0' } },
    function (upstream) {
      let body = '';
      upstream.on('data', function (chunk) { body += chunk; });
      upstream.on('end', function () {
        if (upstream.statusCode < 200 || upstream.statusCode >= 300) {
          res.status(502).json({ error: 'Substack devolvió ' + upstream.statusCode });
          return;
        }
        res
          .setHeader('Content-Type', 'application/xml; charset=utf-8')
          .setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
          .status(200)
          .send(body);
      });
    }
  ).on('error', function (err) {
    console.error('[api/feed]', err.message);
    res.status(500).json({ error: 'No se pudo obtener el feed de publicaciones.' });
  });
};
