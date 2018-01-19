const express = require('express')
const router = express.Router()
const pagesController = require(`${process.cwd()}/controllers/pagesController`)

router.get('/', pagesController.home)
router.get('/about', pagesController.about)
router.get('/contact', pagesController.contact)
router.get('/services', pagesController.services)


module.exports = router