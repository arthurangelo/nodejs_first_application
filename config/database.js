const Sequelize = require('sequelize');

let sequelize = new Sequelize('pds2', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 5,
        max: 20,
        aquire: 30000,
        idle: 10000,
    },
});


sequelize.sync();

module.exports = sequelize;
