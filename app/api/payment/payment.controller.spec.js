'use strict'

var controller = require('./payment.controller');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const MockService = require('./../../mock/mock.service');

chai.use(chaiAsPromised);

var expect = chai.expect;


let resMock = {
  'statusCode': 'NOT_DEFINED',
  'status': function (status) {
    this.statusCode = status;
    return {
      json: function (obj) {
        return obj;
      }
    };
  },
  'json': function (obj) {
    return obj;
  }
};

describe('Payments Controller', () => {
  describe('Method "getCreditCardPaymentAuthorization"', () => {

    it('should export as function', () => {
      expect(controller.getCreditCardPaymentAuthorization).to.be.a('function')
    });

    it('should return object when valid data', () => {
      var result = controller.getCreditCardPaymentAuthorization("200", "1000", "192.168.0.1", "000000000", "XXXXXXXXX");
      expect(result).to.be.a('Object');
    });

    it('should return null when invalid data', () => {
      var result = controller.getCreditCardPaymentAuthorization(200, 1000, "192.168.0.1", "000000000", "XXXXXXXXX");
      expect(result).to.be.a("null");
    });

    it('should return Credit Card Payment Authorization with code 200', function* () {
      var result = controller.getCreditCardPaymentAuthorization("200", "1000", "192.168.0.1", "000000000", "XXXXXXXXX");
      expect(result.responseCode).to.equal("200");
      expect(result.responseDescription).to.equal('Avenue Code Payment Gateway Processor');
      expect(result.responseReason).to.equal('Testing Payment Gateway');
      expect(result.authorizationCode).to.equal('1000');
      expect(result.hostTransactionId).to.equal("192.168.0.1");
      expect(result.merchantTransactionId).to.equal("000000000");
      expect(result.token).to.equal("XXXXXXXXX");
    });

    it('should return Credit Card Payment Authorization with code 500', () => {
      var result = controller.getCreditCardPaymentAuthorization("500", "9999", "999.999.999.999", "transactionId", "sessionI");
      expect(result.responseCode).to.equal("500");
      expect(result.responseDescription).to.equal('Avenue Code Payment Gateway Processor');
      expect(result.responseReason).to.equal('Testing Payment Gateway');
      expect(result.authorizationCode).to.equal("9999");
      expect(result.hostTransactionId).to.equal("999.999.999.999");
      expect(result.merchantTransactionId).to.equal("transactionId");
      expect(result.token).to.equal("sessionI");
    });
  });
  describe('Method "processCreditCard"', () => {
    it('should export as function', () => {
      expect(controller.processCreditCard).to.be.a('function')
    });
    it('should return 400 with error message when data is invalid', () => {
      let req = {
        body: {},
        query: {}
      };
      let result = controller.processCreditCard(req, resMock);
      expect(resMock.statusCode).to.equal(400);
      expect(result.length).to.equal(17);
    });
    it('should return 200 with data when data is valid', () => {
      let req = {
        query: {
          mock: true
        },
        body: {},
        sessionID: 'XXXX',
        ip: 'localhost'
      };
      MockService.setMock(req, 'credit-card');
      let result = controller.processCreditCard(req, resMock);
      expect(resMock.statusCode).to.equal(200);
    });
  });
});