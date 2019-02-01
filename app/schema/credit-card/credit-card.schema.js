var ajv = require('./../index');

var ProfileSchema = require('./profile.schema');
var AddressSchema = require('./address.schema');
var CardDetailsSchema = require('./card-details.schema');
var CreditCardAutorizationSchema = require('./credit-card-autorization.schema');


var CreditCardSchema = {
    "$id": "http://mynet.com/schemas/creditCard.json#",
    "title": "CreditCardSchema",
    "required": [
        "paymentId",
        "transactionId",
        "transactionType",
        "transactionTimestamp",
        "channel",
        "paymentMethod",
        "orderId",
        "amount",
        "currencyCode",
        "locale",
        "siteId",
        "gatewayId",
        "profile",
        "authorizationResponse",
        "billingAddress",
        "shippingAddress",
        "cardDetails"
    ],
    "properties": {
        paymentId: {
            type: "string",
        },
        transactionId: {
            type: "string",
        },
        transactionType: {
            type: "string",
        },
        transactionTimestamp: {
            type: "string",
        },
        channel: {
            type: "string",
        },
        paymentMethod: {
            type: "string"
        },
        orderId: {
            type: "string"
        },
        amount: {
            type: "string"
        },
        currencyCode: {
            type: "string"
        },
        locale: {
            type: "string",
        },
        siteId: {
            type: "string",
        },
        gatewayId: {
            type: "string"
        },
        profile: {
            "$ref": "profile.json"
        },
        cardDetails: {
            "$ref": "cardDetails.json"
        },
        shippingAddress: {
            "$ref": "address.json"
        },
        billingAddress: {
            "$ref": "address.json"
        },
        authorizationResponse: {
            "$ref": "creditCardAuthorization.json"
        }

    }
};

module.exports = {
    creditCardValidator: ajv
        .compile(CreditCardSchema),
    creditCardSchema: CreditCardSchema

};