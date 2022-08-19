class Api::LikesController < ApplicationController 
    def index 
        @likes = Like.all 
        render :index 
    end

    def create 
        @like = Like.new(like_params)
        @like.user_id = current_user.id if current_user 
        if @like.save 
            render :show 
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy 
        @like = Like.find_by(id: params[:id])
        if @like.destroy 
            render json: ['successful unlike']
        else
            render json: ['unsuccessful unlike']
        end
    end

    private 
    def like_params 
        params.require(:like).permit(:user_id, :post_id, :comment_id)
    end
end