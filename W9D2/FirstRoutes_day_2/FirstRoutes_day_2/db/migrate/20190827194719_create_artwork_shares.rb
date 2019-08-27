class CreateArtworkShares < ActiveRecord::Migration[6.0]
  def change
    create_table :artwork_shares do |t|
      t.timestamps 
      t.integer :artwork_id, null: false
      t.integer :viewer_id, null: false
    end

    add_index :artwork_shares, [:artwork_id, :viewer_id], :unique => true
  end
end
