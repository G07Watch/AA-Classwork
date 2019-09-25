class UsersController < ApplicationController
    before_action :logged_in?
    

    def new
        @user = User.new
        render :new
    end

    def show
        @user = User.find_by(id: params[:id])        
        render :show 
    end

    def create
        @user = User.new(user_params)

        if @user.save
            session[:session_token] = @user.session_token
            log_in_user!(@user)
        else
            flash.now[:errors] = "Invalid email/password."
            render :new 
        end

    end


    private
    def user_params
        params.require(:user).permit(:email, :password)
    end


end
