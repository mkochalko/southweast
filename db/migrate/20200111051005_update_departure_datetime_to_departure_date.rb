class UpdateDepartureDatetimeToDepartureDate < ActiveRecord::Migration[5.2]
  def change
    rename_column :flights, :departure_datetime, :departure_date
    change_column :flights, :departure_date, :date 
  end
end
