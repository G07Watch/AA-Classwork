class Tower

    attr_reader :disks

    def initialize(pos = 0)
        @pos = pos
        @disks = [1, 2, 3] if pos == 0
    end

  

end