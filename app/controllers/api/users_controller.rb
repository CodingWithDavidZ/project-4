class Api::UsersController < ApplicationController
	before_action :authorize, except: %i[create update]

	# GET /users/1
	def show
		render json: @current_user, include: [:metrics]
	end

	# POST /users
	# def create
	# 	user = User.create!(user_params)
	# 	session[:user_id] = user.id
	# 	render json: user, status: :created
	# end

	def create
		if User.new(user_params).valid? == true
			user = User.create!(user_params)
			session[:user_id] = user.id
			render json: user, status: :created
		else
			render json: { errors: 'Invalid username' }, status: :unauthorized
		end
	end

	def update
		user = User.find(params[:id])
		user.update!(password: params[:password])

		render json: user, status: :ok
	end

	private

	# Only allow a list of trusted parameters through.
	def user_params
		params
			.require(:user)
			.permit(:first_name, :last_name, :birthdate, :username, :password)
	end
end
