class Card
    
    attr_reader :value
    attr_accessor :shown

    def initialize(value)
        @value = value
        @shown = false
    end

    def hide
        self.shown = false
    end

    def reveal
        self.shown = true
    end

    def to_s

        if shown
            return self.value.to_s
        else
            return " "
        end

    end

    def ==(other_card)
        return true if self.value == other_card.value
        false
    end



end