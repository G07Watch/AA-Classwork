# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord 
    validates :title, uniqueness: { scope: :artist_id, message: 'Artist must have unique titles for artwork.'}
    
    belongs_to :artists, 
        foreign_key: :artist_id, 
        class_name: :User

    has_many :artwork_shares 

    has_many :shared_viewers,
        through: :artwork_shares,
        source: :viewer 

    has_many :comments, dependent: :destroy, 
        foreign_key: :artwork_id, 
        class_name: :Comment 
        

end
