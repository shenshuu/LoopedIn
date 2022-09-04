class Api::ConnectsController < ApplicationController 
    def index 
        @connects = Connect.all
        render :index
    end

    def create 
        @connect = Connect.new(connect_params)
        @connect.user1_id = current_user.id if current_user
        if @connect.save 
            render :index
        else
            render json: @connect.errors.full_messages
        end
    end

    def destroy 
        @connect = Connect.find_by(id: params[:id])
        if @connect.destroy 
            render json: ["Connection successfully destroyed"]
        else
            render json: ["Unable to destroy connection"]
        end
    end

    private
    def connect_params
        params.require(:connect).permit(:user1_id, :user2_id)
    end
end