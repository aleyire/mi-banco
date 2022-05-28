const Cursor = require("pg-cursor")

const consultar = async (pool, cuenta) => {
  await pool.connect((_errorConexion, client, release) => {
    try {
      const consulta = new Cursor("SELECT * FROM transacciones WHERE cuenta = $1", [cuenta])
      const cursor = client.query(consulta)

      cursor.read(10, (_err, rows) => {
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

module.exports = consultar
