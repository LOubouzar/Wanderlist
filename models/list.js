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
  List.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    List.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return List;
};