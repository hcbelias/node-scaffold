'use strict'


function getProducts(req, res) {
    var sdkInstance = req.sdkInstance;
    return sdkInstance.get({
        url: '/ccstore/v1/products',
        callback: function (err, response) {
            if (err) {
                return res.status(500).json({
                    err
                });
            }
            return res.status(200).json(JSON.parse(response));
        }
    });
}


module.exports = {
    getProducts,
};