const router = require('express').Router();
const { User, Store, GiftCard, Items } = require('../../models');
const withAuth = require('../../utils/auth');

//create
router.post('/', async (req, res) => {
  try {
    const newGiftCard = await GiftCard.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newGiftCard);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete
router.delete('/:id', async (req, res) => {
  try {
    const giftCardData = await GiftCard.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!giftCardData) {
      res.status(404).json({ message: 'No gif card found with this id!' });
      return;
    }
    res.status(200).json(giftCardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update?
