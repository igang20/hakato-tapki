const authRouter = require('express').Router();
const controller = require("../controllers/authController");

const { check } = require("express-validator"); // проверка через пакет валидность данных чтоб не писать всё вручную (DLS)

authRouter.post("/registration", [
    check('username', "Username cannot be empty").notEmpty(), // фикс пустых символов (DLS)
    check('password', "The password must not be less than 4 or less than 10 characters").isLength({ min: 4, max: 10 }) // фикс пустых символов (DLS)
], controller.registration);

authRouter.post("/login", controller.login);
// к каждому роутеру передается метод и класса со своими объектами (DLS)

module.exports = authRouter;