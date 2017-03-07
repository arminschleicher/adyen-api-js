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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.ConfirmOrDeclineRequest = factory(root.AdyenApiJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ConfirmOrDeclineRequest model module.
   * @module model/ConfirmOrDeclineRequest
   * @version 1.18.1
   */

  /**
   * Constructs a new <code>ConfirmOrDeclineRequest</code>.
   * @alias module:model/ConfirmOrDeclineRequest
   * @class
   * @param merchantAccount {String} the merchant account which will be used for processing this request.
   * @param originalReference {String} The PSP reference received in the submit payout response.
   */
  var exports = function(merchantAccount, originalReference) {
    var _this = this;

    _this['merchantAccount'] = merchantAccount;
    _this['originalReference'] = originalReference;
  };

  /**
   * Constructs a <code>ConfirmOrDeclineRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfirmOrDeclineRequest} obj Optional instance to populate.
   * @return {module:model/ConfirmOrDeclineRequest} The populated <code>ConfirmOrDeclineRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantAccount')) {
        obj['merchantAccount'] = ApiClient.convertToType(data['merchantAccount'], 'String');
      }
      if (data.hasOwnProperty('originalReference')) {
        obj['originalReference'] = ApiClient.convertToType(data['originalReference'], 'String');
      }
    }
    return obj;
  }

  /**
   * the merchant account which will be used for processing this request.
   * @member {String} merchantAccount
   */
  exports.prototype['merchantAccount'] = undefined;
  /**
   * The PSP reference received in the submit payout response.
   * @member {String} originalReference
   */
  exports.prototype['originalReference'] = undefined;


  /**
   * Returns the merchant account which will be used for processing this request.
   * @return {String}
   */
  exports.prototype.getMerchantAccount = function() {
    return this['merchantAccount'];
  }

  /**
   * Sets the merchant account which will be used for processing this request.
   * @param {String} merchantAccount the merchant account which will be used for processing this request.
   */
  exports.prototype.setMerchantAccount = function(merchantAccount) {
    this['merchantAccount'] = merchantAccount;
  }


  /**
   * Returns The PSP reference received in the submit payout response.
   * @return {String}
   */
  exports.prototype.getOriginalReference = function() {
    return this['originalReference'];
  }

  /**
   * Sets The PSP reference received in the submit payout response.
   * @param {String} originalReference The PSP reference received in the submit payout response.
   */
  exports.prototype.setOriginalReference = function(originalReference) {
    this['originalReference'] = originalReference;
  }



  return exports;
}));


