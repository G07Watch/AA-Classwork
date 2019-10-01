
poke_items = @pokemon.items 


  json.pokemon do 
      json.id @pokemon.id
      json.name @pokemon.name 
      json.attack @pokemon.attack
      json.defense @pokemon.defense
      json.moves @pokemon.moves 
      json.poke_type @pokemon.poke_type
      json.image_url @pokemon.image_url
      json.item_ids poke_items.map { |item| item.id }
  end

json.items do
    @pokemon.items.each do |item|
        json.set! item.id do
        json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
        end
    end
end