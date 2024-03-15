const express = require('express');

const {
	getMailsController,
	storeMailController,
} = require('../controllers/mailController');

// router object
const router = express.Router();

// routing

// GetallMails || GET

router.get('/', getMailsController);

// StoreMail || POST

router.post('/', storeMailController);

module.exports = router;
