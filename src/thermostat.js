function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minTemp = 10;
	this.maxTemp = 25;
};

Thermostat.prototype.increaseTemp = function() {
	return this.increaseTempBy(1);
};

Thermostat.prototype.increaseTempBy = function(degrees) {
	if(this.temperature + degrees <= this.maxTemp)
		return this.temperature += degrees;
	else
		return 'Save power, miser!';
};

Thermostat.prototype.decreaseTemp = function() {
	return this.decreaseTempBy(1);
};

Thermostat.prototype.decreaseTempBy = function(degrees) {
	if(this.temperature - degrees >= this.minTemp)
		return this.temperature -= degrees;
	else
		return 'Are you insane?!';
};

Thermostat.prototype.powerSaverOff = function() {
	this.isPowerSaverOn = false;
	this.maxTemp = 32;
};