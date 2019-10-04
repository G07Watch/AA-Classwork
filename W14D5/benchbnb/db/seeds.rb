# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


bench_one = Bench.new( description: "nicer bench", lat: 37.767, lng: -122.469)
bench_two = Bench.new( description: "pretty bench", lat: 37.714, lng: -122.497)
bench_three = Bench.new( description: "Huge Bench", lat: 37.730, lng: -122.382)

bench_one.save
bench_two.save
bench_three.save

user_one = User.new( username: 'Garvin', password: 'password')
user_one.save
