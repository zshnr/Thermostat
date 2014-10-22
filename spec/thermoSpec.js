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

	it('can decrease the temperature by one degree', function(){
		thermostat.decreaseTemp(1);
		expect(thermostat.temperature).toEqual(19);
	});

	it('it has a minimum temperature of 10', function(){
		expect(thermostat.minTemp).toEqual(10);
	});

});

describe('custom options', function(){

	it('can increase the temp by 12', function(){
		thermostat.increaseTempBy(12);
		expect(thermostat.temperature).toEqual(32);
	});

	it('can decrease the temp by 5', function(){
		thermostat.decreaseTempBy(5);
		expect(thermostat.temperature).toEqual(15);
	});

	it('can turn off power saving mode', function(){
		thermostat.powerSaverOff();
		expect(thermostat.isPowerSaverOn).toBe(false);
	});
});

describe('Limits', function(){

	it('cannot decrease temp past the minimum limit of 10', function(){
		expect(thermostat.decreaseTempBy(12)).toEqual('Are you insane?!');
	});
});
});