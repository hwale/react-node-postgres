const User = require('../services/users');

module.exports = app => {
    app.post('/api/users', User.create)
}