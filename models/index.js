const Profile = require('./Profile');
const User = require('./User');

Profile.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { Profile, User };