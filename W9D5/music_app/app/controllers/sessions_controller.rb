class SessionsController < ApplicationController
    

    def new
        render :new #shows log in form
    end
    
    def create
        user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if user 
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
        redirect_to bands_url
    end

end