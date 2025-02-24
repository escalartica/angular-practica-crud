// Karma configuration
// Generated on Mon Feb 24 2025 20:48:50 GMT+0100 (hora estándar de Europa central)

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    frameworks: ['jasmine', 'karma-typescript'],

    // list of files / patterns to load in the browser
    files: [
      'src/**/*.spec.ts', // Archivos de prueba
      'src/**/*.ts', // Archivos TypeScript
    ],

    // preprocess matching files before serving them to the browser
    preprocessors: {
      '**/*.ts': ['karma-typescript'], // Preprocesa los archivos .ts con karma-typescript
    },

    // test results reporter to use
    reporters: ['progress', 'kjhtml', 'coverage-istanbul'],

    // coverage report configuration
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage'), // Directorio de salida
      reports: ['html', 'lcovonly', 'text-summary'], // Reportes de cobertura
      fixWebpackSourcePaths: true, // Soluciona las rutas relativas de los archivos
      threshold: {
        global: 80, // Cobertura mínima del 80%
      },
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    browsers: ['Chrome'],

    // Continuous Integration mode
    singleRun: false,

    // Concurrency level
    concurrency: Infinity,
  });
};
