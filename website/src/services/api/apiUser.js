const db = require("../../database/models");

module.exports = {
    getListUsers: async () => {
        try {
            const users = await db.User.findAll({
                raw: true,
                attributes: {
                    exclude: ["password", "confirmPassword", "admin"],
                },
            });
            return users;
        } catch (error) {
            console.log(error);
        }
    },
    getUserById: async (id) => {
        try {
            const user = await db.User.findByPk(id, {
                raw: true,
                attributes: {
                    exclude: ["password", "confirmPassword", "admin"],
                },
            });

            return user;
        } catch (error) {
            console.log(error);
        }
    },
    getUserValidation: async (email) => {
        console.log(email);
        const user = db.User.findOne({
            //where: { email: email },
            where: { email: email },
        });
        return user;
    },
<<<<<<< HEAD
    passwordValidation: async (userLogged, password) => {
        try {
            const userLogged = db.User.findOne({});
        } catch (error) {
            console.log(error);
        }
    },
=======
    /* passwordValidation: async (userLogged, password) => {
        const userLogged = User.id;
    }, */
>>>>>>> bbfcc48a791ab721855decc33abd050438c25fa8
};
