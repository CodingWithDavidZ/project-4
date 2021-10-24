class ChangeDataTypeForBirthdate < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :birthdate
    add_column :users, :birthdate, :date
  end
end
