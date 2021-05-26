const express = require('express');
const router = express.Router();
const peliM = require('../model/peliculasM');

router.get('/listar', async (req, res) => {
  const data = await peliM.listPeliculas();
  res.json({ data });
});

router.get('/info/:idPeli', async (req, res) => {
  const { idPeli } = req.params;
  const peli = await peliM.infoPelicula(idPeli);
  res.json({ peli });
})

router.put('/modificar', async (req, res) => {
  // const { idPeli } = req.params;
  console.log(req.body);
  // await peliM.modifyPelicula(req.body);
});

module.exports = router;
