class ApplicationController < ActionController::Base

    attr_accessor :current_user

    helper_method :current_user

    def log_in_user!(user)
        @current_user = user 
        flash[:success] = "Successfully logged in."
        redirect_to bands_url
    end

    def current_user
       @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!@current_user
    end

    

end
