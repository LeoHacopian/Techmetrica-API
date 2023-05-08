const SECRET_KEY = "isdafgyq67hdygnxr977tr78xb8xnebvr78oxm"
const JWT_EXPIRES_IN = 90000
const jwt = require("jsonwebtoken")

function generateToken (data) {
    return jwt.sign(data, SECRET_KEY, { expiresIn: JWT_EXPIRES_IN})
}

function createUserJwt (user) {
    const payload = {
        user_id: user.user_id
    }

    return generateToken(payload)
}

function validateToken (token) {
    try {
        const decodedToken = jwt.verify(token, SECRET_KEY)
        return decodedToken
    } catch (error) {
        return error
    }
}

module.exports = {
    validateToken
}