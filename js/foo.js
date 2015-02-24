window.Foo = (function() {

  function Foo() {

  }
  Foo.prototype = {
    plusOne: function(number){
      return number + 1;
    },
    sortArray: function(array) {
      return _.sortBy(array);
    },
    hasValue: function(list, value) {
      return _.contains(list, value);
    }

  };

  Foo.greet = function(duuhhh) {
    return "Hello, " + duuhhh + "!";
  }

  return Foo;

})();



