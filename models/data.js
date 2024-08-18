// models/data.js
module.exports = (sequelize, DataTypes) => {
    const Data = sequelize.define('Data', {
    amperaje: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    });
  
    Data.associate = (models) => {
      // Associations can be defined here
      Data.belongsTo(models.User, { foreignKey: 'userId' });
    };
  
    return Data;
};