module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
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
    // We're saying that a List should belong to a User
    // A List can't be created without a User due to the foreign key constraint
    List.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return List;
};