class Flight < ApplicationRecord

    validates :departure_city_id, :arrival_city_id, :duration, :departure_datetime, presence: true

    belongs_to :departure_city,
        primary_key: :id,
        foreign_key: :departure_city_id,
        class_name: :City


    belongs_to :arrival_city,
        primary_key: :id,
        foreign_key: :arrival_city_id,
        class_name: :City
end
