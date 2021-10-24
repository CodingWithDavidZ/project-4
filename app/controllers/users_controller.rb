class UsersController < ApplicationController
  before_action :authorize, except: :create


  # GET /users/1
  def show
    render json: @current_user
  end

  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end


  
  

  private

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :birthdate, :username, :password_digest)
    end
end
