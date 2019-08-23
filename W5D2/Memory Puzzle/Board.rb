require_relative "Card"
require "byebug"
class Board
    def initialize
        @grid = Array.new(4) { Array.new(4,0)}
    
    end

    def [](position)
        row,col = position
        @grid[row][col]
    end

    def []= position, value
        row,col = position[0],position[1]
        @grid[row][col] = value
    end

    def check_empty?(position)
        return position if !self[position].is_a?(Card)
        false
    end

    def hide_all
        (0...@grid.length).each do |row|
            (0...@grid.length).each do |col|
                pos = [row,col]
                if !check_empty?(pos)
                    self[pos].hide
                end
            end
        end
    end


    def populate #fills board with pairs
        #  position = [rand(0...@grid.length), rand(0...@grid.length)]
        puts "..working.."
        sleep(0.2)
        pair_values = ('A'..'H').to_a

        3.times do# while !pair_values.empty?
            card_val = pair_values.pop

            2.times do
                x = rand(0..@grid.length-1)
                y = rand(0..@grid.length-1)
                pos = [x,y]
                if !check_empty?(pos)
                    puts "checking empty"
                    x = rand(0..@grid.length-1)
                    y = rand(0..@grid.length-1)
                    pos = [x,y]
                end 
                self[pos] = Card.new(card_val)
            end
        end
        
        while !pair_values.empty?
            card_val = pair_values.pop
            2.times do
                (0...@grid.length).each do |idx|
                    (0...@grid.length).each do |idx2|
                        pos = [idx,idx2]
                        if position = check_empty?(pos)
                            position = Card.new(card_val)
                        end
                    end
                end
            end
        end
        true
    end

    def render #Prints the Board
        
        print "   " 
        (0...@grid.length).each do |i|
            print i
            print " "
        end    
        print "\n"
         @grid.each_with_index do |row,i|
            print i
            print " "
            row.each_with_index do |tile, j|
                pos = [i,j]
                    print " "
                    if self[pos].is_a?(Card) && self[pos].face_up
                        print self[pos].face_value
                    else
                        print " "
                    end
            end
            print "\n"
        end
        return "rendered"
    end

    def reveal(pos) #Should reveal cards at a guessed position
        
        if self[pos].face_up != true
            self[pos].reveal
            self.render
        end
       self[pos].face_value
    end
    
    def won? #Check if all card is face up
        @grid.all? 
        row.all? {|position| position.face_up == true}
    end


  


    
end