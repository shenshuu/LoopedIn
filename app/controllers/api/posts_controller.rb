class Api::PostsController < ApplicationController 
    def index 
        @posts = Post.all 
        render json: @posts 
    end

    def create 
        @post = Post.new(post_params)
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
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update  
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render json: ['post successfully updated']
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private 
    def post_params 
        params.require(:post).permit(:user_id, :body)
    end
end