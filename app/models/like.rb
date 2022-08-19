class Like < ApplicationRecord
    validates :user_id, presence: true 

    belongs_to :user,
        foreign_key: :user_id,
        primary_key: :id,
        class_name: :User 

    belongs_to :post,
        foreign_key: :post_id,
        primary_key: :id, 
        class_name: :Post 

    belongs_to :comment,
        foreign_key: :comment_id,
        primary_key: :id, 
        class_name: :Comment 
end
