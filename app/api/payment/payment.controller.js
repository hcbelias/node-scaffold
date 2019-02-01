'use strict'

var CreditCardSchema = require('./../../schema/credit-card/credit-card.schema');
var CreditCardAuthorizationSchema = require('./../../schema/credit-card/credit-card-autorization.schema');

function getCreditCardPaymentAuthorization(responseCode, authorizationCode, ip, transactionId, sessionId) {
    var autorization = {
        responseCode,
        responseDescription: 'Avenue Code Payment Gateway Processor',
        responseReason: 'Testing Payment Gateway',
        authorizationCode,
        hostTransactionId: ip,
        merchantTransactionId: transactionId,
        token: sessionId || "NO_SESSION_ID"
    };

    var valid = CreditCardAuthorizationSchema.creditCardAuthorizationValidator(autorization);

    return valid ? autorization : null;
}

function getResponseBoletoPayment(paymentId, transactionId, transactionTimestamp, amount, code) {
    let response = {
        paymentId: paymentId,
        merchantTransactionId: transactionId,
        hostTransactionTimeStamp: transactionTimestamp,
        amount: amount,
        hostTimestamp: transactionTimestamp,
        response: {
            success: true,
            code: code,
            description: "",
            reason: ""
        }
    }

    return response;
}

function getResponseAuthorization(req) {

    var response;

    var responseDescription = 'inquireBalanceResponse';


    if (req.body.transactionType === '0100') {
        response = {
            authorizationResponse: getPaymentAuthorizationGiftCard('1000', req)
        };
    } else if (req.body.transactionType === '0110') {
        response = {
            voidResponse: getPaymentAuthorizationGiftCard('2000', req)
        };
    } else if (req.body.transactionType === '0400') {
        response = {
            creditResponse: getPaymentAuthorizationGiftCard('3000', req)
        };
    } else if (req.body.transactionType === '0600') {
        response = {
            inquireBalanceResponse: getPaymentAuthorizationGiftCard('5000', req)
        };
    }

    return response;

}


function processCreditCard(req, res) {
    Object.assign(req.body, {
        authorizationResponse: getCreditCardPaymentAuthorization('1000', '9999', req.ip, req.body.transactionId, req.sessionID)
    });

    console.log('================ CREDIT CARD ==============');
    console.log(JSON.stringify(req.body, null, 4));

    let valid = CreditCardSchema.creditCardValidator(req.body);
    return valid ?
        res.status(200).json(req.body) :
        res.status(400).json(CreditCardSchema.creditCardValidator.errors);
}

function processGeneric(req, res) {
    console.log('================ GENERIC ==============');
    console.log(JSON.stringify(req.body, null, 4));

    switch (req.body.paymentMethod) {
        case 'generic':
            response = getResponseBoletoPayment(req.body.paymentId, req.body.transactionId, req.body.transactionTimestamp, amount, "1000");
            Object.assign(req.body, response);
            break;
        default:
            response = getResponseAuthorization(req);
            Object.assign(req.body, response);
            break;
    }
    return res.status(200).json(req.body);
}

module.exports = {
    getCreditCardPaymentAuthorization,
    processCreditCard,
    processGeneric
};