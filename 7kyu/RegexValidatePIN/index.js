// 7kyu
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false



Test.describe("validatePIN", function() {
    Test.it("should return False for pins with length other than 4 or 6", function() {
      Test.assertEquals(validatePIN("1"),false, "Wrong output for '1'")
      Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
      Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
      Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
      Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
      Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
      Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
      Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
      Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")
    });
    
      console.log(validatePIN("a234"),false, "Wrong output for 'a234'")
      console.log(validatePIN(".234"),false, "Wrong output for '.234'")
      console.log(validatePIN("1234"),true, "Wrong output for '1234'");
      console.log(validatePIN("0000"),true, "Wrong output for '0000'");
      console.log(validatePIN("1111"),true, "Wrong output for '1111'");
      console.log(validatePIN("123456"),true, "Wrong output for '123456'");
      console.log(validatePIN("098765"),true, "Wrong output for '098765'");
      console.log(validatePIN("000000"),true, "Wrong output for '000000'");
      console.log(validatePIN("123456"),true, "Wrong output for '123456'");
      console.log(validatePIN("090909"),true, "Wrong output for '090909'");
