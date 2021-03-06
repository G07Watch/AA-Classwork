class UsersController < ApplicationController 
    def index 
        all = User.all
        render json: all 
    end

    def create
        user = User.new(user_params)
        if user.save
         render json: user
        else
         render json: user.errors.full_messages, status: 422
        end
    end

    def show
        render json: User.find(params[:id])
    end

    def update 
        user = User.find(params[:id])
        if user 
            user.update(user_params)
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def destroy
        user = User.find(params[:id])
        if user
            user.destroy
            render json: user
        else
            render json: user.errors.full_messages, status: 422
        end
    end


    private 
    def user_params 
        params.require(:user).permit(:username)
    end

    
end