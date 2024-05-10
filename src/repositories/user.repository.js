const mongoose = require('mongoose');

const { NotFoundError, ConflictError, BadRequestError } = require('../errors');
const { User } = require('../models/index');

class UserRepository {
    async createUser(userData) {
        try {
            const { username, email } = userData;
            // finding if a user with same username exists
            let user = await User.findOne({ username });
            if(user) {
                throw new ConflictError("User", "Username", username);
            }  

            // finding if a user with same email exists
            user = await User.findOne({ email });
            if(user) {
                throw new ConflictError("User", "Email", email);
            }

            const newUser = await User.create({
                username: userData.username,
                email: userData.email,
                bio: (userData.bio) ? userData.bio : "No bio",
            });
            return newUser;
        } catch (error) {
            console.log('Cannot create a new User');
            console.log(error);
            throw error;
        }
    }

    async getUser(userId) {
        try {
            // converting userId to string and checking if it's valid or not before searching
            userId = userId.toString();
            if(!mongoose.Types.ObjectId.isValid(userId)) {
                throw new BadRequestError('user Id');
            }

            const findUser = await User.findById(userId)
            if(!findUser) {
                throw new NotFoundError('UserID', userId);
            }
            return findUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateUser(userId, updateData) {
        try {
            // converting userId to string and checking if it's valid or not before searching
            userId = userId.toString();
            if (!mongoose.Types.ObjectId.isValid(userId)) {
                throw new BadRequestError('user Id');
            }
    
            // Constructing the update object with only the fields that are provided
            let updateObject = {};
            if (updateData.username) {
                updateObject.username = updateData.username;
            }
            if (updateData.email) {
                updateObject.email = updateData.email;
            }
            if (updateData.bio !== undefined) {
                updateObject.bio = updateData.bio;
            }
    
            // Updating only the specified fields
            const updatedUser = await User.findByIdAndUpdate(userId, updateObject, { new: true });
    
            if (!updatedUser) {
                throw new NotFoundError('User ID', userId);
            }
            return updatedUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }    
}

module.exports = UserRepository;