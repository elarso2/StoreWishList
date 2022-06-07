const router = require('express').Router();
const { User, Store, GiftCard, Items } = require('../../models');
const withAuth = require('../../utils/auth');

// add
router.post('/', async (req, res) => {
  try {
    const newItem = await Items.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete
router.delete('/:id', async (req, res) => {
  try {
    const itemData = await Items.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!itemData) {
      res.status(404).json({ message: 'No item found with this id!' });
      return;
    }
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
