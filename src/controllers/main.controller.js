const home_page = (req, res) => {
    //pass user data to navbar
    const email = req.session.email
    res.render('index', { email : email })
}

const login_page = (req, res) => {
    //pass user data to navbar
    const email = req.session.email
    res.render('login', { email : email })
}

const private_page = (req, res) => {
    //pass user data to navbar
    const email = req.session.email
    res.render('private', { email : email })
}

const login = (req, res) => {
    const { email, password } = req.body
    if(email == 'test@gmail.com' && password == 123){ //fake data
        req.session.email = email;
        res.redirect('/private')
    } else {
        res.redirect('/login')
    }
}


module.exports  = {
    home_page,
    login_page,
    private_page,
    login
}