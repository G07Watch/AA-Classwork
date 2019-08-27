# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
    ArtworkShare.destroy_all
    User.destroy_all
    Artwork.destroy_all
end





u1 = User.create(username: 'DJimd')
u2 = User.create(username: 'Sandra')
u3 = User.create(username: 'Blake')
u4 = User.create(username: 'Friday')
u5 = User.create(username: 'Paul')


a1 = Artwork.create(title: 'Flowers and a cat', image_url: 'google.com/hwipufhew', artist_id: u1.id)
a2 = Artwork.create(title: 'Death', image_url: 'google.com/google.jpeg', artist_id: u2.id)
a3 = Artwork.create(title: 'Still life with fruit and person', image_url: 'ask.com/artist_art_art.png', artist_id: u5.id)
a4 = Artwork.create(title: 'Untitled 4', image_url: 'google.com/bird_search.png', artist_id: u3.id)
a5 = Artwork.create(title: 'Masterpiece', image_url: 'google.com/hello.png', artist_id: u4.id)

ArtworkShare.create(viewer_id: u5.id, artwork_id: a1.id)
ArtworkShare.create(viewer_id: u4.id, artwork_id: a2.id)
ArtworkShare.create(viewer_id: u3.id, artwork_id: a3.id)
ArtworkShare.create(viewer_id: u2.id, artwork_id: a4.id)
ArtworkShare.create(viewer_id: u1.id, artwork_id: a5.id)
