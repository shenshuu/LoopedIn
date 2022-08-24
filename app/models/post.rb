class Post < ApplicationRecord
    validates :user_id, :body, presence: true 

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id,
        primary_key: :id

    has_many :comments,
        class_name: :Comment,
        foreign_key: :post_id,
        dependent: :destroy 

    has_many :likes,
        as: :likeable,
        dependent: :destroy 

    has_one_attached :image
end
