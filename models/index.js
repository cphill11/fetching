const Pet = require('./Pet');
const User = require('./User');

Pet.belongsTo(User, {
    foreignKey: 'owner_id',
});

User.hasMany(Pet, {
    foreignKey: 'owner_id'
});

module.exports = { Pet, User };