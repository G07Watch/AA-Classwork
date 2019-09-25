require "tdd_projects"

describe "Array" do
    describe "my_uniq" do
        
        it "returns a new array" do
            test_arr = Array.new(0)
            expect(test_arr.my_uniq.object_id).not_to eql(test_arr.object_id)
        end
        it "returns array with duplicates removed" do
            [1, 1, 2, 2, 3]
            expect([1, 1, 2, 2, 3].my_uniq).to eql([1, 2, 3])
        end
    end

    describe "two_sum" do
        let(:array) {[-1, 0, 2, -2, 1]}
        it "should return pair of element indicies that sum up to zero" do
            expect(array.two_sum).to include([0, 4], [2, 3])
        end

        it "should not return copies of the same pair" do
            expect(array.two_sum).to_not include([1, 1])
        end
    end

    describe "my_transpose" do
        let(:twoD_arr) {[[0, 1, 2], [3, 4, 5], [6, 7, 8]]}

        it "should be a 2D array" do
            two_d = twoD_arr.my_transpose
            expect(two_d.all?(Array) ).to eql(true)
        end

        it "should switch rows with columns and columns with rows" do
            expect(twoD_arr.my_transpose).to eql([[0, 3, 6],[1, 4, 7],[2, 5, 8]]) 
        end

        it "should not use the built in Array#transpose method" do
            expect(twoD_arr).not_to receive(:transpose)
            twoD_arr.my_transpose
        end
    end

    describe "stock_picker" do
        let(:prices) { [5, 20, 12, 24, 7, 3] }
        let(:pair) {prices.stock_picker}

        it "should return greatest profit pairs" do
            expect(prices.stock_picker).to eql([0,3])
        end

        it "should always sell after buying" do
            expect(pair[0]).to be < pair[1]
        end
    end


end

