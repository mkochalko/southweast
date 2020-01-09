class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: ["The username and/or password are incorrect"], status: 422
        end
    end

    def destroy
        @user = current_user

        if @user 
            logout
            render json: {}
        else
            render json: ["No User"], status: 404
        end
    end

end
