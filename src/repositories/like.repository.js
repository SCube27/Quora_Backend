const mongoose = require('mongoose');

const { BadRequestError, NotFoundError, ConflictError } = require('../errors');
const { Question, Answer, Comment, User } = require('../models/index');

class LikeRepository {
    async postLike(Id, userId, type) { // Here Id is for entities like comment answer or question
        try {
            Id = Id.toString();
            userId = userId.toString();
                        
            // Checking if the Id for the entity(Q, A, C) to be liked is valid or not
            if(!mongoose.Types.ObjectId.isValid(Id)) {
                throw new BadRequestError(`${type} Id`);
            }

            // Checking if the userId of user posting the like is valid or not
            if(!mongoose.Types.ObjectId.isValid(userId)) {
                throw new BadRequestError(`userId`);
            }

            let Model = undefined;
            switch(type) {
                case "question":
                    Model = Question;
                    break;
                case "answer":
                    Model = Answer;
                    break;
                case "comment":
                    Model = Comment;
                    break;
                dafault:
                    throw new Error('Type has to be from either Question Answer Comment only');
            }
            
            // Checking if the entity to be liked is present or not
            let entity = await Model.findById(Id);
            if(!entity) {
                throw new NotFoundError(type, "Id", Id);
            }

            // Checking if the userId of user liking is present or not
            let user = await User.findById(userId);
            if(!user) {
                throw new NotFoundError("User", "UserId", userId);
            }

            // Checking if a user has already liked the content
            if(entity.likedBy.includes(userId)) {
                throw new ConflictError("Like", "User", userId);
            }

            entity = await Model.findByIdAndUpdate(Id, 
                {
                    $push: { likedBy : userId },
                },
                { new : true }
            );
            return entity;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = LikeRepository;
// type Id : params
// userId : body