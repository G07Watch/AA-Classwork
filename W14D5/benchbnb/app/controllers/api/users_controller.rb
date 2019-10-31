class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      log_in(@user)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new # fix later
    end
  end

  
  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
