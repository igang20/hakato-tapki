const User = require('../models/user');
const bcrypt = require('bcryptjs');

const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');

const secret = process.env.SECRET;

const generateAccessToken = (id, password) => {
    const payload = {
        id,
        password // это то что передается и шифруется (DLS)
    }
    return jwt.sign(payload, secret, { expiresIn: "48h" }) // последнее это про жизнь токена (DLS)
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({ message: "Error during registration", errors })
            }

            const { username, password, email } = req.body
            const candidate = await User.findOne({ username })
            if (candidate) {
                return res.status(400).send({ message: "A user with the same name already exists" })
            }

            const salt = bcrypt.genSaltSync(7);
            const hashpassword = bcrypt.hashSync(password, salt);
            const user = new User({ username, password: hashpassword, email })
            await user.save()
            return res.send({ message: "User successfully registered" })
        } catch (e) {
            console.log(e)
            res.status(400).send({ message: 'Registration error' })
        }
    }
    async login(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username })
            if (!user) {
                return res.status(400).send({ message: `A user ${username} not found` })
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).send({ message: `Incorrect username or password` })
            }
            const token = generateAccessToken(user._id) // генерация jwt токена с определенными данными (DLS)
            return res.send({ token }) // http://localhost:3000/auth/login в POSTMAN должно приходить в jwt токене (DLS)
        } catch (e) {

        }
    }
};

module.exports = new authController()


