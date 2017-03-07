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
    define(['ApiClient', 'model/AuthenticationResponse', 'model/DirectoryResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AuthenticationResponse'), require('./DirectoryResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.ThreeDSecureData = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.AuthenticationResponse, root.AdyenApiJs.DirectoryResponse);
  }
}(this, function(ApiClient, AuthenticationResponse, DirectoryResponse) {
  'use strict';




  /**
   * The ThreeDSecureData model module.
   * @module model/ThreeDSecureData
   * @version 1.18.1
   */

  /**
   * Constructs a new <code>ThreeDSecureData</code>.
   * authentication data produced by an MPI (MasterCard SecureCode or Verified By Visa)
   * @alias module:model/ThreeDSecureData
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ThreeDSecureData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreeDSecureData} obj Optional instance to populate.
   * @return {module:model/ThreeDSecureData} The populated <code>ThreeDSecureData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cavvAlgorithm')) {
        obj['cavvAlgorithm'] = ApiClient.convertToType(data['cavvAlgorithm'], 'String');
      }
      if (data.hasOwnProperty('directoryResponse')) {
        obj['directoryResponse'] = DirectoryResponse.constructFromObject(data['directoryResponse']);
      }
      if (data.hasOwnProperty('authenticationResponse')) {
        obj['authenticationResponse'] = AuthenticationResponse.constructFromObject(data['authenticationResponse']);
      }
      if (data.hasOwnProperty('xid')) {
        obj['xid'] = ApiClient.convertToType(data['xid'], 'String');
      }
      if (data.hasOwnProperty('cavv')) {
        obj['cavv'] = ApiClient.convertToType(data['cavv'], 'String');
      }
      if (data.hasOwnProperty('eci')) {
        obj['eci'] = ApiClient.convertToType(data['eci'], 'String');
      }
    }
    return obj;
  }

  /**
   * the CAVV algorithm used
   * @member {String} cavvAlgorithm
   */
  exports.prototype['cavvAlgorithm'] = undefined;
  /**
   * @member {module:model/DirectoryResponse} directoryResponse
   */
  exports.prototype['directoryResponse'] = undefined;
  /**
   * @member {module:model/AuthenticationResponse} authenticationResponse
   */
  exports.prototype['authenticationResponse'] = undefined;
  /**
   * the transaction identifier (base64 encoded, 20 bytes in decoded form)
   * @member {String} xid
   */
  exports.prototype['xid'] = undefined;
  /**
   * the cardholder authentication value (base64 encoded, 20 bytes in decoded form)
   * @member {String} cavv
   */
  exports.prototype['cavv'] = undefined;
  /**
   * the electronic commerce indicator
   * @member {String} eci
   */
  exports.prototype['eci'] = undefined;


  /**
   * Returns the CAVV algorithm used
   * @return {String}
   */
  exports.prototype.getCavvAlgorithm = function() {
    return this['cavvAlgorithm'];
  }

  /**
   * Sets the CAVV algorithm used
   * @param {String} cavvAlgorithm the CAVV algorithm used
   */
  exports.prototype.setCavvAlgorithm = function(cavvAlgorithm) {
    this['cavvAlgorithm'] = cavvAlgorithm;
  }


  /**
   * @return {module:model/DirectoryResponse}
   */
  exports.prototype.getDirectoryResponse = function() {
    return this['directoryResponse'];
  }

  /**
   * @param {module:model/DirectoryResponse} directoryResponse
   */
  exports.prototype.setDirectoryResponse = function(directoryResponse) {
    this['directoryResponse'] = directoryResponse;
  }


  /**
   * @return {module:model/AuthenticationResponse}
   */
  exports.prototype.getAuthenticationResponse = function() {
    return this['authenticationResponse'];
  }

  /**
   * @param {module:model/AuthenticationResponse} authenticationResponse
   */
  exports.prototype.setAuthenticationResponse = function(authenticationResponse) {
    this['authenticationResponse'] = authenticationResponse;
  }


  /**
   * Returns the transaction identifier (base64 encoded, 20 bytes in decoded form)
   * @return {String}
   */
  exports.prototype.getXid = function() {
    return this['xid'];
  }

  /**
   * Sets the transaction identifier (base64 encoded, 20 bytes in decoded form)
   * @param {String} xid the transaction identifier (base64 encoded, 20 bytes in decoded form)
   */
  exports.prototype.setXid = function(xid) {
    this['xid'] = xid;
  }


  /**
   * Returns the cardholder authentication value (base64 encoded, 20 bytes in decoded form)
   * @return {String}
   */
  exports.prototype.getCavv = function() {
    return this['cavv'];
  }

  /**
   * Sets the cardholder authentication value (base64 encoded, 20 bytes in decoded form)
   * @param {String} cavv the cardholder authentication value (base64 encoded, 20 bytes in decoded form)
   */
  exports.prototype.setCavv = function(cavv) {
    this['cavv'] = cavv;
  }


  /**
   * Returns the electronic commerce indicator
   * @return {String}
   */
  exports.prototype.getEci = function() {
    return this['eci'];
  }

  /**
   * Sets the electronic commerce indicator
   * @param {String} eci the electronic commerce indicator
   */
  exports.prototype.setEci = function(eci) {
    this['eci'] = eci;
  }



  return exports;
}));


