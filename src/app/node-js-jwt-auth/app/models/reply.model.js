module.exports = (sequelize, Sequelize) => {
    const Reply = sequelize.define("replys", {
        assignmentId: {
            type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER
        },
        content: {
            type: Sequelize.STRING
        }
    });

    return Reply;
};