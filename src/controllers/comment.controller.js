const { StatusCodes } = require('http-status-codes');

const { CommentRepository } = require('../repositories/index');
const { CommentService } = require('../services/index');
const { NotImplementedError } = require('../errors/index');

const commentService = new CommentService(new CommentRepository());

async function postCommentonAnswer(req, res, next) {
    try {
        const newComment = await commentService.postCommentonAnswer(req.params.answerId, req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Posted comment on answer",
            error: {},
            data: newComment,
        });
    } catch (error) {
        next(error);
    }
}

async function postCommentonComment(req, res, next) {
    try {
        const newComment = await commentService.postCommentonComment(req.params.commentId, req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Posted comment on comment",
            error: {},
            data: newComment,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    postCommentonAnswer,
    postCommentonComment
}