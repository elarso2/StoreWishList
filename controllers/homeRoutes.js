const router =require ('express').Router();
const { User,
    Store,
    GiftCard,
    Items,}=require('../models')
const withAuth = require('../utils/Auth')


router.get('/', async (req , res)=>{
    try{

    }catch (err){
        res.status(500).json(err);
    }
});


router.get('', async (req, res)=>{
    try{

    }catch (err){
        res.status(500).json(err);
    }
});

router.get('/login', (req,res)=>{
    if (req.session.loggrd_in){
        res.redirect('/profile');
        return;
    }
    res.render('login')

})


module.exports = router;