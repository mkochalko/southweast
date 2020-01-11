export const getTrips = () => (
    $.ajax({
        method: "GET",
        url: "/api/trips"
    })
)

export const getTrip = (tripId) => (
    $.ajax({
        method: "GET",
        url: `/api/trips/${tripId}`
    })
)

export const createTrip = trip => (
    $.ajax({
        method: "POST",
        url: "api/trips",
        data: { trip }
    })
)

export const updateTrip = trip => (
    $.ajax({
        method: "PATCH",
        url: `/api/trips/${trip.id}`,
        data: { trip }
    })
)

export const cancelTrip = (tripId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/trips/${tripId}`
    })
)