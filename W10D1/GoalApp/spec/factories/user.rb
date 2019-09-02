FactoryBot.define do
    factory :user do
        username {|n| Faker::Movies::StarWars.character}
        password {|p| "password"}
    end
end