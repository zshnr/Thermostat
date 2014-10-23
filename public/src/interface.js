function ThermostatView(element, currentTemp){
	this.el = $(element);
	this.thermostat = new Thermostat;
	// this.el.text(this.thermostat.temperature);
	// var currentTemp;
	this.el.text(currentTemp);
	this.bindTo('.increase_temperature', this.thermostat, this.thermostat.increaseTemp, this.el);
	this.bindTo('.decrease_temperature', this.thermostat, this.thermostat.decreaseTemp, this.el);
	this.bindTo('.reset', this.thermostat, this.thermostat.resetTemp, this.el);
};

ThermostatView.prototype.bindTo = function(selector, obj, func, element) { //
	$(selector).on('click', function(){
		element.text(func.call(obj));
	});
};
