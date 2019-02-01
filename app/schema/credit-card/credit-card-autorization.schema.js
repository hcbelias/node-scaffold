var ajv = require('./../index');

var CreditCardAuthorizationSchema = {
    "$id": "http://mynet.com/schemas/creditCardAuthorization.json#",
    "title": "CreditCardAuthorizationSchema",
    "properties": {
        token: {
            type: "string",
        },
        merchantTransactionId: {
            type: "string",
        },
        hostTransactionId: {
            type: "string",
        },
        responseReason: {
            type: "string",
        },
        responseDescription: {
            type: "string",
        },
        responseCode: {
            type: "string",
        }
    },
    "required": [
        "token",
        "merchantTransactionId",
        "hostTransactionId",
        "responseReason",
        "responseDescription",
        "responseCode"
    ],
    "type": "object"
};

module.exports = {
    creditCardAuthorizationValidator: ajv.compile(CreditCardAuthorizationSchema),
    creditCardAuthorizationSchema: CreditCardAuthorizationSchema
};