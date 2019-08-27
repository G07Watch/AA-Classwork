class UsersController < ApplicationController 
    def index 
        render json: User.all
    end

    def create
        user = User.new(params.require(:user).permit(:name, :email))
        if user.save
         render json: user
        else
         render json: user.errors.full_messages, status: 422
        end
    end

    def show
        render json: User.find(params[:id])
        # puts user
        # if !user.nil?
        #     render json: user
        # else 
        #     render json: 'User not found'
        # end

    end

    def update 
        user = User.find(params[:id])
        if user 
            user.update.user_params
        end

    end

    private 
    def user_params 
        params.require(:user).permit(:name, :email)
    end

    
end