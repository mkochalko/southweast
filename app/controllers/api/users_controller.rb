class Api::UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
        render 'api/users/show'
    end

    def create
        @user = User.new(user_params)

        if @user 
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params 
        params.require(:user).permit(:username, :password, :first_name, :middle_name, :last_name, :birthdate, :address, :city, :state, :zip_code, :phone_number, :email, :points)
    end
end
