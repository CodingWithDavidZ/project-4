class AddNeckSizeToMetrics < ActiveRecord::Migration[6.1]
  def change
    add_column :metrics, :neck_size, :float
  end
end
