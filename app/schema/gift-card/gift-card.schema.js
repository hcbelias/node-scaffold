var ajv = require('../index');
var GiftCardSchema = {
    "$id": "http://mynet.com/schemas/giftCard.json#",
    "title": "GiftCardSchema",
    "properties": {
        transactionType: {
            type: "string",
        },
        currencyCode: {
            type: "string",
        },
        locale: {
            type: "string",
        },
        customProperties: {
            type: "string",
        },
        channel: {
            type: "string",
        },
        siteId: {
            type: "string",
        },
        orderId: {
            type: "string",
        },
        //profile: {
          //  $ref: "",
       // }
        //inquireBalanceResponse: {
            //type: "string",
        //}
        //autorizationResponse: {
            //type: "string",
        //}
    },
    "required": [
        "transactionType",
        "currencyCode",
        "locale",
        "customProperties",
        "channel",
        "siteId",
        "orderId",
    ],
    "type": "object"
};

module.exports = {
    giftCardValidator: ajv.compile(GiftCardSchema),
    giftCardSchema: GiftCardSchema
};