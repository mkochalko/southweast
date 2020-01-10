class City < ApplicationRecord
    validates :name, :name_abbreviation, presence: true, uniqueness: true

    has_many :departing_flights,
        primary_key: :id,
        foreign_key: :departure_city_id,
        class_name: :Flights

    has_many :arriving_flights,
        primary_key: :id,
        foreign_key: :arrival_city_id,
        class_name: :Flights
end
