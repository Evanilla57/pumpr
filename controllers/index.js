const router = require('express').Router();
const bingAPI = "Au5J2-W-wm9RjOdzUylDQNJaiPua_uIVGKvz3mkQfCVvnTBPmZsuS3C8RztArOLq";
const spoitfyAPI = "a11f5e96a3ce48faba28d169a9120f77";

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
