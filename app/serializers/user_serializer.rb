class UserSerializer < ActiveModel::Serializer
	attributes :id, :first_name, :last_name, :birthdate, :username

	has_many :metrics
end
