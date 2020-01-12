@cities.each do |city|
    json.set! city.id do 
        json.extract! city, :id, :name, :name_abbreviation
    end
end