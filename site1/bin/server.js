var express = require('express');
var winston = require('winston'); // for transports.Console

const app = express();
const logConfiguration = {
    'transports': [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.label({
            label: `Label️`
        }),
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
    )
};
const logger = winston.createLogger(logConfiguration);

app.get('/', (req, res) => {
    logger.info('in / endpoint');
    res.json({
        message: 'Hello World'
    });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Service listening on port ${port}`));
