class SessionsController < ApplicationController

    def new
        user = User.new
        render :new #shows log in form
    end
    
    def create
        user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        debugger
        if user 
            session[:session_token] = user.reset_session_token!
            log_in_user!(user)
        else
            flash.now[:errors] = "User doesn't exist"
            render :new
        end
    end

    def destroy
        current_user.reset_session_token!
        session[:session_token] = nil     
        flash[:success] = "Successfully logged out."
        redirect_to users_url
    end

end