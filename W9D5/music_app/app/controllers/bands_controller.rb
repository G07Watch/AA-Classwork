class BandsController < ApplicationController

    def index
        @bands = Band.all 
        render :index
    end

    def new
       if !logged_in?
         flash[:errors]= "Please log in or sign up to submit a band"
         redirect_to new_session_url 
         return
       else
        @band = Band.find_by(name: params[:name])
        render :new
       end
    end

    def create
        @band = Band.new(params[:name])

        if @band.save 

            flash[:success]= "Band successfully added"
            redirect_to bands_url
        else 
            flash.now[:errors]= "Invalid Band name"
            render :new
        end
    end


    
end