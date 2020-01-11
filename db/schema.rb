# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_11_052311) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
    t.string "name_abbreviation", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "flights", force: :cascade do |t|
    t.integer "departure_city_id", null: false
    t.integer "arrival_city_id", null: false
    t.date "departure_date", null: false
    t.integer "duration", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "passengers"
    t.time "departure_time"
  end

  create_table "trips", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "trip_code", null: false
    t.integer "departure_flight_id", null: false
    t.integer "return_flight_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "first_name", null: false
    t.string "middle_name"
    t.string "last_name", null: false
    t.date "birthdate", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.integer "zip_code", null: false
    t.text "phone_number", null: false
    t.string "email", null: false
    t.integer "points", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
