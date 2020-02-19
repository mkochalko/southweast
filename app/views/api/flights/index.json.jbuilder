@flights.each do |flight| 
    json.set! flight.id do 
        json.extract! flight, :id, :departure_city_id, :arrival_city_id, :departure_date, :duration, :passengers, :departure_time, :price
    end
end
# json.flight.departure_date.strftime('%a, %b %d, %Y')