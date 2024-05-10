const { StatusCodes } = require('http-status-codes');

const { LikeRepository } = require('../repositories/index');
const { LikeService } = require('../services/index');
const { NotImplementedError } = require('../errors/index');

const likeService = new LikeService(new LikeRepository());

async function postLike(req, res, next) {
    try {
        const newLike = await likeService.postLike(req.params.Id, req.body.userId, req.params.type);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Posted Like",
            error: {},
            data: newLike,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    postLike,
};