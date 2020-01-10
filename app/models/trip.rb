class Trip < ApplicationRecord

    validates :user_id, :trip_code, :departure_flight_id, presence: true
    validates :trip_code, uniqueness: true 

    belongs_to :user 

    belongs_to :departure_flight,
        primary_key: :id,
        foreign_key: :departure_flight_id,
        class_name: :Flight

    belongs_to :return_flight,
        primary_key: :id,
        foreign_key: :return_flight_id,
        class_name: :Flight
end
