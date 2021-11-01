class UsersController < ApplicationController
  before_action :authorize, except: [:create, :update]


  # GET /users/1
  def show
    render json: @current_user, include: [:metrics]
  end

  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def update
    if @user.update(user_params)
      session[:user_id] = user.id
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end


  
  

  private

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :birthdate, :username, :password)
    end
end
