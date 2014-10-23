require 'sinatra'
require 'net/http'

get '/' do
	erb :thermostat
end

get '/weather' do
	uri = URI('http://api.openweathermap.org/data/2.5/find?q=London&units=metric')
	Net::HTTP.get(uri)
end
