const apicache = require('apicache');
const Helper = require('../../helpers/app.helper')

apicache.options({ debug: Helper.SrtToBool(process.env.APP_debug)})
let cache = apicache.middleware

exports.ApiCache = (min)=>{
    return cache(`${min} minutes`)
}
exports.ApiCacheClear = (req)=>{
    return cache.clear(req.originalUrl)
}