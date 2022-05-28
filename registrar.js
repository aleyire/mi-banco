const registrar = async (pool, id, saldo, id2, saldo2, descripcion, fecha, monto, cuenta) => {
  await pool.connect(async (_errorConexion, client, release) => {
    try {
      await client.query("BEGIN")
      const descontar = {
        name: "descontar",
        text: "UPDATE cuentas SET saldo = saldo - $2 WHERE id = $1 RETURNING *",
        values: [id, saldo],
      }
      const descuento = await client.query(descontar)

      const acreditar = {
        name: "acreditar",
        text: "UPDATE cuentas SET saldo = saldo + $2 WHERE id = $1 RETURNING *",
        values: [id2, saldo2],
      }
      const acreditacion = await client.query(acreditar)
      const transacciones = {
        name: "transacciones",
        text: "INSERT INTO transacciones (descripcion, fecha, monto, cuenta) VALUES ($1, $2, $3, $4) RETURNING *",
        values: [descripcion, fecha, monto, cuenta],
      }
      const transaccion = await client.query(transacciones)
       
      console.log("Descuento realizado con éxito: ", descuento.rows[0])
      console.log("Acreditación realizada con éxito: ", acreditacion.rows[0])
      console.log("Transacción ingresada con éxito: ", transaccion.rows[0])

      await client.query("COMMIT")
    } catch (error) {
      await client.query("ROLLBACK")
      console.log("Error: ", error)
    }
    release()
    pool.end()
  })
}

module.exports = registrar
