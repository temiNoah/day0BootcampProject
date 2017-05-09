'use strict'

var myApp = require("../app/getPrime.js")


describe("Get prime tests",function(){

	it("should return [2,3] for 3",function(){
		expect(myApp.getPrime(3)).toEqual([2,3]);
	});

	it("should return [2,3,5] for 6",function(){
		expect(myApp.getPrime(6)).toEqual([2,3,5]);
	});

	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrime(7)).toEqual([2,3,5,7])
	});

	it("should return [] for 0",function(){
		expect(myApp.getPrime(0)).toEqual([])
	});

	it("should return [] for 1",function(){
		expect(myApp.getPrime(1)).toEqual([])
	});

    

    it("should return invalid input for number less than 0",function(){
		expect(myApp.getPrime(-1)).toEqual([])
	});

	it("should return invalid input only numbers ",function(){
		expect(myApp.getPrime('gf')).toEqual("invalid input")
	});
	
	

	

	it("should return invalid input for -1",function(){
		expect(myApp.getPrime(-1)).toEqual([])
	});

	it("should return invalid input for -1",function(){
		expect(myApp.getPrime(-1)).toEqual([])
	});

   it("should return invalid input for -1",function(){
		expect(myApp.getPrime(-1)).toEqual([])
	});

    

});