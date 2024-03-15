const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			`${process.env.MONGODB_CONNECTION_STRING}`,
		);
	} catch (error) {
		console.log(`Error in MongoDB ${error}`);
	}
};

module.exports = connectDB;
