"use strict";

describe('Thermostat', function(){

	var thermostat;

describe('By Default', function(){

	beforeEach(function(){
		thermostat = new Thermostat();
	});

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

});
});