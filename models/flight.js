module.exports = (sequelize, DataTypes) => {
    const Flight = sequelize.define('flight', {
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
    Flight.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Flight.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Flight;
  };