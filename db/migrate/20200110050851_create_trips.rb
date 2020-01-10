class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.integer :user_id, null: false 
      t.string :trip_code, null: false 
      t.integer :departure_flight_id, null: false
      t.integer :return_flight_id

      t.timestamps
    end
  end
end
