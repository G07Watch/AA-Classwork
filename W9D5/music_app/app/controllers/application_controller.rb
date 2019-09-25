class ApplicationController < ActionController::Base

    attr_accessor :current_user

    helper_method :current_user, :logged_in?

    def log_in_user!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user 
        flash[:success] = "Successfully logged in."
        redirect_to user_url(user.id)
    end

    def current_user
       @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def require_user
        redirect_to new_user_url unless logged_in?
    end

    
end
