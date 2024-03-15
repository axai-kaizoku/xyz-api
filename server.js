const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./database/index');
const mailRoutes = require('./routes/mailRoutes');
const corsOptions = require('./config/corsOptions');

// configure dotenv
dotenv.config();

// database connection
connectDB();

const app = express();
const PORT = process.env.SERVER_PORT || 8080;

// middlewares

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/mailing', mailRoutes);

app.get('/', (req, res) => {
	return res.json({ message: 'Server is running!' });
});

app.listen(PORT, () => {
	console.log(`Server is up and running http://localhost:${PORT}`);
});
