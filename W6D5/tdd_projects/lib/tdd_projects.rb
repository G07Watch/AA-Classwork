class Array

    def my_uniq
        new_arr = []
        self.each do |ele| 
            new_arr << ele if new_arr.none?(ele)
        end
        new_arr
    end

    def two_sum
        pairs = []

        (0...self.length-1).each do |idx|
            (idx+1...self.length).each do |idx2|
                pairs << [idx,idx2] if (self[idx] + self[idx2]) == 0
            end
        end

        pairs
    end

    def my_transpose
        transposed = []
        idx = 0
        while idx < self.length
            new_row = []
            self.each do |row|
                new_row << row[idx]
            end
            idx += 1
            transposed << new_row
        end
        transposed
    end

    def stock_picker
        pair = []
        profit = self[1]-self[0]

        (0...self.length-1).each do |day|
            (1...self.length).each do |day2|
                if self[day2]-self[day] > profit
                    pair = [day,day2]
                    profit = self[day2]-self[day]
                end
            end
        end

        return pair

    end


end