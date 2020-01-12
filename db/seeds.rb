# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


    User.create(username: 'Demo User', password: 'testing', first_name: 'Orville', last_name: 'Wright', birthdate: '1871/09/19', address: '52 Ohio Blvd', city: 'Dayton', state: 'Ohio', zip_code: '45400', phone_number: '18008675309', email: 'Oright@gmail.com', points: 100000)

    City.create(name: 'San Diego International Airport', name_abbreviation: 'SAN')
    City.create(name: 'San Francisco International Airport', name_abbreviation: 'SFO')
    City.create(name: 'Los Angeles International Airport', name_abbreviation: 'LAX')
    City.create(name: 'LaGuardia Airport', name_abbreviation: 'LGA')
    City.create(name: 'Oakland International Airport', name_abbreviation: 'OAK')

    Flight.create(departure_city_id: 1, arrival_city_id: 2, departure_date: '2020-03-21', duration: 80, departure_time: '10:30:00')
    Flight.create(departure_city_id: 2, arrival_city_id: 1, departure_date: '2020-03-23', duration: 80, departure_time: '12:45:00')
    Flight.create(departure_city_id: 3, arrival_city_id: 4, departure_date: '2020-03-21', duration: 360, departure_time: '10:30:00')
    Flight.create(departure_city_id: 4, arrival_city_id: 3, departure_date: '2020-03-23', duration: 360, departure_time: '12:45:00')
    Flight.create(departure_city_id: 1, arrival_city_id: 5, departure_date: '2020-04-20', duration: 80, departure_time: '10:30:00')
    Flight.create(departure_city_id: 5, arrival_city_id: 1, departure_date: '2020-04-29', duration: 80, departure_time: '12:45:00')

    Trip.create(user_id: 1, trip_code: "KMBR392", departure_flight_id: 1, return_flight_id: 2)
    Trip.create(user_id: 1, trip_code: "KMBR3922", departure_flight_id: 3, return_flight_id: 4)
    Trip.create(user_id: 1, trip_code: "KFBR39", departure_flight_id: 5, return_flight_id: 6)
    Trip.create(user_id: 1, trip_code: "KFBR3922", departure_flight_id: 6, return_flight_id: 5)

