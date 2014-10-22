function ThermostatView(element){
	this.el = $(element);
	this.thermostat = new Thermostat;
	this.el.text(this.thermostat.temperature);
	this.bindTo('.increase_temperature', this.thermostat, this.thermostat.increaseTemp);
	this.bindTo('.decrease_temperature', this.thermostat, this.thermostat.decreaseTemp);
};

ThermostatView.prototype.bindTo = function(selector, obj, func) { //
	$(selector).on('click', function(){
		$('.temperature h1').text(func.call(obj));
	});
};
