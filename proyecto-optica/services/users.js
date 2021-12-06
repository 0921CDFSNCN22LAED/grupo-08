const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/usersDateBase.json");
const usersDataBase = fs.readFileSync(usersFilePath);
const users = JSON.parse(usersDataBase);

function saveUsers() {
  const usersText = JSON.stringify(users, null, 4);
  fs.writeFileSync(usersFilePath, usersText, "utf-8");
}
module.exports = {
  users,
  saveUsers,

  registerUser: (body) => {
    const user = {
      userId: Date.now(),
      ...body,
    };
    const verification = users.find((user) => {
      return body.email == user.email;
    });
    if (verification === undefined) {
      users.push(user);
      saveUsers();
      return true;
    } else {
      return false;
    }
  },
};
