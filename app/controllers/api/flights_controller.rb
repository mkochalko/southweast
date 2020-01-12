class Api::FlightsController < ApplicationController

    def index
        @flights = Flight.all
        # date = params[:flight_info][:departure_date]
        # @flights = Flight.where(departure_city_id: params[:flight_info][:departure_city_id])
        #     .where(arrival_city_id: params[:flight_info][:arrival_city_id])
        #     .where(departure_date: date) 

        render :index
    end

    def show
        @flight = Flight.find(params[:id])

        render :show
    end
end
