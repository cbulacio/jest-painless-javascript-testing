#Easy Setup
Completa y fácil de configurar la solución de pruebas de JavaScript.

#Instant Feedback
El el modo watcher interactivo sólo los archivos de prueba relacionados con los archivos modificados y está optimizado para dar señal rápidamente.

#Snapshot Testing
Capture instantáneas de árboles React u otros valores serializables para simplificar las pruebas de interfaz de usuario y analizar cómo cambia el estado con el tiempo.

#Zero configuration testing platform
Jest es utilizado por Facebook para probar todo el código JavaScript, incluyendo las aplicaciones React.
Una de las filosofías de Jest es proporcionar una experiencia integrada de "configuración cero".
Hemos observado que cuando se proporciona a los ingenieros herramientas listas para usar, terminan escribiendo más pruebas, lo que a su vez da como resultado bases de código más estables y saludables.

#Powerful mocking library
Librería de mocks poderosa para funciones y módulos.
para react-native usar jest-react-native.


#####################

instalacion
npm install --save-dev jest

#Jest CLI Options
https://facebook.github.io/jest/docs/cli.html

Using with npm scripts #
If you run Jest via npm test, you can still use the command line arguments by inserting a -- between npm test and the Jest arguments.
Instead of:
jest -u -t="ColorPicker"
you can use:
npm test -- -u -t="ColorPicker"