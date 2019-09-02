# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
   

   #validations


   describe "validations" do

    it { should validate_presence_of(:username)}
    it { should validate_length_of(:password).is_at_least(8).on(:create)}
    it { should validate_presence_of(:password_digest)}
    it { should validate_presence_of(:session_token)}
   end

   #associations
   describe "associations" do 
      it { should have_many(:goals)}
      it { should have_many(:authored_comments)}
   end

   #methods
  describe "::find_by_credentials" do

    let!(:user) { FactoryBot.create(:user) }
    
  
    
    it "finds a user with username and password" do
      # debugger
      firstname = User.first.username #user.username if lazy assignment
 
    user1 = User.find_by_credentials(firstname, "password")
    expect(user1.username).to eq(user.username)
    
   end
    
    it "returns nil when username or password isn't valid" do
      baduser = User.create(username: "fakeuser", password: "fakepassword")
      expect(User.find_by_credentials("wrong_user", "fakepassword")).to be(nil)
      expect(User.find_by_credentials("fakeuser", "wrongpassword")).to be(nil)
      
    end

  end

  describe "#ensure_session_token" do
   let!(:user) { FactoryBot.create(:user) }
   it "creates a session token if one doesn't exist" do
    expect(user.ensure_session_token).to_not be_nil
   end
  end

  describe "#generate_session_token" do
    let!(:user) { FactoryBot.create(:user) }
    it "creates a new session token" do
      expect(user.ensure_session_token).to_not be_nil
    end
  end

  describe "#reset_session_token!" do 
    let!(:user) { FactoryBot.create(:user) }
    it "resets the session token" do
      old_token = user.session_token
      user.reset_session_token!
      expect(user.reset_session_token!).not_to eql(old_token)
    end
  end

  describe "#is_password?" do 
   let!(:user) { FactoryBot.create(:user) }
    it "verifies the password is correct" do
      expect(user.is_password?("password")).to be true
    end
  end

  describe "#password=" do 
    user1 = User.new(username: "username", password: "hunter22")
    it "sets the password " do
      expect(user1.is_password?("hunter22")).to be true
    end
  end



end
