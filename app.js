const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

/**
 * Create an application server 
 */
const app = express();
global.APP_PATH = __dirname;

/**
 * Using built-in and third patry middlewares. 
 */
app.use(favicon(path.join(__dirname, 'app_client', 'assets', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app_client')));
// app.use(express.static(path.join(__dirname)));

/**
 * Fetch all the routes and set them on application 
 */
const applicationRouter = require('./routes/applicationRoutes/index');
const apiRouter = require('./routes/apiRoutes/index');

app.use('/api', apiRouter);
app.use('/', applicationRouter);

/**
 * Catch 404 and forward to error handler
 */
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/**
 * Error handlers
 */

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

module.exports = app;