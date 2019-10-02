class ApplicationController < ActionController::Base
  
  helper_method :current_user, :ensure_logged_in, :logged_in?

  # lllec


  def log_in(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end
  
  def log_out
    session[:session_token] = @current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
    # redirect_to root_url
  end

  def logged_in?
    !!current_user
  end
  
  def current_user
    @current_user||= User.find_by(session: :session_token)
  end

  def ensure_logged_in
    redirect_to root_url if !logged_in?
  end

end
