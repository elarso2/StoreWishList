const router = require('express').Router();
const { User, Store, GiftCard, Items } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', (req, res) => {
  res.render('../views/homepage');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('../views');
    return;
  }
  res.render('login');
});

module.exports = router;
