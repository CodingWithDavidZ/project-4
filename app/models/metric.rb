class Metric < ApplicationRecord
  belongs_to :user

  def adjust_neck_size(adjust)
    if adjust == 'LARGER'
      self.update neck_size: self.neck_size + 1
    elsif adjust == 'SMALLER'
      self.update neck_size: self.neck_size - 1
    end
  end
end
