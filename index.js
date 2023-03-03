require('dotenv').config();
const express = require('express');
const router = express.Router();
const app = express();
const { ValidationError } = require('express-validation')
const ProfileRouter = require('./profile/routes.config');
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors');
const csrf = require('csurf');
const Helper = require('./helpers/app.helper')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

if (Helper.SrtToBool(process.env.APP_debug)){
    app.use(morgan('tiny'));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())
app.use(process.env.API_VER, router);
app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json({ error_details: err })
    }
    return res.status(500).json({ error_details: err })
})
ProfileRouter.routesConfig(router);

app.listen(process.env.APP_PORT, process.env.APP_IP, () => {
    console.log('app listening at port %s', process.env.APP_PORT || 3000);
});

