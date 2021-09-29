const {
    User
} = require('../models');
const userData = [{
        username: 'Hubert',
        password: 'HerdNerd'
    },
    {
        username: 'Lawrence',
        password: 'TheLowLow1'
    },
    {
        username: 'Dayne',
        password: 'GreatDayne'
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;