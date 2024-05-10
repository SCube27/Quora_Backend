const { StatusCodes } = require("http-status-codes");

const { UserService } = require('../services/index');
const { UserRepository } = require('../repositories/index'); 
const { NotImplementedError, BadRequestError } = require('../errors/index');

const userService = new UserService(new UserRepository());

async function createUser(req, res, next) {
    try {
        const newUser = await userService.createUser(req.body);
        
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Created a New User',
            error: {},
            data: newUser,
        });
    } catch (error) {
        next(error);
    }
}

async function getUser(req, res, next) {
    try {
        const findUser = await userService.getUser(req.params.userId);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'User Data Fetched',
            error: {},
            data: findUser,
        });
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        const updateBody = req.body;

        // Checking for empty fields
        if(!updateBody.username && !updateBody.email && !updateBody.bio) {
            throw new BadRequestError("Username, Email & Bio", [
                "At least one of username, email or bio should be passed",
              ]);
        }

        const updatedUser = await userService.updateUser(req.params.userId, updateBody);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Updated the User for given ID',
            error: {},
            data: updatedUser,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    getUser, 
    updateUser
};