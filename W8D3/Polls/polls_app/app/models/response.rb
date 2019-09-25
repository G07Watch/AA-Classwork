# == Schema Information
#
# Table name: responses
#
#  id               :bigint           not null, primary key
#  body             :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  answer_choice_id :integer
#  user_id          :integer
#

class Response < ApplicationRecord
    validates :body, presence: true

    belongs_to :answer_choice,
        foreign_key: :answer_choice_id,
        class_name: :AnswerChoice

    belongs_to :respondent,
      foreign_key: :user_id,
      class_name: :User



end
