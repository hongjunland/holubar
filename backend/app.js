const createError = require('http-errors');
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

const { swaggerUi, specs } = require('./src/swagger');
// const itemsRouter = require('./src/items/items.controller');
const salesRouter = require('./src/sales/sales.controller');
const s3Router = require('./src/S3/server.js');
const userRouter = require('./src/user/user.controller');
const donationRouter = require('./src/donation/donation.controller');
const nftRouter = require('./src/nft/nft.controller');



const app = express();


app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// app.use('/items', itemsRouter);
app.use('/sales', salesRouter);
app.use('/user', userRouter);
app.use('/donation', donationRouter);
app.use('/s3', s3Router);
app.use('/nft', nftRouter);


// catch 404 and forward to error handler
app.use(function(req, res) {
	res.status(404);
	res.send(createError(404));
});

// error handler
app.use(function(err, req, res) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
});

module.exports = app;
