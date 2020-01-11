class AddDepartureTimeToFlights < ActiveRecord::Migration[5.2]
  def change
    add_column :flights, :departure_time, :time
  end
end
