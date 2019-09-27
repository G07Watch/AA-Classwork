 json.partial! '/api/guests/guest', guest: @guest

json.gifts @guest.gifts.map  do |gift|
  json.title gift.title
  json.description gift.description
end

  # guest: {
  #   name
  #   age
  #   favorite_color
  # }

#  gifts : {

#   {title
#   description  
#   }

#   {title
#   description  
#   }

#   {title
#   description  
#   }

#  }