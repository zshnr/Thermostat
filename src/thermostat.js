function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
};

Thermostat.prototype.increaseTemp	 = function() {
	this.temperature = this.temperature + 1;
};