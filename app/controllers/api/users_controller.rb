class Api::UsersController < ApplicationController

    # skip_before_action :verify_authenticity_token

    def show
        @user = User.find(params[:id])
        render 'api/users/show'
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
        else
            render json:  @user.errors.full_messages, status: 422
        end
    end

    # def edit
    #     @user = User.find_by(id: current_user.id)

    #     render :edit
    # end

    def update 
        @user = User.find_by(id: current_user.id)
        # puts params
        # puts user_params
        # debugger;
        @user.points = user_params[:points]
        @user.save!
        render :show
    end

    private

    def user_params 
        params.require(:user).permit(:id, :username, :password, :first_name, :middle_name, :last_name, :birthdate, :address, :city, :state, :zip_code, :phone_number, :email, :points)
    end
end
