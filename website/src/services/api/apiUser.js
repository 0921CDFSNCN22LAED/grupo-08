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
    getUserValidation: async (password) => {
        console.log(email);
        const user = db.User.findOne({
            //where: { email: email },
            where: { password: password },
        });
        return user;
    },
};
