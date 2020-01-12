export const getFlights = () => (
    $.ajax({
        method: "GET",
        url: "/api/flights",
    })
)

export const getFlight = (flightId) => (
    $.ajax({
        method: "GET",
        url: `/api/flights/${flightId}`
    })
)

export const getCities = () => (
    $.ajax({
        method: "GET",
        url: '/api/cities'
    })
)