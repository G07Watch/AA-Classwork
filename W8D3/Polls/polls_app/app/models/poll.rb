# == Schema Information
#
# Table name: polls
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Poll < ApplicationRecord
    validates :title, presence: true

    belongs_to :author,
        foreign_key: :user_id,
        class_name: :User

    has_many :questions,
        foreign_key: :poll_id,
        class_name: :Question 
        
end
