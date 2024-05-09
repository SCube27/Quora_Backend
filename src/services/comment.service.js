class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }

    async postCommentonAnswer(answerId, commentData) {
        try {
            const newComment = {};
            newComment.parentId = answerId;
            newComment.text = commentData.text;
            newComment.userId = commentData.userId;
            newComment.createdAt = (commentData.createdAt) ? commentData.createdAt : null;
            return await this.commentRepository.postCommentonAnswer(newComment);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    async postCommentonComment(commentId, newCommentData) {
        try {
            const newComment = {};
            newComment.parentId = commentId;
            newComment.text = newCommentData.text;
            newComment.userId = newCommentData.userId;
            newComment.createdAt = (newCommentData.createdAt) ? newCommentData.createdAt : null;
            return await this.commentRepository.postCommentonComment(newComment);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = CommentService;