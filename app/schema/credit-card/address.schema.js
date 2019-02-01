var ajv = require('./../index');

var AddressSchema = {
    "$id": "http://mynet.com/schemas/address.json#",
    "title": "AddressSchema",
    "properties": {
        country: {
            type: "string",
        },
        prefix: {
            type: "string"
        },
        companyName: {
            type: "string"
        },
        jobTitle: {
            type: "string"
        },
        postalCode: {
            type: "string",
        },
        county: {
            type: "string"
        },
        suffix: {
            type: "string"
        },
        firstName: {
            type: "string",
        },
        phoneNumber: {
            type: "string",
        },
        faxNumber: {
            type: "string"
        },
        middleName: {
            type: "string"
        },
        state: {
            type: "string",
        },
        email: {
            type: "string",
        },
        city: {
            type: "string",
        },
        lastName: {
            type: "string",
        },
        address1: {
            type: "string",
        },
        address2: {
            type: "string"
        },
        address3: {
            type: "string"
        }
    },
    "required": [
        "country",
        "postalCode",
        "firstName",
        "phoneNumber",
        "state",
        "email",
        "city",
        "lastName",
        "address1",
    ],
    "type": "object"
};


module.exports = {
    addressValidator: ajv.compile(AddressSchema),
    addressSchema: AddressSchema
};