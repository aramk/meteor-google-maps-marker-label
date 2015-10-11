Package.describe({
  name: 'aramk:google-maps-marker-label',
  summary: 'MarkerWithLabel for Google Maps API',
  version: '1.1.10'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0']);
  api.use([
    'mrt:googlemaps'
  ]);
  api.addFiles([
    'src/MarkerWithLabel.js'
  ], 'client');
});
