class CreateResponse < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.string :body, null: false
      
      t.timestamps
    end
  end
end
