class BandsController < ApplicationController
    before_action :require_user, only: [:new, :create]

    def index
        @bands = Band.all 
        render :index
    end

    def new
        @band = Band.find_by(name: params[:name])
        render :new
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