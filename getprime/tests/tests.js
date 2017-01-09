// testing code goes here
var myApp = require('../app/library.js');

describe("Test to show how many prime numbers are in the range 0 to 100", function(){
  it("should return '[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,71,73,79,83,89,97]' for range 0 to 100", function(){
    expect(myApp.getPrimes(100)).toEqual([0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });
  it("should return '[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79]' for range 0 to 80", function(){
    expect(myApp.getPrimes(80)).toEqual([0,1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79]);
  });
  it("should return '[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59]' for range 0 to 60", function(){
    expect(myApp.getPrimes(60)).toEqual([0,1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59]);
  });
  it("should return '[2,3,5,7,11,13,17,19,23,29,31,37,]' for range 0 to 40", function(){
    expect(myApp.getPrimes(40)).toEqual([0,1,2,3,5,7,11,13,17,19,23,29,31,37]);
  });
  it("should return '[2,3,5,7,11,13,17,19]' for range 0 to 20", function(){
    expect(myApp.getPrimes(20)).toEqual([0,1,2,3,5,7,11,13,17,19]);
  });
  it("should return '[2,3,5,7]' for range 0 to 10", function(){
    expect(myApp.getPrimes(10)).toEqual([0,1,2,3,5,7]);
  });
  it("should return '[2,3,5]' for range 0 to 5", function(){
    expect(myApp.getPrimes(5)).toEqual([0,1,2,3,5]);
  });  
  it("should return '[0,1,2,3]' for range 0 to 3", function(){
    expect(myApp.getPrimes(3)).toEqual([0,1,2,3]);
  });
  it("should return '[0,1,2]' for range 0 to 2", function(){
    expect(myApp.getPrimes(2)).toEqual([0,1,2]);
  });
  it("should return '[0]' for range 0 to 1", function(){
    expect(myApp.getPrimes(1)).toEqual([0,1]);
  });
  
})
