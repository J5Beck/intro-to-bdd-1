describe("Bar", function() {
  var bar;

  beforeEach(function() {
    bar = new Bar();
  });

  describe("squared", function() {

    it("multiply a number or value by itself", function() {
      expect(bar.squared(2)).eq(4);
    });

  });

  describe("cubed", function() {

    it("raise a number or value to its cube", function() {
      expect(bar.cubed(5)).eq(125);
    });

  });

  describe("exponentOf", function() {

    it("a quantity representing the power to which a given number or expression is to be raised", function() {
      var exponentOf2 = bar.exponentOf(2);
      expect( exponentOf2(4) ).eq(16);
    });

  });

  describe("reverseString", function() {

    it("takes a string puts it in an array, reverses it and throws it back together as a string", function() {
      expect( bar.reverseString("diaper") ).eq("repaid");
    });

  });

  describe("cipher", function() {

    it("takes text and replaces it with characters", function() {
      expect( bar.cipher("hello") ).eq("ÌÉÐÐÓ");
    });

  });

  describe("decipher", function() {

    it("takes characters and turns them inot text", function() {
      expect( bar.decipher("ÌÉÐÐÓ") ).eq("hello");
    });

  });  

  describe("rot13", function() {

    it("JD's favorite", function() {
      expect( bar.rot13("Hello world") ).eq("Uryyb jbeyq");
    });

  });   



});  