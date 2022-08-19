# == Schema Information
#
# Table name: users
#
#  id               :bigint           not null, primary key
#  email            :string           not null
#  password_digest  :string           not null
#  session_token    :string           not null
#  first_name       :string           not null
#  last_name        :string           not null
#  pronouns         :string
#  about            :string
#  location_country :string           not null
#  location_city    :string           not null
#  headline         :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class User < ApplicationRecord
    validates :email, :session_token, uniqueness: true 
    validates :password_digest, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password
    # has many experiences, educations, connections, comments

    has_many :posts,
        class_name: :Post,
        foreign_key: :user_id,
        dependent: :destroy 

    has_many :comments,
        class_name: :Comment,
        foreign_key: :user_id,
        dependent: :destroy

    has_many :likes,
        class_name: :Like,
        foreign_key: :user_id,
        dependent: :destroy 

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil 
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def generate_session_token 
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token! 
        self.session_token = generate_session_token
        save!
        self.session_token
    end

end
