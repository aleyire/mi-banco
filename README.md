## Mi banco :bank:
En este desafío se realizó una aplicación Node que se conecta con PostgreSQL, en ella es utiliza transacciones y cursores para simular el comportamiento de una transacción
bancaria. Este desafío es un proceso de desarrollo, la  interacción se debe realizar con argumentos por la línea de comandos.

### Materia aplicada 	📄

- Cursores
- Transacciones
- Captura de errores en transacciones


### Comandos 

- `npm init`
- `npm i pg`
- `npm i pg-cursor`
- `node index.js consultar 1`
- `node index.js 'consultar saldo' 1`
- `node index.js registrar 1 '1000' 2 '1000' 'abono' '28/05/2022' '1000' 1`