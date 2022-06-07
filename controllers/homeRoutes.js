const router = require('express').Router();
const { User, Store, GiftCard, Items } = require('../models');
const withAuth = require('../utils/Auth');

// router.get('/', async (req , res)=>{
//     try{
//         const GiftCardData = await GiftCard.findAll(
//             {
//                 exclude: [ value]
//             }
//         );
//         const cards = GiftCardData.map((GiftCard)=> GiftCard.get({plain: true}));
//         console.log(cards)
//         res.render("homepage",{
//             cards,
//             logged_in: req.session.logged_in,
//         });

//     }catch (err){
//         res.status(500).json(err);
//     }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

module.exports = router;
