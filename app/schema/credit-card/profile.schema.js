var ajv = require('./../index');

var ProfileSchema = {
    "$id": "http://mynet.com/schemas/profile.json#",
    "title": "ProfileSchema",
    "properties": {
        id: {
            type: "string"
        },
        phoneNumber: {
            type: "string"
        },
        email: {
            type: "string"
        }
    },
    "required": [
        "id",
        "phoneNumber",
        "email",
    ],
    "type": "object"
};

module.exports = {
    profileValidator: ajv.compile(ProfileSchema),
    profileSchema: ProfileSchema
};