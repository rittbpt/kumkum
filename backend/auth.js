const Userinfo = require('./Userinfo')
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function (app) {
  app.post('/register', async (req, res) => {
    try {
      var ch = 0
      const user = new Userinfo(req.body);
      console.log(user)
      if (user.username.trim() == "" || user.password.trim() == "" || user.last_name.trim() == "" || user.first_name.trim() == "") {
        ch = 1
        res.send({ ch })
        return
      }
      const finduser = await Userinfo.findOne({ username: user.username })
      if (finduser != null) {
        ch = 2
        res.send({ ch })
        return
      }
      else {
        bcrypt.hash(user.password, saltRounds, async (err, hash) => {
          if (err) throw err;
          if (hash) {
            user.password = hash
            await user.save();
            ch = 3
            res.send({ ch })
            return
          }
        })
      }
    }
    catch (err) {
      res.send(err)
    }
  });

  app.post('/login', async (req, res) => {
    try {
      var ch = 0
      const { username, password } = new Userinfo(req.body);
      if (username.trim() == "" || password.trim() == "") {
        ch = 1
        res.send({ ch: ch })
        return
      }
      const finduser = await Userinfo.findOne({ username: username })
      bcrypt.compare(password, finduser.password, function (err, result) {
        if (result) {
          ch = 2
          const token = JWT.sign({
            username: finduser.username
          },
            "rit",
            { expiresIn: "1h" }
          )
          res.send({ ch: ch, token: token })
          return
        }
        ch = 3
        res.send({ ch: ch })
        return
      })
    }
    catch (err) {
      console.log(err)
    }
  });

  app.get('/show', async (req, res) => {
    try {
      const youser = await Userinfo.find()
      res.send(youser)
    }
    catch (err) {
      res.send(err.message)
    }
  })
}

