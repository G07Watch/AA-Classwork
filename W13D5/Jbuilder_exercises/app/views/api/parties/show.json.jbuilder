json.extract! @party, :name, :location
  


json.guests @party.guests.each do |guest|
    json.name guest.name
    json.gifts guest.gifts.each do |gift|
      json.title gift.title
    end
end

