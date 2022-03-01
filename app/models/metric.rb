class Metric < ApplicationRecord
	belongs_to :user

	# NEEDED if adding an increment/decrement button to existing metrics
	def adjust_size(adjust, metric_to_adjust)
		if adjust == 'LARGER'
			self.update (metric_to_adjust.to_sym) =>
					self.send(metric_to_adjust.to_sym) + 1
		elsif adjust == 'SMALLER'
			self.update (metric_to_adjust.to_sym) =>
					self.send(metric_to_adjust.to_sym) - 1
		else
			render json: @metric.errors.full_messages, status: :unprocessable_entity
		end
	end
end
