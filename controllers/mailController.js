const MailModel = require('../models/mailModel');
const { validateEmail } = require('../utils/index');

const getMailsController = async (req, res) => {
	try {
		const mails = await MailModel.find();
		res.status(200).send(mails);
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			success: false,
			message: 'Internal Server Error',
			error,
		});
	}
};

const storeMailController = async (req, res) => {
	try {
		const { email } = req.body;
		if (!validateEmail(email)) {
			return res.status(500).send({
				success: false,
				message: 'Invalid Email address',
			});
		}
		const mail = await MailModel.findOne({ email: email });
		if (mail) {
			return res.status(500).send({
				success: false,
				message: 'Email already exists',
			});
		}
		await new MailModel({
			email,
		}).save();
		return res.status(201).send({
			success: true,
			message: 'Subscribed',
		});
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			success: false,
			message: 'Internal Server Error',
			error,
		});
	}
};

module.exports = {
	getMailsController,
	storeMailController,
};
