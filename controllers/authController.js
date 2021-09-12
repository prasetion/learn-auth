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
        successRedirect:'/whoami',
        failureRedirect:'/login',
        failureFlash:true
    }),
    whoami: (req,res)=>{
        res.render('profile', req.user.dataValues)
    }
}