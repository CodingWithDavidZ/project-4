class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :birthdate, :username, :password_digest
end
