const express = require('express')
const {adUser} = require('../controller/controller')
const router = express.Router()




router.route('/')
.post(adUser)

module.exports = router