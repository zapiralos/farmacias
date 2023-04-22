module.exports = (sequelize, DataTypes) => {
  const Shift = sequelize.define('Shift', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    tableName: 'shifts',
    timestamps: false
  });

  Shift.associate = (models) => {
    Shift.belongsTo(models.Pharmacy, {
      foreignKey: {
        name: 'pharmacyId',
        allowNull: false
      }
    });
  };

  return Shift;
};
