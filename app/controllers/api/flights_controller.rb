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

    def create 
        @flight = Flight.new(flight_params)

        if @flight.save
            render :show
        else
            render json: @flight.errors.full_messages, status: 422
        end
    end

    private

    def flight_params
        params.require(:flight).permit(:departure_city_id, :arrival_city_id, :passengers, :departure_date, :duration, :departure_time)
    end
end


# SFO-DEN = f453a9f1-eb2f-4a05-85dd-a6754788a6ab