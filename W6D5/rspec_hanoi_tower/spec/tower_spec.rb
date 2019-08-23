require "tower"

describe Tower do
    subject(:tower1) { Tower.new(num = 0) }
    it "should have array contains disks" do
        expect(tower1.disks).to be_a(Array)
    end

    describe "empty?" do
        subject(:tower2) { Tower.new(2) }
        

        it "should check if a tower is empty" do
            expect(tower2.empty?).to be(true)
        end
    end
    describe "remove_disk" do
        it "should not pick an empty tower" do 
            tower2 = Tower.new
            let(:tower2.empty?) {true}
            expect{ tower2.remove_disk }.to raise_error("Can't remove disk from empty tower!")    
        end

    end

    describe "add_disk" do
        
    end


end