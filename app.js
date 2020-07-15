const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//database connection
const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://admin:admin@sos.qbulx.mongodb.net/SOS2020?retryWrites=true&w=majority',
    {
        useMongoClient: true
    });

//creating router vars
const landingRouter = require('./routes/landing');
const signUpRouter = require('./routes/signUp');
const signInRouter = require('./routes/signIn');
const logoutRouter = require('./routes/logout');
const myAccountRouter = require('./routes/myAccount');
const addBusinessRouter = require('./routes/addBusiness');
const businessesRouter = require('./routes/businesses');


//vanilla app created
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', landingRouter);
app.use('/signUp', signUpRouter);
app.use('/signIn', signInRouter);
app.use('/logout', logoutRouter);
app.use('/myAccount', myAccountRouter);
app.use('/addBusiness', addBusinessRouter);
app.use('/businesses', businessesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
