module.exports = (sequelize, DataTypes) => {
   const List = sequelize.define('list', {
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    packed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return List;
};