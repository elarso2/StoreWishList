const router = require('express').Router();
const userRoutes = require('./usersRoutes');
const GiftCardRoutes= require('./giftcardsRoutes');
const itemsroutes=require('./itemsRoutes');
const storeRoutes =require('./storesRoutes');


router.use('/user',userRoutes);
router.use('/giftCards',GiftCardRoutes);
router.use('/items', itemsroutes);
router.use('/store', storeRoutes);

module.exports = router;