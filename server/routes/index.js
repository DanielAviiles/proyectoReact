const express = require('express');
const router = express.Router();
const peliM = require('../model/peliculasM');

router.get('/listar', async (req, res) => {
  const data = await peliM.listPeliculas();
  res.json({ data });
})

router.put('/modificar', async (req, res) => {
  
});

module.exports = router;
