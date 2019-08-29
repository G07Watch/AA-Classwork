class CatsController < ApplicationController

    def index
        @cats = Cat.all 
        render :index
    end

    def show
        @cat = Cat.find_by(id: params[:id])
        if @cat
            render :show    
        else
            redirect_to cats_url
        end 
    end

    def new
        @cat = Cat.new
        render :new
    end

    def create
        
    end

    private

    
end