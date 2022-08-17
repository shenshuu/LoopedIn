class Api::CommentsController < ApplicationController
    def create 
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save 
            render json: @comment
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update 
        @comment = Comment.find_by(id: params[:id])
        if @comment.update(comment_params)
            render json: @comment
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy 
        @comment = Comment.find_by(id: params[:id])
        if @comment.destroy 
            render json: ['comment successfully deleted']
        else
            render json: ['unauthorized to delete comment']
        end
    end

    private 
    def comment_params 
        params.require(:comment).permit(:body, :user_id, :post_id, :parent_comment_id)
    end
end