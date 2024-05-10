const mongoose = require('mongoose');

const { BadRequestError, NotFoundError, ConflictError } = require('../errors');
const { User } = require('../models');

class FollowRepository {
    async followUser(userId, targetUserId) {
        try {
            // Checking if the userId of user trying to follow is valid or not
            if(!mongoose.Types.ObjectId.isValid(userId)) {
                throw new BadRequestError('userId');
            }

            // checking if the targetUserId of target user to be followed is valid or not
            if(!mongoose.Types.ObjectId.isValid(targetUserId)) {
                throw new BadRequestError('targetUserId');
            }

            // Checking if the userId exists
            const user = await User.findById(userId);
            if(!user) {
                throw new NotFoundError("User", "UserId", userId);
            }

            // Checking if the targetUserId exists
            let targetUser = await User.findById(targetUserId);
            if(!targetUser) {
                throw new NotFoundError("TargetUser", "UserId", targetUserId);
            }

            // Checking if the user already follows targetUser
            if(targetUser.followedBy.includes(userId)) {
                throw new ConflictError("Follower", "UserID", userId);
            }

            targetUser = await User.findByIdAndUpdate(targetUserId, 
                {
                    $push: { followedBy: userId },
                },
                { new : true },
            );
            return targetUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = FollowRepository;