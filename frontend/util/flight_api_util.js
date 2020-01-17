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

export const createFlightSession = (flightInfo) => {
    return ($.ajax({
        async: true,
        crossDomain: true,
        method: 'GET',
        url: "https://tripadvisor1.p.rapidapi.com/flights/create-session",
        data: {
            d1: flightInfo.d1,
            o1: flightInfo.o1,
            dd1: flightInfo.dd1,
            currency: "USD",
            ta: 1,
            c: 0
        },
        headers: {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": window.tripAdvisorAPIKey
        }
    }))
}

export const fetchFlightsApi = (sid) => (
    $.ajax({
        async: true,
        crossDomain: true,
        url: "https://tripadvisor1.p.rapidapi.com/flights/poll",
        data: {
            sid: sid,
            ns: "NON_STOP",
            so: "EARLIEST_OUTBOUND_DEPARTURE"
        },
        method: "GET",
        headers: {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": window.tripAdvisorAPIKey
        }
    })
)