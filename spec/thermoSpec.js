describe('Thermostat', function(){

	var thermostat;

describe('Defaults', function(){

	it('Starts at 20 degrees', function(){
		thermostat = new Thermostat();
		expect(thermostat.temperature).toEqual(20);

	});

	it('power saving mode is on by default', function(){
		thermostat = new Thermostat();
		expect(thermostat.isPowerSaverOn).toBe(true);
	});

});
});