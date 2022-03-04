const Profile = require('./Profile');
const User = require('./User');

Profile.belongTo(User, {
    foreignKey: 'owner_id'
});

User.hasMany(Profile, {
    foreignKey: 'owner_id'
});

module.exports = { Profile, User };