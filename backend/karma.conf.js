module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'src/**/*.spec.ts', // Archivos de prueba
      'src/**/*.ts', // Archivos de código fuente
    ],
    preprocessors: {
      '**/*.ts': ['karma-typescript'], // Preprocesa los archivos .ts con karma-typescript
    },
    reporters: ['progress', 'kjhtml', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      dir: './coverage', // Ruta relativa para la carpeta de cobertura
      reports: ['html', 'lcovonly', 'text-summary'], // Tipos de reportes de cobertura
      fixWebpackSourcePaths: true, // Arregla las rutas relativas de los archivos
      threshold: {
        global: 80, // Cobertura mínima del 80%
      },
    },
    browsers: ['Chrome'],
    singleRun: false, // Si deseas que se detenga después de ejecutar las pruebas
    concurrency: Infinity,
  });
};
