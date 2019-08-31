'use strict';

import common from '../common';
import constants from './constants';

/**
 * Returns true if the address is valid, false otherwise
 * @memberof Address6
 * @instance
 * @returns {boolean}
 */
var isValid = function () {
  return this.valid;
};

/**
 * Returns true if the given address is in the subnet of the current address
 * @memberof Address6
 * @instance
 * @returns {boolean}
 */
var isInSubnet = common.isInSubnet;

/**
 * Returns true if the address is correct, false otherwise
 * @memberof Address6
 * @instance
 * @returns {boolean}
 */
var isCorrect = common.isCorrect(constants.BITS);

/**
 * Returns true if the address is in the canonical form, false otherwise
 * @memberof Address6
 * @instance
 * @returns {boolean}
 */
var isCanonical = common.falseIfInvalid(function () {
  return this.addressMinusSuffix === this.canonicalForm();
});

/**
 * Returns true if the address is a link local address, false otherwise
 * @memberof Address6
 * @instance
 * @returns {boolean}
 */
var isLinkLocal = common.falseIfInvalid(function () {
  // Zeroes are required, i.e. we can't check isInSubnet with 'fe80::/10'
  if (this.getBitsBase2(0, 64) ===
    '1111111010000000000000000000000000000000000000000000000000000000') {
    return true;
  }

  return false;
});

/**
 * Returns true if the address is a multicast address, false otherwise
 * @memberof Address6
 * @instance
 * @returns {boolean}
 */
var isMulticast = common.falseIfInvalid(function () {
  return this.getType() === 'Multicast';
});

/**
 * Returns true if the address is a v4-in-v6 address, false otherwise
 * @memberof Address6
 * @instance
 * @returns {boolean}
 */
var is4 = common.falseIfInvalid(function () {
  return this.v4;
});

/**
 * Returns true if the address is a Teredo address, false otherwise
 * @memberof Address6
 * @instance
 * @returns {boolean}
 */
var isTeredo = common.falseIfInvalid(function () {
  return this.isInSubnet(new this.constructor('2001::/32'));
});

/**
 * Returns true if the address is a 6to4 address, false otherwise
 * @memberof Address6
 * @instance
 * @returns {boolean}
 */
var is6to4 = common.falseIfInvalid(function () {
  return this.isInSubnet(new this.constructor('2002::/16'));
});

/**
 * Returns true if the address is a loopback address, false otherwise
 * @memberof Address6
 * @instance
 * @returns {boolean}
 */
var isLoopback = common.falseIfInvalid(function () {
  return this.getType() === 'Loopback';
});

export default {
  isLoopback,
  is6to4,
  isTeredo,
  is4,
  isMulticast,
  isLinkLocal,
  isCanonical,
  isCorrect,
  isInSubnet,
  isValid
}
