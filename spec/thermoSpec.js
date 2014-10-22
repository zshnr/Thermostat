"use strict";

describe('Thermostat', function(){

	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	});

describe('By Default', function(){


	it('Starts at 20 degrees', function(){
		expect(thermostat.temperature).toEqual(20);
	});

	it('power saving mode is on by default', function(){
		expect(thermostat.isPowerSaverOn).toBe(true);
	});

	it('can increase the temperature by one degree', function(){
		thermostat.increaseTemp(1);
		expect(thermostat.temperature).toEqual(21);
	});

	// it('can decrease the temperature by one degree', function(){
	// 	thermostat.decreaseTemp(1);
	// 	expect(thermostat.temperature).toEqual(19);
	// });

});

describe('custom options', function(){

	it('can increase the temp by 12', function(){
		thermostat.increaseTempBy(12);
		expect(thermostat.temperature).toEqual(32);
	});

	// it('', function())
});
});