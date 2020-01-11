class Api::FlightsController < ApplicationController

    def index
        debugger
        date = params[:flight_info][:departure_datetime]
        @flights = Flight.where(departure_city_id: params[:flight_info][:departure_city_id])
            .where(arrival_city_id: params[:flight_info][:arrival_city_id])
            .where("departure_datetime LIKE '%#{date}%'") 

        render :index
    end

    def show
        @flight = Flight.find(params[:id])

        render :show
    end
end
