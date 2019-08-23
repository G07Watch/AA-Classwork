


class Card
    attr_reader :face_up
    attr_accessor :face_value

    def initialize(face_value)
        @face_value = face_value
        @face_up = true 
    end

    def reveal
        @face_up = true
    end

    def hide
        @face_up = false
    end

    def ==(other_card) #Checks for pair
        return true if (self.face_value <=> other_card.face_value) == 0
        false
    end


end