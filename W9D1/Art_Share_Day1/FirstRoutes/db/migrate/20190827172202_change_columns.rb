class ChangeColumns < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :email, :string, null: false
    add_timestamps :users, null: true
    rename_column :users, :name, :username
  end
end


