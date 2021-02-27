module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comments", {
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

    return Comment;
};