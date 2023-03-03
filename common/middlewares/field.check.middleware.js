const { Joi } = require('express-validation')

exports.ID_check = {
    query: Joi.object({
        id: Joi.number()
            .integer()
            .required(),
    }),
};

exports.profile = {
    query: Joi.object({
        name: Joi.string()
            .required(),
    }),
};

exports.empty = {
    query: Joi.object({
    }),
    body: Joi.object({
    }),
};

exports.page = {
    query: Joi.object({
        page: Joi.number()
            .integer()
    }),
};

exports.categoryList = {
    query: Joi.object({
        page: Joi.number()
            .integer(),
        category: Joi.number()
            .integer()
            .required(),
    }),

};


