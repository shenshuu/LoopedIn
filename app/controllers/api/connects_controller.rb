class Api::ConnectsController < ApplicationController 
    def index 
        @connects = Connect.all
        render :index
    end

    def create 
        @connect = Connect.new(connect_params)
        @connect.sender_id = current_user.id if current_user
        if @connect.save 
            render :show
        else
            render json: @connect.errors.full_messages
        end
    end

    def update 
        @connect = Connect.find_by(id: params[:id])
        if @connect.update(connect_params)
            render :show
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
        params.require(:connect).permit(:sender_id, :receiver_id, :pending, :accepted)
    end
end