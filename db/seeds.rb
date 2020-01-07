# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


    User.create(username: 'Demo User', password: 'testing', first_name: 'Orville', last_name: 'Wright', birthdate: '1871/09/19', address: '52 Ohio Blvd', city: 'Dayton', state: 'Ohio', zip_code: '45400', phone_number: '18008675309', email: 'Oright@gmail.com', points: 100000)