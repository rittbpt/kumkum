const Userinfo = require('./Userinfo')
const JWT = require('jsonwebtoken');

module.exports = function (app) {
    app.post('/check', async (req, res) => {
        const usern = JWT.decode(req.body.token)
        if (usern === null || usern.exp === null || usern.username === null || usern.iat === null) {
            res.send({ chk: false })
            return;
        }
        const finduser = await Userinfo.findOne({ username: usern.username })
        if (finduser !== null && usern.exp - usern.iat !== 0) {
            res.send({ chk: true })
        } else {
            res.send({ chk: false })
        }
    })
}

