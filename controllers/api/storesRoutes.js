const router = require('express').Router();
const req = require('express/lib/request');
const { User, Store, GiftCard, Items } = require('../../models');

const withAuth = require('../../utils/auth');

//create
router.post('/', withAuth, async (req, res) => {
  try {
    const newStore = await Store.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newStore);
  } catch (err) {
    res.status(400).json(err);
  }
});
//get store data
router.get('/:id', withAuth, async (req, res) => {
  try {
    const storeData = await Store.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    if (!storeData) {
      res.status(404).json({ message: 'No store found by that id' });
      return;
    }
    res.status(200).json(storeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const storeData = await Store.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!storeData) {
      res.status(404).json({ message: 'No store found with this id!' });
      return;
    }
    res.status(200).json(storeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
