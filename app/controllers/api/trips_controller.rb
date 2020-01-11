class Api::TripsController < ApplicationController
    before_action :require_logged_in

    def index
        @trips = current_user.trips 
        render :index
    end

    def show
        @trip = Trip.find(params[:id])
        render :show
    end

    def create
        @trip = Trip.new(trip_params)
        @trip.user_id = current_user.id
        if @trip.save
            render :show
        else
            render json: @trip.errors.full_messages, status: 422
        end
    end

    def edit
        @trip = Trip.find(params[:id])

        render :edit
    end

    def update
        @trip = current_user.trips.find(params[:id])

        if @trip.update_attributes(trip_params)
            render :show
        else
            render json: @trip.errors.full_messages, status: 422
        end
    end

    def destroy
        @trip = Trip.find(params[:id])
        
        @trip.destroy
        render json: :index
    end

    private

    def trip_params
        params.require(:trip).permit(:user_id, :departure_flight_id, :return_flight_id, :trip_code)
    end

end
