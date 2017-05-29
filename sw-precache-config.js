module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/*.png'
  ],
  runtimeCaching: [{
    urlPattern: /api\.themoviedb\.org/,
    handler: 'networkFirst'
  }],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html'
};
