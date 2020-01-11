class AddPassengersToFlights < ActiveRecord::Migration[5.2]
  def change
    add_column :flights, :passengers, :integer
  end
end
