class Post < ApplicationRecord
    validates :user_id, :body, presence: true 

    belongs_to :user,
    primary_key: :id,
end
