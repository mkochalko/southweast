class Api::TripsController < ApplicationController

    def show
        @trip = Trip.find(params[:id])
    
    end

    def create
        @trip = Trip.new(trip_params)

        if @trip.save
            render :show
        else
            render json: @trip.errors.full_messages, status: 422
        end
    end

    def update

    end

    def destroy

    end

    private

    def trip_params
        params.require(:trip).permit(:user_id, :departure_flight_id, :return_flight_id, :trip_code)
    end

end
