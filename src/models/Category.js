module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
   },
   {
     timestamps:false,
     tableName: 'categories',
     underscored: true,
   });

   Category.associate = (models) => {
    Category.hasMany(models.PostCategory,
      { foreignKey: 'categoryId', as: 'Category' });
   };

  return Category;
}