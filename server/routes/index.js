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
  await peliM.modifyPelicula(req.body).then(() => res.json({ status : 200 }));
});

module.exports = router;
