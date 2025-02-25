class MetricSerializer < ActiveModel::Serializer
	attributes :id,
	           :neck_size,
	           :chest_size,
	           :waist_size,
	           :hip_size,
	           :thigh_size,
	           :calf_size,
	           :bicep_size,
	           :forearm_size,
	           :height_feet,
	           :height_inches,
	           :weight_lbs,
	           :user_id,
	           :created_at

	belongs_to :user
end
