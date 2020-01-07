class ChangePhoneNumberTypeInUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :phone_number, :text
  end
end
