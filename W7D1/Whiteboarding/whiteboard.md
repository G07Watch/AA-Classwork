#What is a class?  
 
#What does self mean?

Explain 'a ||= b'
if a is true
 a
else
 a = b

 #What is the use of super?

 ``rb
RSpec.describe Calculator do
  it "add method adds numbers" do
    calc = Calculator.new
    expect(calc.add(3, 4)).to eq(7)
  end
end

# Design a musical jukebox using object oriented principles

class Jukebox

    @Genres = ['Rock','Blues','Hip Hop' .. ]
    @Artists = ['BonJovi' ]

    #play(Song)
    #select(Song)
    #shuffle(*genre,artist)


class Song

    @name
    @Artist
    @genre

    

# Design a parking lot
class ParkingGarage
  @lots 
  @cost 

class ParkingLot 
  @spaces
  @capacity  - number of spaces
  @vacant_spaces - number of open spaces


class ParkingSpace
  @filled - true/false


  #park(car)   - add cost to profit
              - change filled to true
                - decrement vacant spaces


#Implement BFS  Assume a node(value)
#Monkey patch existing Node class
#starts at root takes in target and proc as an argument

#class Node
def BFS(target, prc #= nil)

    prc ||= Proc.new(|node| node == target )

    queue = [root]

    while !queue.empty?
        suspect = queue.shift
        if prc.call(suspect.value)
            return suspect 
        else
            suspect.children.each do |child|
                queue << child
            end
        end
    end

    nil
end

  def bfs(&prc)
    raise "Must give a proc or target" if prc.nil?

#Implement dfs, node class w/ value
#monkey patch
# dfs(target, prc) 
     1
    /  \
   2    3
class Node

  def dfs(target, prc=nil)
    prc ||= Proc.new{|node| node== gitarget}

    return self if prc.call(self)

    self.children.each do |child|
      search = child.dfs(target, prc)
      return search if search
    end

    nil
  end

end