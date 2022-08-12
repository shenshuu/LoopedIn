class ApplicationController < ActionController::Base
    
    protect_from_forgery with: :exception 
    helper_method :current_user

    def current_user 
        @current_user = User.find_by(session: session[:session_token])
    end

    def require_logged_in

    end

    def login!(user)
        @current_user = user
        @current_user.reset_session_token!
        session[:session_token] = @current_user.session_token
        @current_user
    end

    def logged_in?
        !!current_user
    end

    def logout 
        return nil if !logged_in?
        @current_user.reset_session_token!
        session[:session_token] = nil 
        @current_user = nil 
    end
end
