class Api::PostsController < ApplicationController 
    before_action :require_logged_in

    def index 
        @posts = Post.all 
        render json: @posts 
    end

    def create 
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        if @post.save 
            render json: @post
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy 
        @post = Post.find_by(id: params[:id])
        if @post.destroy 
            render json: ['post successfully destroyed']
        else    
            render json: ['unable to delete post'], status: 422
        end
    end

    def update  
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render '/api/posts/show'
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private 
    def post_params 
        params.require(:post).permit(:body)
    end
end