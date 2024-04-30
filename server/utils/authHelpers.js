const bcrypt = require('bcryptjs')

exports.hashPassword = async (password) => {
    const salt = 10
    const hashedPassword = bcrypt.hash(password, salt)
    return hashedPassword
}

exports.comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}