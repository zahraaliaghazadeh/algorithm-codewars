// 8ktu

// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// reverseWords("The greatest victory is that which requires no battle")
// // should return "battle no requires which that is victory 




describe("reverseWords",function(){
    it("should work for some examples", function(){
      Test.assertEquals(reverseWords("hello world!"), "world! hello")
      Test.assertEquals(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
      Test.assertEquals(reverseWords("foobar"                       ),  "foobar")
      Test.assertEquals(reverseWords("kata editor"                  ),  "editor kata")
      Test.assertEquals(reverseWords("row row row your boat"        ),  "boat your row row row")
    });
  });

// other solution
function reverseWords(str){
    return str.trim().split(' ').reverse().join(' '); // reverse those words
  }