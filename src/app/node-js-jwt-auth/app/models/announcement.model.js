module.exports = (sequelize, Sequelize) => {
    const Announcement = sequelize.define("announcements", {
      content: {
        type: Sequelize.STRING
      },
      hyperlink: {
        type: Sequelize.STRING
      }
    });
  
    return Announcement;
  };