class Education < ApplicationRecord
    validates :user_id, :school, :start_date, :end_date, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id, 
        class_name: :User
end
