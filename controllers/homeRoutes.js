const router =require ('express').Router();
const req = require('express/lib/request');
const res = require('express/lib/response');
const {}=require('../models')
const withAuth = require('../utils')


router.get('/', async (req , res)=>{
    try{

    }
});


router.get('', async (req, res)=>{
    try{

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