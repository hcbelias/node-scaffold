var ajv = require('./../index');
var CardDetailsSchema = {
    "$id": "http://mynet.com/schemas/cardDetails.json#",
    "title": "CardDetailsSchema",
    "properties": {
        cvv: {
            type: "string",
        },
        expirationYear: {
            type: "string",
        },
        expirationMonth: {
            type: "string",
        },
        number: {
            type: "string",
        },
        type: {
            type: "string",
        },
        holderName: {
            type: "string",
        }
    },
    "required": [
        "cvv",
        "expirationYear",
        "expirationMonth",
        "number",
        "type",
        "holderName",
    ],
    "type": "object"
};

module.exports = {
    cardDetailsValidator: ajv.compile(CardDetailsSchema),
    cardDetailsSchema: CardDetailsSchema
};