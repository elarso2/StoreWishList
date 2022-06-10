const router = require('express').Router();
const userRoutes = require('./usersRoutes');
const GiftCardRoutes = require('./giftcardsRoutes');
const itemsRoutes = require('./itemsRoutes');
const storeRoutes = require('./storesRoutes');

const newStoreRoutes = require('./testStoreRoutes');

router.use('/user', userRoutes);
router.use('/giftCards', GiftCardRoutes);
router.use('/items', itemsRoutes);
router.use('/store', storeRoutes);

router.use('/newStore', newStoreRoutes);

module.exports = router;
