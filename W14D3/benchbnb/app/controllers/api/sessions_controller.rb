class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])
    
    if @user
      log_in(@user)
      redirect_to show_url(@user)
    else
      flash.now[:errors] = "Invalid credentials"
      render :new
    end
  end

  def destroy
    if logged_in?
      log_out
      render json: {}
    else
      render json: ['No current user'], status: 404
    end
  end
  
  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
