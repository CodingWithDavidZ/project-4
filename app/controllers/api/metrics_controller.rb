class Api::MetricsController < ApplicationController
	before_action :set_metric, only: %i[show update destroy size]
	before_action :authorize, except: %i[create size]

	# GET /metrics/1
	def show
		render json: @metric.order(created_at: :desc)
	end

	# POST /metrics
	def create
		@metric = Metric.new(metric_params)

		if @metric.save
			render json: @metric, status: :created
		else
			render json: @metric.errors.full_messages, status: :unprocessable_entity
		end
	end

	# metrics/id/
	def size
		adjust = params[:size]
		metric_to_adjust = params[:metric]
		@metric.adjust_size(adjust, metric_to_adjust)
		if @metric.valid?
			render json: @metric, status: :ok
		else
			render json: @metric.errors.full_messages, status: :unprocessable_entity
		end
	end

	# DELETE /metrics/1
	def destroy
		@metric.destroy
	end

	private

	# Use callbacks to share common setup or constraints between actions.
	def set_metric
		@metric = Metric.find(params[:id])
	end

	# Only allow a list of trusted parameters through.
	def metric_params
		params
			.require(:metric)
			.permit(
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
				:metric,
			)
	end
end
