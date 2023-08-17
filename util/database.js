const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','241021@Vinay', { 
    
    
    dialect:'mysql',
    host:'localhost'

});

module.exports = sequelize;