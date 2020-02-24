# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


    User.create(username: 'Demo User', password: 'testing', first_name: 'Orville', last_name: 'Wright', birthdate: '1871/09/19', address: '52 Ohio Blvd', city: 'Dayton', state: 'Ohio', zip_code: '45400', phone_number: '18008675309', email: 'Oright@gmail.com', points: 100000)

    # City.create(name: 'San Diego', name_abbreviation: 'SAN')
    # City.create(name: 'San Francisco', name_abbreviation: 'SFO')
    # City.create(name: 'Los Angeles', name_abbreviation: 'LAX')
    # City.create(name: 'New York', name_abbreviation: 'LGA')
    # City.create(name: 'Oakland', name_abbreviation: 'OAK')
    # City.create(name: 'Denver', name_abbreviation: 'DEN')

    Flight.create(departure_city_id: 'SFO', arrival_city_id: 'LAX', departure_date: '2020-03-21', duration: 80, departure_time: '10:30:00AM')
    Flight.create(departure_city_id: 'LAX', arrival_city_id: 'SFO', departure_date: '2020-03-23', duration: 80, departure_time: '12:45:00PM')
    Flight.create(departure_city_id: 'SAN', arrival_city_id: 'OAK', departure_date: '2020-03-21', duration: 360, departure_time: '10:30:00AM')
    Flight.create(departure_city_id: 'OAK', arrival_city_id: 'SAN', departure_date: '2020-03-23', duration: 360, departure_time: '12:45:00PM')
    Flight.create(departure_city_id: 'LAX', arrival_city_id: 'DEN', departure_date: '2020-04-20', duration: 80, departure_time: '10:30:00AM')
    Flight.create(departure_city_id: 'DEN', arrival_city_id: 'LAX', departure_date: '2020-04-29', duration: 80, departure_time: '12:45:00PM')
    Flight.create(departure_city_id: 'SFO', arrival_city_id: 'SAN', departure_date: '2019-04-20', duration: 80, departure_time: '12:45:00PM')
    Flight.create(departure_city_id: 'SAN', arrival_city_id: 'SFO', departure_date: '2019-04-29', duration: 80, departure_time: '14:45:00PM')
    Flight.create(departure_city_id: 'LAX', arrival_city_id: 'SAN', departure_date: '2019-08-29', duration: 120, departure_time: '16:45:00PM')
    Flight.create(departure_city_id: 'SAN', arrival_city_id: 'LAX', departure_date: '2019-09-04', duration: 120, departure_time: '09:45:00AM')
    Flight.create(departure_city_id: 'PHX', arrival_city_id: 'OAK', departure_date: '2019-08-29', duration: 120, departure_time: '06:15:00AM')
    Flight.create(departure_city_id: 'OAK', arrival_city_id: 'PHX', departure_date: '2019-09-04', duration: 120, departure_time: '11:35:00AM')
    Flight.create(departure_city_id: 'DEN', arrival_city_id: 'SFO', departure_date: '2019-01-29', duration: 120, departure_time: '15:55:00PM')
    Flight.create(departure_city_id: 'SFO', arrival_city_id: 'DEN', departure_date: '2019-02-04', duration: 120, departure_time: '08:05:00AM')
    Flight.create(departure_city_id: 'LAX', arrival_city_id: 'DEN', departure_date: '2019-05-03', duration: 360, departure_time: '20:05:00PM')
    Flight.create(departure_city_id: 'DEN', arrival_city_id: 'LAX', departure_date: '2019-05-07', duration: 360, departure_time: '11:25:00AM')
    Flight.create(departure_city_id: 'DEN', arrival_city_id: 'PHX', departure_date: '2019-09-03', duration: 360, departure_time: '19:05:00PM')
    Flight.create(departure_city_id: 'PHX', arrival_city_id: 'DEN', departure_date: '2019-09-10', duration: 360, departure_time: '10:25:00AM')
    Flight.create(departure_city_id: 'SAN', arrival_city_id: 'DEN', departure_date: '2019-05-17', duration: 210, departure_time: '17:05:00PM')
    Flight.create(departure_city_id: 'DEN', arrival_city_id: 'SAN', departure_date: '2019-05-23', duration: 210, departure_time: '07:25:00AM')

    Trip.create(user_id: 1, trip_code: "KMBR392", departure_flight_id: 1, return_flight_id: 2)
    Trip.create(user_id: 1, trip_code: "KMBR3922", departure_flight_id: 3, return_flight_id: 4)
    Trip.create(user_id: 1, trip_code: "KFBR39", departure_flight_id: 5, return_flight_id: 6)
    Trip.create(user_id: 1, trip_code: "KFBR3922", departure_flight_id: 6, return_flight_id: 5)
    Trip.create(user_id: 1, trip_code: "KFBR392", departure_flight_id: 2, return_flight_id: 1)
    Trip.create(user_id: 1, trip_code: "KFBR392!", departure_flight_id: 7, return_flight_id: 8)
    Trip.create(user_id: 1, trip_code: "KFBR392!!", departure_flight_id: 9, return_flight_id: 10)
    Trip.create(user_id: 1, trip_code: "KFBR392!!!", departure_flight_id: 11, return_flight_id: 12)
    Trip.create(user_id: 1, trip_code: "KFBR392!!!!", departure_flight_id: 13, return_flight_id: 14)
    Trip.create(user_id: 1, trip_code: "4THoFJULY", departure_flight_id: 15, return_flight_id: 16)
    Trip.create(user_id: 1, trip_code: "LABORDay", departure_flight_id: 17, return_flight_id: 18)
    Trip.create(user_id: 1, trip_code: "MEMORIALDay", departure_flight_id: 19, return_flight_id: 20)


