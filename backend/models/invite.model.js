module.exports = (sequelize, Sequelize) => {
  const Invited = sequelize.define("invite", {
    userId: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });

  return Invited;
};
