const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bingRoutes = require('./bingRoutes');

router.get(
  'https://dev.virtualearth.net/REST/v1/LocalSearch/?query={query}&userCircularMapView={lat,lon,radius}&key={BingMapsKey}',
);

// eslint-disable-next-line no-unused-vars
const BingMapsKey =
  'Au5J2-W-wm9RjOdzUylDQNJaiPua_uIVGKvz3mkQfCVvnTBPmZsuS3C8RztArOLq';

router.use('/users', userRoutes);

router.use('/bing', bingRoutes);

module.exports = router;
