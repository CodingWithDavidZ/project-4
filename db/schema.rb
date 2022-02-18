# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_03_231844) do
	# These are extensions that must be enabled in order to support this database
	enable_extension 'plpgsql'

	create_table 'metrics', force: :cascade do |t|
		t.float 'chest_size'
		t.float 'waist_size'
		t.float 'hip_size'
		t.float 'thigh_size'
		t.float 'calf_size'
		t.float 'bicep_size'
		t.float 'forearm_size'
		t.integer 'height_feet'
		t.integer 'height_inches'
		t.float 'weight_lbs'
		t.integer 'user_id'
		t.datetime 'created_at', precision: 6, null: false
		t.datetime 'updated_at', precision: 6, null: false
		t.float 'neck_size'
	end

	create_table 'users', force: :cascade do |t|
		t.string 'first_name'
		t.string 'last_name'
		t.string 'username'
		t.string 'password_digest'
		t.datetime 'created_at', precision: 6, null: false
		t.datetime 'updated_at', precision: 6, null: false
		t.date 'birthdate'
	end
end
