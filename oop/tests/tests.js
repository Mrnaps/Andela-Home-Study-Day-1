// testing code goes here

var Computer = require('../app/library.js');

(function(){
  'use strict';
  describe("Computer Class: Create a Computer", function() {

    it("The computer should be a type of `object`, and an instance of the `Computer` class", function() {
      var macbook = new Computer('Mac Book');
      expect(typeof macbook).toEqual(typeof {});
      expect(macbook instanceof Computer).toBeTruthy();
    });

    it("Check the brand and model of the computer", function() {
      var apple  = new Computer('Apple', 'iMac');
      expect(apple.brand).toBe('Apple');
      expect(apple.model).toBe('iMac');
    });

    it("The check the year of the computer", function() {
      var apple  = new Computer('Apple', 'iMac', 2010);
      expect(apple.year).toBe(2010);
    });

    it("The check the year of the speed of the computer", function() {
      var apple  = new Computer('Apple', 'iMac', 2010, "red", "100g", "8gb", false, true, true);
      expect(apple.speed).toBe("8gb");
    });

    it("The check the color", function() {
      var apple  = new Computer('Apple', 'iMac', 2010, "red", "100g", "8gb", false, true, true);
      expect(apple.color).toBe("red");
    });

    it("The check the weight of the computer", function() {
      var apple  = new Computer('Apple', 'iMac', 2010, "red", "100g", "8gb", false, true, true);
      expect(apple.weight).toBe("100g");
    });

    it("The check if the computer is connected", function() {
      var apple  = new Computer('Apple', 'iMac', 2010, "red", "100g", "8gb", false, true, true);
      expect(apple.connected).toBe(false);
    });
    it("The check if the computer is for gaming", function() {
      var apple  = new Computer('Apple', 'iMac', 2010, "red", "100g", "8gb", false, true, true);
      expect(apple.gaming).toBe(false);
    });
    it("The check if the computer is portable", function() {
      var apple  = new Computer('Apple', 'iMac', 2010, "red", "100g", "8gb", false, false, false);
      expect(apple.portable).toBe(true);
    });
    it("The check if the computer is powered on", function() {
      var apple  = new Computer('Apple', 'iMac', 2010, "red", "100g", "8gb", false, true, false, false);
      expect(apple.powered).toBe(true);
    });
  }); 
})();


