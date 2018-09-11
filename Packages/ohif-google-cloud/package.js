Package.describe({
  name: 'ohif:google-cloud',
  summary: 'DICOM Services: Google Cloud Healthcare API integration',
  version: '0.0.1',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');

  api.use('http');
  api.use('ecmascript');

  api.use([
    'templating',
    'stylus',
    'clinical:router'
  ], 'client');

  // Main module
  api.mainModule('main.js', ['client', 'server']);

  // Client imports and routes
  api.addFiles('client/index.js', 'client');

  // Server imports and methods
  api.addFiles('server/index.js', 'server');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('ohif-google-cloud');
//   api.mainModule('ohif-google-cloud-tests.js');
// });
