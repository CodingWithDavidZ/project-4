class Api::MetricsController < ApplicationController
  before_action :set_metric, only: [:show, :update, :destroy]
  before_action :authorize, except: [:create]

  # GET /metrics
  def index
    @metrics = Metric.all

    render json: @metrics
  end

  # GET /metrics/1
  def show
    render json: @metric.order(created_at: :desc)
  end

  # POST /metrics
  def create
    @metric = Metric.new(metric_params)

    if @metric.save
      render json: @metric, status: :created, location: @metric
    else
      render json: @metric.errors.full_messages, status: :unprocessable_entity
    end
  end

  # def create
  #   metric = Metric.create!(metric_params)
  #   render json: metric
  # end

  # PATCH /metrics/1
  def update
    if @metric.update(metric_params)
      render json: @metric
    else
      render json: @metric.errors, status: :unprocessable_entity
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
      params.require(:metric).permit(:neck_size, :chest_size, :waist_size, :hip_size, :thigh_size, :calf_size, :bicep_size, :forearm_size, :height_feet, :height_inches, :weight_lbs, :user_id)
    end
end
