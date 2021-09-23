const express = require('express');
const router = express.Router();

// Se indica el nombre del archivo y su titulo. Si la propiedad view engine no se establece, debe especificar
// la extensión del archivo view. De lo contrario, puede omitirla.(En este caso si se establecio la propiedad)
router.get('/', (req, res) => {
  res.render('index', { title: 'ddfkr Home' });
});

router.get('/signIn', (req, res) => {
  res.render('signIn', {title: 'Sign In'});
});

router.get('/signUp', (req, res) => {
  res.render('signUp', {title: 'Sign Up'});
});

router.get('/trending', (req, res) => {
  res.render('trending', { title: 'Trending'});
});

router.get('/music', (req, res) =>{
  res.render('music', { title: 'Music'});
});

router.get('/events', (req, res) =>{
  res.render('events', { title: 'Event'});
});

router.get('/videogames', (req, res) =>{
  res.render('videogames', { title: 'Videogames'});
});

router.get('/ilicit', (req, res) =>{
  res.render('ilicit', { title: 'Ilicit'});
});

module.exports = router;