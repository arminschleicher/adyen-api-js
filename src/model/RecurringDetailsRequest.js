/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 18
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Recurring'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Recurring'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.RecurringDetailsRequest = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.Recurring);
  }
}(this, function(ApiClient, Recurring) {
  'use strict';




  /**
   * The RecurringDetailsRequest model module.
   * @module model/RecurringDetailsRequest
   * @version 1.18.1
   */

  /**
   * Constructs a new <code>RecurringDetailsRequest</code>.
   * @alias module:model/RecurringDetailsRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RecurringDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecurringDetailsRequest} obj Optional instance to populate.
   * @return {module:model/RecurringDetailsRequest} The populated <code>RecurringDetailsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantAccount')) {
        obj['merchantAccount'] = ApiClient.convertToType(data['merchantAccount'], 'String');
      }
      if (data.hasOwnProperty('shopperReference')) {
        obj['shopperReference'] = ApiClient.convertToType(data['shopperReference'], 'String');
      }
      if (data.hasOwnProperty('recurring')) {
        obj['recurring'] = Recurring.constructFromObject(data['recurring']);
      }
    }
    return obj;
  }

  /**
   * the merchant account which will be used for processing this request
   * @member {String} merchantAccount
   */
  exports.prototype['merchantAccount'] = undefined;
  /**
   * a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   * @member {String} shopperReference
   */
  exports.prototype['shopperReference'] = undefined;
  /**
   * @member {module:model/Recurring} recurring
   */
  exports.prototype['recurring'] = undefined;


  /**
   * Returns the merchant account which will be used for processing this request
   * @return {String}
   */
  exports.prototype.getMerchantAccount = function() {
    return this['merchantAccount'];
  }

  /**
   * Sets the merchant account which will be used for processing this request
   * @param {String} merchantAccount the merchant account which will be used for processing this request
   */
  exports.prototype.setMerchantAccount = function(merchantAccount) {
    this['merchantAccount'] = merchantAccount;
  }


  /**
   * Returns a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   * @return {String}
   */
  exports.prototype.getShopperReference = function() {
    return this['shopperReference'];
  }

  /**
   * Sets a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   * @param {String} shopperReference a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   */
  exports.prototype.setShopperReference = function(shopperReference) {
    this['shopperReference'] = shopperReference;
  }


  /**
   * @return {module:model/Recurring}
   */
  exports.prototype.getRecurring = function() {
    return this['recurring'];
  }

  /**
   * @param {module:model/Recurring} recurring
   */
  exports.prototype.setRecurring = function(recurring) {
    this['recurring'] = recurring;
  }



  return exports;
}));


