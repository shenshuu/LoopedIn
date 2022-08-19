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
        class_name: :Like,
        foreign_key: :post_id,
        dependent: :destroy
end
