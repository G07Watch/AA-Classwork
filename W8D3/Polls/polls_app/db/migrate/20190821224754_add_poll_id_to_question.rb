class AddPollIdToQuestion < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :poll_id, :integer
    add_index :questions, :poll_id
  end
end
