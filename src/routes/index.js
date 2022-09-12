const router = require('express').Router()
const { home_page, login_page, login, private_page } = require('../controllers/main.controller')
const hasSession = require('../middleware/hasSession')
const validateSession = require('../middleware/validateSession')



router.get('/', home_page)

router.get('/login', hasSession ,login_page )

router.post('/login', login)

router.get('/private', validateSession , private_page)


module.exports = router