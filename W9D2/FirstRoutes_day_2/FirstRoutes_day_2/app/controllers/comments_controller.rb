class CommentsController < ApplicationController

    def create 
        comment = Comment.new(comments_params)
        if comment.save 
            render json: comment 
        else 
            render json: comment.errors.full_messages, status: 422
        end
    end

    def destroy 
        comment = Comment.find(params[:id])
        if comment
            comment.destroy
            render json: comment
        else 
            render json: comment.errors.full_messages, status: 422
        end 
    end

    def index 
        # parameters {user_id: { comment: { :id :user_id :artwork_id} } }
        # parameters {user {id: user_id, }}
        # user/2?comment[user_id]
    end  

    private 
    def comments_params 
        params
        params.require(:comment).permit(:author_id, :artwork_id, :body)
    end
end