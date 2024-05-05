const express = require('express');
const { user, follow } = require('../../controllers');

const userRouter = express.Router();

// going to controllers
userRouter.post('/:userId/follow/:targetUserId', follow.followUser);
userRouter.post('/', user.createUser) // createUser 
userRouter.get('/:userId', user.getUser) // getUser through Id
userRouter.put('/:userId', user.updateUser) // updateUser through Id

module.exports = userRouter;