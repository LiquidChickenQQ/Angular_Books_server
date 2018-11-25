const Sequelize = require('sequelize');
const sequelize = new Sequelize( 'bookApi', 'postgres', 'Laurabodle1',  {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(
        function() {
            console.log('connected to bookApi');
        },
        function(err) {
            console.log(err)
        }
);

module.exports = sequelize