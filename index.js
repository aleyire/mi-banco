const registrar = require("./registrar")
const consultar = require("./consultar")
const consultarSaldo = require("./consultar_saldo")
const { Pool } = require("pg")

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "alejandra",
  database: "banco",
  port: 5432,
})

const argumentos = process.argv.slice(2)
const accion = argumentos[0]
const arg1 = argumentos[1]
const arg2 = argumentos[2]
const arg3 = argumentos[3]
const arg4 = argumentos[4]
const arg5 = argumentos[5]
const arg6 = argumentos[6]
const arg7 = argumentos[7]
const arg8 = argumentos[8]

const transaccion = async () => {
  if (accion === "registrar") {
    const id = arg1
    const saldo = arg2
    const id2 = arg3
    const saldo2 = arg4
    const descripcion = arg5
    const fecha = arg6
    const monto = arg7
    const cuenta = arg8
    await registrar(pool, id, saldo, id2, saldo2, descripcion, fecha, monto, cuenta)
  }
  if (accion === "consultar") {
    const descripcion = arg1
    const fecha = arg2
    const monto = arg3
    const cuenta = arg4
    await consultar(pool, descripcion, fecha, monto, cuenta)
  }
  if (accion === "consultar saldo") {
    const id = arg1
    await consultarSaldo(pool, id)
  }
}
transaccion()
