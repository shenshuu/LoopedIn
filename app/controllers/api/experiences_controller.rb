class Api::ExperiencesController < ApplicationController 
    def index 
        @experiences = Experience.all 
        render :index 
    end

    def create 
        @experience = Experience.new(experience_params)
        @experience.user_id = current_user.id if current_user
        if @experience.save 
            render :show
        else
            render json: @experience.errors.full_messages, status: 422
        end
    end

    def destroy 
        @experience = Experience.find_by(id: params[:id])
        if @experience.destroy 
            render json: ['experience successfully destroyed']
        else
            render json: ['unsuccessful destroy attempt']
        end
    end

    def update
        @experience = Experience.find_by(id: params[:id])
        if @experience.update(experience_params)
            render :show
        else
            render @experience.errors.full_messages
        end
    end

    private 

    def experience_params
        params.require(:experience).permit(
            :user_id, :company, :title, 
            :start_date, :end_date, :end_date,
            :employment_type, :location, :current_job
        )
    end
end