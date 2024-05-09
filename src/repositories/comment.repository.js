const mongoose = require('mongoose');
const { BadRequestError, NotFoundError } = require('../errors');
const { Comment, Answer } = require('../models');

class CommentRepository {
    async postCommentonAnswer(commentData) {
        try {
            // checking if the user has valid UserId before posting comment
            const userId = commentData.userId.toString();
            if(!mongoose.Types.ObjectId.isValid(userId)) {
                throw new BadRequestError('userId');
            }

            // Checking if the answer to be commented is present or not
            const parentId = commentData.parentId.toString();
            let parentAnswer = await Answer.findById(parentId);
            if(!parentAnswer) {
                throw new NotFoundError("Parent Answer", parentId);
            }

            const newComment = await Comment.create({
                parentName: 'answer',
                parentId: commentData.parentId,
                text: commentData.text,
                userId: commentData.userId,
                createdAt: (commentData.createdAt) ? commentData.createdAt : null, 
            });
            return newComment;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async postCommentonComment(newCommentData) {
        try {
            // checking if the user posting the comment is has valid userId or not
            const userId = newCommentData.userId.toString();
            if(!mongoose.Types.ObjectId.isValid(userId)) {
                throw new BadRequestError('userId');
            }

            // Checking if the parent comment to be commented is present or not
            const parentId = newCommentData.parentId.toString();
            let parentComment = await Comment.findById(parentId);
            if(!parentComment) {
                throw new NotFoundError("Parent Comment", parentId);
            }

            const newComment = await Comment.create({
                parentName: 'comment',
                parentId: newCommentData.parentId,
                text: newCommentData.text,
                userId: newCommentData.userId,
                createdAt: (newCommentData.createdAt) ? newCommentData.createdAt : null,
            });
            return newComment;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = CommentRepository;