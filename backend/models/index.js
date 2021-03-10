const Sequelize = require("sequelize");

const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const User = require("./user.model")(sequelize, Sequelize);
const Invited = require("./invite.model")(sequelize, Sequelize);

Invited.belongsTo(User, { foreignKey: "userId" });

sequelize.sync();

const db = {
  Sequelize,
  sequelize,
  User,
  Invited,
};

module.exports = db;
