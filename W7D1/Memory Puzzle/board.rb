require_relative "card"

class Board

    attr_reader :grid
    attr_accessor :values

    def initialize
        @grid = Array.new(4) {Array.new(4)}
        @values = ('A'..'H').to_a + ('A'..'H').to_a 
        values.shuffle!
        self.populate        
    end

    def [](pos)
        row,col = pos
        grid[row][col]
    end

    def []=(pos,val)
        row,col = pos
        grid[row][col] = val
    end


    def place_pair(pos,pos2) 
        first_val = values.shift
        second_val = values.shift
        self[pos] = Card.new(first_val)
        self[pos2] = Card.new(second_val)
    end

    def check_empty?(pos)
        if self[pos].nil?
            return true
        elsif self[pos].is_a?(Card)
            return false
        end
    end

    def populate
        (0...grid.length).each do |row|
            (0...grid.length-1).each do |col|
                pos = [row,col]
                pos2 = [row,col+1]
                if check_empty?(pos)
                    place_pair(pos,pos2)
                end
            end
        end
    end

    def render
        system("clear")
        print "  #{ (0...grid.length).to_a.join(" ") }\n"
        grid.each_with_index do |row, idx|
            print "#{idx} " "#{row.join(" ")} "
            print "\n"
        end
        return "rendered"
    end

    def reveal(pos)
        card = self[pos]
        if card.shown != true
            card.reveal
        end

    end

    def reveal_all
        grid.each do |row|
            row.each do |pos|
                pos.reveal
            end
        end
    end

    def won?
        grid.all? { |row| row.all? { |pos| pos.shown == true } }
    end


end
