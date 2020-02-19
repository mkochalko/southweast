class AddPriceToFlights < ActiveRecord::Migration[5.2]
  def change
    add_column :flights, :price, :integer
  end
end
