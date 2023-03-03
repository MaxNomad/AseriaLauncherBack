
exports.csrfProtect = (req, res) => {

    if (req.csrfToken) {
        
        res.cookie("XSRF-TOKEN", req.csrfToken());
      } next();

};