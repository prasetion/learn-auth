const passport = require('passport')
// const localStrategy = require('passport-local').Strategy
const { Strategy:JwtStrategy,ExtractJwt } = require('passport-jwt')
const { User } = require('../models')

// passport jwt options
const options = {
    jwtFromRequest:ExtractJwt.fromHeader('Authorization'),
    secretOrKey:'Ini rahasia'
}

passport.use(new JwtStrategy(options, async (payload, done) => {
    User.findByPk(payload.id)
        .then(user => done (null,user))
        .catch(err => done (err, false))
}))

// async function authenticate(username,password,done){
//     try {
//         const user = await User.authenticate({ username, password })
//         return done (null, user)
//     } catch (err) {
//         return done (null, false, { message: err.message })
//     }
// }

// passport.use(
//     new localStrategy({usernameField:'username', passwordField:'password'}, authenticate)
// )

// // serialize
// passport.serializeUser(
//     (user,done) => done(null,user.id)
// )

// // deserialize
// passport.deserializeUser(
//     async (id,done) => done(null, await User.findByPk(id))
// )

module.exports = passport