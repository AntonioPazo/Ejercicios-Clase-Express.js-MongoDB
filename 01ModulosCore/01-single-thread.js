function singleThread() {
    // Asignar valores a process.argv
    process.argv[2] = 'Estamos aprendiendo Node.js';
    process.argv[3] = 19;
    process.argv[4] = null;
    process.argv[5] = true;
  
    // Imprimir la información del proceso
    console.log('-------------------------');
    console.log('EL PROCESO DE NODE.JS');
    console.log('-------------------------');
    console.log('Id del proceso: ' + process.pid);
    console.log('Título: ' + process.title);
    console.log('Ruta del ejecutable de Node: ' + process.execPath);
    console.log('Directorio Actual: ' + process.cwd());
    console.log('Versión de Node: ' + process.version);
    console.log('Versiones de Dependencias: ' + JSON.stringify(process.versions));
    console.log('Plataforma (S.O.): ' + process.platform);
    console.log('Arquitectura (S.O.): ' + process.arch);
    console.log('Tiempo activo de Node (en segundos): ' + process.uptime());
    console.log('Argumentos del proceso: ' + process.argv);
    console.log('-------------------------');
  
    // Imprimir los argumentos del proceso (excluyendo los dos primeros elementos)
    let key = 0;
    for (key in process.argv) {
      console.log('Argumento ' + key + ': ' + process.argv[key]);
    }
  }
  
  singleThread();
  