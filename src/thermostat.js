function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minTemp = 10;
};

Thermostat.prototype.increaseTemp = function() {
	this.increaseTempBy(1);
};

Thermostat.prototype.increaseTempBy = function(degrees) {
	this.temperature += degrees;
};

Thermostat.prototype.decreaseTemp = function() {
	this.decreaseTempBy(1);
};

Thermostat.prototype.decreaseTempBy = function(degrees) {
	if(this.temperature - degrees >= this.minTemp)
		this.temperature -= degrees;
	else
		return 'Are you insane?!';
};