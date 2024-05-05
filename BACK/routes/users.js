const userRouter = require('express').Router();
const {
    findAllUsers,
    createUser,
    updateUser,
    checkEmptyNameEmailPassword,
    deleteUser,
    findUserById
} = require('../middlewares/users')

const {
    sendAllUsers,
    sendUserCreated,
    sendUserUpdated,
    sendUserDeleted,
    sendUserById
} = require('../controllers/users');

userRouter.get('/users', findAllUsers, sendAllUsers);
userRouter.post('/users', findAllUsers, createUser, sendUserCreated);

userRouter.get('/users/:id', findUserById, sendUserById);

userRouter.put('/users/:id', updateUser, sendUserUpdated) // Обработка добавления вакансии в favorites

userRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = userRouter;