module.exports = (sequelize, Sequelize) => {
    const Assignment = sequelize.define("assignments", {
        name: {
            type: Sequelize.STRING
          },
        moduleNum: {
            type: Sequelize.INTEGER
          },
        link: {
            type: Sequelize.STRING
          },
        userId: {
            type: Sequelize.INTEGER
          }
    });
  
    return Assignment;
  };