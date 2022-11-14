module.exports = app => {
    const userController = require('../controllers/user.controller');
    const { signup, login } = userController;
    const userAuth = require('../middlewares/user.auth');

    const router = require("express").Router();

    router.post('/signup', userAuth.saveUser, signup);

    router.post('/login', login );

    app.use('/api/users/', router);
};
