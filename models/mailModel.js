const mongoose = require('mongoose');

const mailSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
	},
	{ timestamps: true },
);

const Mail = mongoose.model('Mail', mailSchema);
module.exports = Mail;
