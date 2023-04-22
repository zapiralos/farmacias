const { Sequelize } = require('sequelize');
const UserModel = require('./models/users');
const PharmacyModel = require('./models/pharmacies');
const ShiftModel = require('./models/shifts');

const sequelize = new Sequelize('farmacias_de_turno', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error));

const User = UserModel(sequelize, Sequelize);
const Pharmacy = PharmacyModel(sequelize, Sequelize);
const Shift = ShiftModel(sequelize, Sequelize);

Pharmacy.hasMany(Shift);
Shift.belongsTo(Pharmacy);

module.exports = { sequelize, User, Pharmacy, Shift };


