module.exports = (sequelize, Sequelize) => {
    const Announcement = sequelize.define("announcements", {
      content: {
        type: Sequelize.STRING
      }
    });
  
    return Announcement;
  };