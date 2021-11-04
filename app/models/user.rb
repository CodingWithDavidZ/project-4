class User < ApplicationRecord
    has_many :metrics, -> { order(created_at: :desc) }
    has_secure_password
    validates :username, presence: true, uniqueness: true
end

