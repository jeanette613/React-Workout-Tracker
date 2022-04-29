const User = require('../../models/User')

const create = (req, res, next) => {
    try {
        const createdUser = await User.create(req.body)
        res.status(200).json({
            user: {
                name: createdUser.name,
                email: createdUser.email
            }
        })
    } catch (error) {
        res.staus(400).json({ message: error.mesage })
    }
}

module.exports = {
    create
}