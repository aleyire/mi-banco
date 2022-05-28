-- Crear base de datos llamada banco
CREATE DATABASE banco;

-- Crear tabla llamada transacciones
CREATE TABLE transacciones (
    descripcion varchar(50), 
    fecha varchar(10), 
    monto DECIMAL, 
    cuenta INT
);

-- Crear tabla llamada cuentas
CREATE TABLE cuentas (
    id INT, 
    saldo DECIMAL CHECK (saldo >= 0) 
);

-- Registrar por lo menos 1 cuenta en la tabla cuentas con un saldo inicial.
INSERT INTO cuentas values (1, 20000);

-- Revisar la tabla cuentas
SELECT * FROM cuentas;

-- Revisar la tabla transacciones
SELECT * FROM transacciones;
