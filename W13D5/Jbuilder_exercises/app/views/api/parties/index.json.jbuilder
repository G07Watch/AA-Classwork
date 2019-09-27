json.array! @parties.map do |party|
  json.name party.name
  json.location party.location
end