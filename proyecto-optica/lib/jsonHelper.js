const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/usersDateBase.json");
const usersDataBase = fs.readFileSync(usersFilePath);
const users = JSON.parse(usersDataBase);

function saveUsers() {
  const usersText = JSON.stringify(users, null, 4);
  fs.writeFileSync(usersFilePath, usersText, "utf-8");
}
