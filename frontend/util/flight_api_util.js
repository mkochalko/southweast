export const getFlights = (flightInfo) => (
    $.ajax({
        method: "GET",
        url: "/api/flights",
        data: { flightInfo }
    })
)