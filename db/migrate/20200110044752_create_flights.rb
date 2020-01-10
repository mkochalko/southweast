class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.integer :departure_city_id, null: false 
      t.integer :arrival_city_id, null: false
      t.datetime :departure_datetime, null: false
      t.integer :duration, null: false

      t.timestamps
    end
  end
end
