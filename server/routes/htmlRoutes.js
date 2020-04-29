const router = require('express').Router();

const {images } = require('../db/db')

router.get('/', (req, res) => {
  return res.render('home', {image: images[0]});
});

router.get('/contact', (req, res) => {
  return res.render('contact');
});

router.get('/portfolio', (req, res) => {
  return res.render('portfolio');
});

module.exports = router;
