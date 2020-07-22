// 8kyu
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.



String.prototype.digit = function() {
    return /^\d$/.test(this);
  };


  String.prototype.digit = function() {
    return /^[0-9]$/.test(this);
  };


  String.prototype.digit = function() {
    return this.match(/^[0-9]$/) ? true : false;
  };


  String.prototype.digit = function() {
    return this.length === 1 && '0' <= this && this <= '9';
  };