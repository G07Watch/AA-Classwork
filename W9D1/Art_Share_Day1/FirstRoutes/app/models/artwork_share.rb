class ArtworkShare < ApplicationRecord
    validates :viewer_id, :artwork_id, uniqueness: true, presence: true

    belongs_to :artwork


    belongs_to :viewer,
        foreign_key: :viewer_id,
        class_name: :User 

end