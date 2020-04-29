const router = require('express').Router();

router.get('/', (req, res) => {
  return res.render('home');
});

router.get('/contact', (req, res) => {
  return res.render('contact');
});

router.get('/portfolio', (req, res) => {
  return res.render('portfolio');
});

module.exports = router;
