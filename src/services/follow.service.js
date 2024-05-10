class FollowService {
    constructor(followRepository) {
        this.followRepository = followRepository; 
    }

    async followUser(userId, targetUserId) {
        try {
            userId = userId.toString();
            targetUserId = targetUserId.toString();
            return await this.followRepository.followUser(userId, targetUserId);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = FollowService;