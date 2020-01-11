export const getFlights = (flightInfo) => (
    $.ajax({
        method: "GET",
        url: "/api/flights",
        data: { flightInfo }
    })
)

export const getFlight = (flightId) => (
    $.ajax({
        method: "GET",
        url: `/api/flights/${flightId}`
    })
)