Package.describe({
  name: 'aramk:google-maps-marker-label',
  summary: 'MarkerWithLabel for Google Maps API',
  version: '2.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@1.6.1']);
  api.use([
    'mrt:googlemaps@0.1.1'
  ]);
  api.addFiles([
    'src/MarkerWithLabel.js'
  ], 'client');
});
