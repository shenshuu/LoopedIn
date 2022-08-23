class Api::EducationsController < ApplicationController 
    def create 
        @education = Education.new(education_params)
        @education.user_id = current_user.id if current_user
        if @education.save
            render :show
        else
            render json: @education.errors.full_messages, status: 422
        end
    end

    def update
        @education = Education.find_by(id: params[:id])
        if @education.update(education_params)
            render :show 
        else
            render json: @education.errors.full_messages, status: 422
        end
    end

    def destroy 
        @education = Education.find_by(id: params[:id])
        if @education.destroy 
            render json: ['Education successfully destroyed']
        else
            render json: ['Destroy unsuccessful']
        end
    end

    def index
        @educations = Education.all
        render :index
    end

    private 
    def education_params 
        params.require(:education).permit(:school, :field, :description, :activities, :start_date, :end_date, :grade, :user_id, :degree)
    end
end