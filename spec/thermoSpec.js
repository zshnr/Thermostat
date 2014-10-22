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

	it('it has a maximum temperature of 25', function(){
		expect(thermostat.maxTemp).toEqual(25);
	});

	it('has a default display color of red', function(){
		expect(thermostat.color).toEqual('red');
	});

});

describe('custom options', function(){

	it('can increase the temp by 5', function(){
		thermostat.increaseTempBy(5);
		expect(thermostat.temperature).toEqual(25);
	});

	it('can decrease the temp by 5', function(){
		thermostat.decreaseTempBy(5);
		expect(thermostat.temperature).toEqual(15);
	});

	it('can turn off power saving mode', function(){
		thermostat.powerSaverOff();
		expect(thermostat.isPowerSaverOn).toBe(false);
	});

	it('can reset temp back to default of 20', function(){
		thermostat.increaseTempBy(5);
		thermostat.resetTemp();
		expect(thermostat.temperature).toEqual(20);
	});

	it('can change color', function(){
		thermostat.changeColor('burgundy');
		expect(thermostat.color).toEqual('burgundy');
	});

	xit('color changes to blue if temp less than 18', function(){
		thermostat.decreaseTempBy(3);
		expect(thermostat.color).toEqual('blue');
	});
});

describe('Limits', function(){

	it('cannot decrease temp past the minimum limit of 10', function(){
		expect(thermostat.decreaseTempBy(12)).toEqual('Are you insane?!');
	});

	it('cannot increase temp past the max of 25 if power saver mode is on', function(){
		expect(thermostat.increaseTempBy(6)).toEqual('Save power, miser!');
	});

	it('max temp is set to 32 degrees if power saver mode is off', function(){
		thermostat.powerSaverOff();
		expect(thermostat.maxTemp).toEqual(32);
	});

	it('cannot increase temp past the max of 32 if power saver mode is off', function(){
		thermostat.powerSaverOff();
		expect(thermostat.increaseTempBy(13)).toEqual('Save power, miser!');
	});
});
});