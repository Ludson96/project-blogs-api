module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: { 
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        }
      },
      published: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
   return queryInterface.dropTable('blog_posts');
  }
};
