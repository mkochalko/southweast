class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :first_name, null: false
      t.string :middle_name
      t.string :last_name, null: false
      t.date :birthdate, null: false 
      t.string :address, null: false 
      t.string :city, null: false
      t.string :state, null: false 
      t.integer :zip_code, null: false 
      t.integer :phone_number, null: false
      t.string :email, null: false, unique: true
      t.integer :points, null: false 
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true 
      
      t.timestamps
    end
  end
end
