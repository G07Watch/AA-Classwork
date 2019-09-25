#Warm up

def range(start, endpt)
    #returns an array of all numbers from start to end excluding end
    #returns an empty array if end < start

    rarr = [] 
    return rarr if endpt <= start

    rarr << start

    rarr += range(start+1,endpt)   
end


# p range(1,10)

#Sum an array recursive
def re_sum(arr)
    return arr[0] if arr.length <=1
    arr[0] + re_sum(arr[1..-1])
end


# Examples re_sum
# a = []
# p re_sum(a)
# b = [1]
# p re_sum(b)
# c = [4,5,6]
# p re_sum(c)



# Sum an array iterative
def it_sum(arr)
    arr.inject {|sum, n| sum+n}
end

# Examples it_sum
# p it_sum([])
# p it_sum([1])
# p it_sum([4,5,6])


#Exponentiation

def exp_1(b,n)
    return 1 if n == 0
    b * exp_1(b,n-1)
end


# Examples exp_1  
# p exp_1(0,1)
# p exp_1(1,0)
# p exp_1(2, 256)


def exp_2(b,n)
    return 1 if n == 0

    if n.even? 
        m = n/2
       return exp_2(b,m) *  exp_2(b,m)
    else
        m = (n-1)/2
       return b * exp_2(b,m) * exp_2(b,m)
    end 
end


# Examples exp_2
# p exp_2(0,1)
# p exp_2(1,0)
# p exp_2(2,256)
# p exp_2(3,4)


def deep_dup(arr)
    dup = []

    arr.each do |ele|
        if ele.is_a?(Array)
            dup << deep_dup(ele)
        else
            dup << ele
        end
    end

    dup
end

# Examples deep_dup
# p deep_dup([1,['a'], [2], [3, [4]]])



def re_fib(n)
    return [0,1].take(n) if n <= 2

    previous = re_fib(n-1)
    last = (previous[-1] + previous[-2])

    previous << last
end

# p re_fib(18)




def it_fib(n)
    
    return [0] if n == 0
    return [0,1] if n == 1

    fib_array = [0,1]
    i = 2
    until i == n 
        next_fib = fib_array[-1] + fib_array[-2] 
        fib_array << next_fib
        i+=1
    end
    
    fib_array
end


# Examples it_fib
# p it_fib(18)



def bsearch(array, target)
    return nil if array.empty? # if target isn't found
    mid = (array.length/2)
    

    lower = array[0...mid] 
    upper = array[mid+1..-1]

    if target == array[mid]
        return mid
    elsif target < array[mid]
        bsearch(lower,target)
    else
        subsearch = bsearch(upper,target)
        if subsearch == nil
            return nil
        else
            return 
            bsearch(upper,target) + (mid+1)
        end
    end
end


# p bsearch([1, 2, 3], 1) # => 0
# p bsearch([2, 3, 4, 5], 3) # => 1
# p bsearch([2, 4, 6, 8, 10], 6) # => 2
p bsearch([1, 3, 4, 5, 9], 5) # => 3
# p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
# p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
# p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil

#  p 1/2