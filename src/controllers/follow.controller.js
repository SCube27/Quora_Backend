const { StatusCodes } = require('http-status-codes');

const { FollowRepository } = require('../repositories/index');
const { FollowService } = require('../services/index');
const { NotImplementedError } = require('../errors/index');

const followService = new FollowService(new FollowRepository());

async function followUser(req, res, next) {
    try {
        const newFollower = await followService.followUser(req.params.userId, req.params.targetUserId);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: `Following the user ${req.params.targetUserId}`,
            error: {},
            data: newFollower
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    followUser,
}