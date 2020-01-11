@flights.each do |flight| 
    json.set! flight.id do 
        json.extract! flight, :id, :departure_city_id, :arrival_city_id, :departure_datetime, :duration, :passengers
    end
end