# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  poll_id    :integer
#

class Question < ApplicationRecord
    validates :body, presence: true

    has_many :answer_choices,
        foreign_key: :question_id,
        class_name: :AnswerChoice 
    
    belongs_to :poll,
        foreign_key: :poll_id,
        class_name: :Poll

end
