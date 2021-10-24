class CreateMetrics < ActiveRecord::Migration[6.1]
  def change
    create_table :metrics do |t|
      t.float :chest_size
      t.float :waist_size
      t.float :hip_size
      t.float :thigh_size
      t.float :calf_size
      t.float :bicep_size
      t.float :forearm_size
      t.integer :height_feet
      t.integer :height_inches
      t.float :weight_lbs
      t.integer :user_id

      t.timestamps
    end
  end
end
