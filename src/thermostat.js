function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
};

Thermostat.prototype.increaseTemp = function() {
	this.increaseTempBy(1);
};

Thermostat.prototype.increaseTempBy = function(degrees) {
	this.temperature += degrees;
};

// Thermostat.prototype.decreaseTemp = function() {
// 	this.temperature = this.temperature - 1;
// };

// Termostat.prototype.decreaseTempBy = function(degrees) {
// 	this.temperature -= degrees;
// };