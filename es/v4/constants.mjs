var BITS = 32;
var GROUPS = 4;

var RE_ADDRESS = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;

var RE_SUBNET_STRING = /\/\d{1,2}$/;

export default {
  BITS,
  GROUPS,
  RE_ADDRESS,
  RE_SUBNET_STRING
}