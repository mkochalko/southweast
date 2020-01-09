class User < ApplicationRecord
    validates :username, :email, uniqueness: true
    validates :username, :presence => { message: "Enter username please."}
    validates :email, :presence => { message: "Enter email address."}
    validates :first_name, :presence => { message: "Enter first name."}
    validates :last_name, :presence => { message: "Enter last name."}
    validates :birthdate, :presence => { message: "Enter date of birth."}
    validates :address, :presence => { message: "Enter street address."}
    validates :city, :presence => { message: "Enter city or town."}
    validates :state, :presence => { message: "Enter state name."}
    validates :zip_code, :presence => { message: "Enter zip code."}
    validates :phone_number, :presence => { message: "Enter phone number."}
    validates :points, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token


    attr_reader :password



    def self.find_by_credentials(username, password) 
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
