const passport = require('../lib/passport')
const {User} = require('../models')

module.exports = {
    register: (req,res,next) => {
        User.register(req.body)
            .then( () => {
                res.redirect('/login')
            })
            .catch(err => next(err))
    },
    login: passport.authenticate('local', {
        successRedirect:'/',
        failureRedirect:'/login',
        failureFlash:true
    })
}