const mongoose = require('mongoose');

const { BadRequestError, NotFoundError } = require('../errors');
const { Question, Answer, Comment, User } = require('../models/index');

class LikeRepository {
    async postLike(Id, userId, type) { // Here Id is for entities like comment answer or question
        try {
            Id = Id.toString();
            userId = userId.toString();
                        
            if(!mongoose.Types.ObjectId.isValid(Id)) {
                throw new BadRequestError(`${type} Id`);
            }

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
            
            let entity = await Model.findById(Id);
            if(!entity) {
                throw new NotFoundError(type, "Id", Id);
            }
            let user = await User.findById(userId);
            if(!user) {
                throw new NotFoundError("User", "UserId", userId);
            }
            
            entity = await Model.findByIdAndUpdate(Id, 
                {
                    $push: { likedBy : userId },
                },
                { new : true }
            );

            // if(entity.likedBy.includes(userId)) {
            //     throw new BadRequestError("User Id", undefined, `User already likes the ${type}`);
            // }
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