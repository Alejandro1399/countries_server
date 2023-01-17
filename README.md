# Cobertura General:

Estas pruebas se realizaran durante y después del desarrollo de un web server el cual obtendrá información de un API REST que contiene información de todos los países del mundo; Este web server solicitara el nombre del país y mostrara los campos area y population. En caso de que no exista este país en los datos, se mostrara un mensaje de “No existe el país consultado”; además
Cada vez que se realiza una solicitud al Endpoint se dejara un log de uso en la base de datos.

# Cómo probar:

Se realizaran pruebas automatizadas con Jest y Karate 

# Orden de prueba:

## pruebas unitarias

se realizaran pruebas unitarias con Jest en la cual se realizaran 3 test desarrollados en 8 casos de prueba 

- Realizar una consulta al endpoint creado
    - Hacer una consulta para obtener todos los datos → se realizara la solicitud y se esperara un status 200
    - Hacer una consulta para obtener información de un país →  se realizara la solicitud y se esperara un status 202
    - Hacer una consulta errónea para obtener información de un país →  se realizara la solicitud y se esperara un status 202
- Revisar si se recibe información del API REST que contiene información de todos los países del mundo
    - Hacer una consulta para obtener todos los datos → se realizara la solicitud y se esperara el mensaje “Consulta exitosa”
    - Hacer una consulta para obtener información de un país →  se realizara la solicitud y se esperara el mensaje “Consulta exitosa”
    - Hacer una consulta errónea para obtener información de un país →  se realizara la solicitud y se esperara el mensaje “No existe el país consultado”
- Se realiza pruebas a la base de datos
    - Conexión a la base de datos → Se realiza una prueba de conexión a la base de datos y se espera que el estado sea “connected”
    - Inserción a la base de datos → Se realiza una inserción de un log a la base de datos y se espera que el id incremental este entre el rango de 0< X <1000

## Pruebas de Aceptación

se realizaran pruebas de aceptación con Karate en la cual se realizaran 1 test desarrollados en 3 casos de prueba 

- Se valida el Web Server
    - Hacer una consulta para obtener todos los datos → se realizara la solicitud y se esperara un status 200, además se comprueba que la base de datos esta enviando los logs al recibir un true en el response, se compara la información filtrada desde el web server  (Area, Population) de todos los países  con la información que la API REST entrega y se recibe el mensaje “Consulta exitosa”
    - Hacer una consulta para obtener información de un país →  se realizara la solicitud y se esperara un status 202, se comprueba que la base de datos esta enviando los logs al recibir un true en el response, se compara la información filtrada desde el web server  (Area, Population) del país solicitado con la información que la API REST entrega y se recibe el mensaje “Consulta exitosa”
    - Hacer una consulta errónea para obtener información de un país →  se realizara la solicitud y se esperara un status 400, se comprueba que la base de datos esta enviando los logs al recibir un true en el response  y se revisa que la información que el web server envía (Area, Population) del país solicitado sea 0 además de el mensaje “No existe el país consultado”