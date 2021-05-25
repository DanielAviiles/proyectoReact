const pool = require('../database');

const listPeliculas = async () => (
  await pool.query('SELECT * FROM pelicula')
)

const modifyPelicula = async (infoPeli) => (
  await pool.query(`UPDATE pelicula 
    SET nombre=${infoPeli.nombre} descripcion=${infoPeli.descripcion}
    WHERE id=${infoPeli.id}`)
)

module.exports = {
  listPeliculas,
  modifyPelicula
}