module.exports = (sequelize, Sequelize) => {
    const Announcement = sequelize.define("announcements", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      content: {
        type: Sequelize.STRING
      }
    });
  
    return Announcement;
  };