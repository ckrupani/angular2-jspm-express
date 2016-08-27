var path = require('path');

module.exports = (req, res, next) => {
    var fileName = path.resolve(APP_PATH + '/app_client/index.html');
    res.sendFile(fileName, (error) => {
        if (error) {
            console.log(error);
            res.status(error.status).end();
        }
        else {
            console.log('Sent: ', fileName);
        }
    });
};