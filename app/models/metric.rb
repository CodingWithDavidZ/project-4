class Metric < ApplicationRecord
    belongs_to :user

    validates :weight_lbs, presence: true

end
