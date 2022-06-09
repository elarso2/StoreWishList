const router = require('express').Router();
const userRoutes = require('./usersRoutes');
const giftCardRoutes = require('./giftcardsRoutes');
const itemsroutes = require('./itemsRoutes');
const storeRoutes = require('./storesRoutes');

router.use('/user', userRoutes);
router.use('/giftCard', giftCardRoutes);
router.use('/items', itemsroutes);
router.use('/store', storeRoutes);

module.exports = router;