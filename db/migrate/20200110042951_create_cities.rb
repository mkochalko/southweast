class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name, null: false, unique: true
      t.string :name_abbreviation, null: false, unique: true

      t.timestamps
    end
  end
end
