require_relative "board"
require "byebug"

class Game
    attr_accessor :board, :previous_guess

    def initialize
        @board = Board.new
        @previous_guess = []
        self.play
    end

    def play
        print "Welcome to Memory Puzzle!"
        until board.won?
            board.render
            print "Please input a guess in the form of 'x,y' "
            guess = gets.chomp.split(",")
            self.make_guess(guess)
            sleep(0.5)
        end
        puts
        puts "Game Over. You won!"
        return
    end

    def make_guess(pos)
        pos = pos.map {|entry| entry.to_i }
        pg = previous_guess

        board.reveal(pos)
        board.render

        if pg.empty?
            self.previous_guess = pos
        elsif board[pg].value != board[pos].value
            sleep(0.5)
            board[pg].hide
            board[pos].hide
            self.previous_guess = []
        else 
            self.previous_guess = []
        end
    end

end
