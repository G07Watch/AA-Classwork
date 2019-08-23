# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
name = %w(Bob Joe Janice Jill Mike Alice)
name.each do
  temp_name = name.shift
  User.create(username: temp_name)
end


Poll.create(title: 'Favorite Stuff', user_id: 1)



question_a = ['Cats or Dogs?', 'Favorite Color?', 'Favorite Food?']
question_a.each do
    question = question_a.shift
    Question.create(body: question, poll_id: Poll.first.id)
end


# Question.create(body: 'test?', poll_id: 1)

