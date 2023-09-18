const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const CategoryData = await Category.findAll( {
      include: [Product]
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const CategoryData = await Category.findByPk(req.params.id, {
      include: [Product]
    });
    if (!CategoryData) {
      res.status(404).json({ message: 'NO location found with this id!' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/',async(req, res) => {
  try {
    const CategoryData = await Category.create(req.body);
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const CategoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ message: 'updated category by id.'});
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
try {
  const CategoryData = await Category.destroy({
    where: {
      id: req.params.id
    }
  });
  if (!CategoryData) {
    res.status(404).json({ message: 'No Category found with this id!'});
    return;
  }

  res.status(200).json({ message: 'deleted category by id.'});
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;

