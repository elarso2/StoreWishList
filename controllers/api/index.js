const router = require('express').Router();
const userRoutes = require('./usersRoutes');
const GiftCardRoutes = require('./giftcardsRoutes');
const itemsRoutes = require('./itemsRoutes');
const storeRoutes = require('./storesRoutes');

router.use('/user', userRoutes);
router.use('/giftCards', GiftCardRoutes);
router.use('/items', itemsRoutes);
router.use('/store', storeRoutes);

module.exports = router;