@trips.each do |trip|
    json.set! trip.id do 
        json.extract! trip, :id, :departure_flight_id, :return_flight_id, :user_id, :trip_code
    end
end
