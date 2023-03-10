module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      displayName: { 
        type: Sequelize.STRING,
        field: 'display_name',
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: { type: Sequelize.STRING },
      image: { type: Sequelize.STRING },
    });
  },

  down: async (queryInterface, _Sequelize) => {
return queryInterface.dropTable('users')
  }
};
