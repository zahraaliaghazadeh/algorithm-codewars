// 8kyu
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {
    return /^\d$/.test(this)
  };

     console.log(''.digit())
    //   false
     console.log('7'.digit())
    //   true
     console.log(' '.digit())
    //   false
     console.log('a'.digit())
    //   false
     console.log('a5'.digit())
    //   false
     console.log('14'.digit())
    //   false




// other solution
//   String.prototype.digit = function() {
//     return /^[0-9]$/.test(this);
//   };

// other solution
//   String.prototype.digit = function() {
//     return this.match(/^[0-9]$/) ? true : false;
//   };

// other solution
//   String.prototype.digit = function() {
//     return this.length === 1 && '0' <= this && this <= '9';
//   };