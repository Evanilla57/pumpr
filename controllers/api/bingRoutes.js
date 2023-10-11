const router = require('express').Router();



///api/bing/search
router.get('/search/:zipCode', async (req, res) => {
  console.log(req.params);

  res.status(200);
});

router.get('/search', async (req, res) => {
  console.log('search');

  res.status(200).json();
});
module.exports = router;

