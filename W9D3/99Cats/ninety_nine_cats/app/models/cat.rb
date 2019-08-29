require 'action_view'

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper
    validates :color, inclusion: { in: ['black', 'white', 'grey', 'brown'] }
    validates :sex, inclusion: { in: ['M', 'F'] }
    validates :birth_date, :color, :name, :sex, :description, presence: true

    COLORS = ['black', 'white', 'grey', 'brown']
    
    def age
        time_ago_in_words(self.birth_date)
    end
end