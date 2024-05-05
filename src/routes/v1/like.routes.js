const express = require('express');
const { like } = require('../../controllers');

const likeRouter = express.Router();

// going to controllers
likeRouter.post('/:type/:id/likes', like.postLike);

module.exports = likeRouter;