function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minTemp = 10;
	this.maxTemp = 25;
	this.color = 'red';
};

Thermostat.prototype.increaseTemp = function() {
	return this.increaseTempBy(1);
};

Thermostat.prototype.increaseTempBy = function(degrees) {
	if(this.temperature + degrees <= this.maxTemp){
		if(this.temperature + degrees <= 25){
			this.color = 'orange';}
			return this.temperature += degrees;
	}
	else
		return 'Save power, miser!';
};

Thermostat.prototype.decreaseTemp = function() {
	return this.decreaseTempBy(1);
};

Thermostat.prototype.decreaseTempBy = function(degrees) {
	if(this.temperature - degrees >= this.minTemp){
		if(this.temperature - degrees <= 18) {
			this.color = 'blue';}
			this.temperature -= degrees;
		}
	else
		return 'Are you insane?!';
};

Thermostat.prototype.powerSaverOff = function() {
	this.isPowerSaverOn = false;
	this.maxTemp = 32;
};

Thermostat.prototype.resetTemp = function() {
	return this.temperature = 20;
};

Thermostat.prototype.changeColor = function(color) {
	this.color = color;
};

Thermostat.prototype.powerSaverOn = function() {
	this.isPowerSaverOn = true;
	this.maxTemp = 25;
};