class LikeService {
    constructor(likeRepository) {
        this.likeRepository = likeRepository;
    }
    
    async postLike(Id, userId, type) {
        try {
            return await this.likeRepository.postLike(Id, userId, type);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = LikeService;