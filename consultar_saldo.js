const Cursor = require("pg-cursor")

const consultarSaldo = async (pool, id) => {
  await pool.connect((_errorConexion, client, release) => {
    try {
      const consulta = new Cursor("SELECT saldo FROM cuentas WHERE id = $1", [id])
      const cursor = client.query(consulta)

      cursor.read(5, (_err, rows) => {
        console.log(rows)
        cursor.close()
        release()
        pool.end()  
      })
    } catch (error) {
      console.log("Error: ", error)
    }
  })
}

module.exports = consultarSaldo
