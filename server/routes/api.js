const express = require('express');

const dragQueenController = require('../controllers/dragQueenController');

const router = express.Router();

router.get('/',
  dragQueenController.bringBackMyGirls,
  (req, res) => res.status(200).json(res.locals.queensList)
);

module.exports = router;