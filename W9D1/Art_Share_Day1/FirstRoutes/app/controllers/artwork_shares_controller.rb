class ArtworkSharesController < ApplicationController

    def create
        viewer = User.find(params[:artwork_share][:viewer_id])
        artwork = Artwork.find(params[:artwork_share][:artwork_id])
        if viewer && artwork
            share = ArtworkShare.new(artwork_share_params)
        end
        if share.save 
            render json: share 
        else
            render json: share.errors.full_messages, status: 422 
        end
    end

    def destroy
        share = ArtworkShare.find(params[:id])
        if share 
            share.destroy
            render json: share 
        else 
            render json: share.errors.full_messages, status: 422
        end
    end

    private
    
    def artwork_share_params
        params.require(:artwork_share).permit(:viewer_id, :artwork_id)
    end

end