 const validateSession = (req, res, next) => {
     if(!req.session.email){
        res.redirect('login')
     }
     next()
 }

 module.exports =  validateSession 