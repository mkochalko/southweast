class UpdateCityInfoInFlights < ActiveRecord::Migration[5.2]
  def change
    change_column :flights, :departure_city_id, :text, null: false
    change_column :flights, :arrival_city_id, :text, null: false
  end
end
