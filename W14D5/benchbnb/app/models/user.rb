class User < ApplicationRecord
  attr_reader :password

  validates :username, presence: true
  validates :password_digest, presence: true 
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  after_initialize :ensure_session_token
  # FeGrip

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if (user && user.is_password?(password))
  end
  
  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end