import { connect } from 'react-redux';
import FlightsSearchIndex from './flights_search_index';
import { postFlight } from '../../actions/flight_actions';
// flightInfo: state.entities.flightsApi

const mapStateToProps = state => ({
    flightInfo: Object.values(flightTestObject),
    passengerCount: state.entities.passenger
})


const mapDispatchToProps = dispatch => ({
    postFlight: (flightInfo) => dispatch(postFlight(flightInfo))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FlightsSearchIndex)

// Object.values(state.entities.flightsApi)



let flightTestAPI = {
    summary: {
        cu: "USD",
        et: 1579138271,
        nr: 120,
        c: false,
        f: true,
        p: 48.4,
        op: [
            {
                k: "SJC",
                t: "San Jose, CA (SJC)",
                p: "$49"
            }
        ],
        dp: [
            {
                k: "SAN",
                t: "San Diego, CA (SAN)",
                p: "$52"
            }
        ],
        fi: 20,
        pd: "$49",
        dn: 75,
        dx: 1729,
    },
    itineraries: {
        0: {
            key: "00OOAS1.0100SJC1.0228SAN0",
            ac: "00OOAS1.0100SJC1.0228SAN0",
            l: [
                {
                    0:
                    {
                        pr:
                        {
                            p: 48.4,
                            f: 16.77,
                            dp: "$49",
                            df: "$16.77"
                        }
                    },
                    id: "Sabre|1|48",
                    m: "AlaskaUSMeta",
                    fb: { id: "S", cc: "AS", nm: "Saver" },
                    s: "Alaska",
                    pl: [],
                }
            ],
            f:
            {
                0: {
                    l:
                    {
                        0: {
                            da: "SJC",
                            aa: "SAN",
                            c: 0,
                            m: "AS",
                            o: "OO",
                            e: "E75",
                            f: "3467",
                            si: 0,
                            n: 0,
                            dd: "2020-10-11T17:00:00-08:00",
                            ad: "2020-10-15T18:28:00-08:00",
                            tt: "f",
                            stf: false,
                            di: 417.6024,
                            od: "/SKYWEST AIRLINES AS ALASKASKYWEST",
                            ac: []
                        }
                    },
                    lo: [],
                    od: ["/SKYWEST AIRLINES AS ALASKASKYWEST"],
                },
                length: 1
            },
            fs: 0,
            od: "/SKYWEST AIRLINES AS ALASKASKYWEST",
            fsl: "TERRIBLE",
        },
        1: {
            key: "00OOAS1.0100SJC1.0228SAN0",
            ac: "00OOAS1.0100SJC1.0228SAN0",
            l: [
                {
                    0:
                    {
                        pr:
                        {
                            p: 48.4,
                            f: 16.77,
                            dp: "$49",
                            df: "$16.77"
                        }
                    },
                    id: "Sabre|1|48",
                    m: "AlaskaUSMeta",
                    fb: { id: "S", cc: "AS", nm: "Saver" },
                    s: "Alaska",
                    pl: [],
                }
            ],
            f:
            {
                0: {
                    l:
                    {
                        0: {
                            da: "SJC",
                            aa: "SAN",
                            c: 0,
                            m: "AS",
                            o: "OO",
                            e: "E75",
                            f: "3467",
                            si: 0,
                            n: 0,
                            dd: "2020-10-11T20:50:00-08:00",
                            ad: "2020-10-15T22:18:00-08:00",
                            tt: "f",
                            stf: false,
                            di: 417.6024,
                            od: "/SKYWEST AIRLINES AS ALASKASKYWEST",
                            ac: []
                        }
                    },
                    lo: [],
                    od: ["/SKYWEST AIRLINES AS ALASKASKYWEST"],
                },
                length: 1
            },
            fs: 0,
            od: "/SKYWEST AIRLINES AS ALASKASKYWEST",
            fsl: "TERRIBLE",
        },
        2: {
            key: "00OOAS1.0100SJC1.0228SAN0",
            ac: "00OOAS1.0100SJC1.0228SAN0",
            l: [
                {
                    0:
                    {
                        pr:
                        {
                            p: 48.4,
                            f: 16.77,
                            dp: "$49",
                            df: "$16.77"
                        }
                    },
                    id: "Sabre|1|48",
                    m: "AlaskaUSMeta",
                    fb: { id: "S", cc: "AS", nm: "Saver" },
                    s: "Alaska",
                    pl: [],
                }
            ],
            f:
            {
                0: {
                    l:
                    {
                        0: {
                            da: "SJC",
                            aa: "SAN",
                            c: 0,
                            m: "AS",
                            o: "OO",
                            e: "E75",
                            f: "3467",
                            si: 0,
                            n: 0,
                            dd: "2020-10-11T09:50:00-08:00",
                            ad: "2020-10-15T11:19:00-08:00",
                            tt: "f",
                            stf: false,
                            di: 417.6024,
                            od: "/SKYWEST AIRLINES AS ALASKASKYWEST",
                            ac: []
                        }
                    },
                    lo: [],
                    od: ["/SKYWEST AIRLINES AS ALASKASKYWEST"],
                },
                length: 1
            },
            fs: 0,
            od: "/SKYWEST AIRLINES AS ALASKASKYWEST",
            fsl: "TERRIBLE",
        },
        3: {
            key: "00OOAS1.0100SJC1.0228SAN0",
            ac: "00OOAS1.0100SJC1.0228SAN0",
            l: [
                {
                    0:
                    {
                        pr:
                        {
                            p: 48.4,
                            f: 16.77,
                            dp: "$49",
                            df: "$16.77"
                        }
                    },
                    id: "Sabre|1|48",
                    m: "AlaskaUSMeta",
                    fb: { id: "S", cc: "AS", nm: "Saver" },
                    s: "Alaska",
                    pl: [],
                }
            ],
            f:
            {
                0: {
                    l:
                    {
                        0: {
                            da: "SJC",
                            aa: "SAN",
                            c: 0,
                            m: "AS",
                            o: "OO",
                            e: "E75",
                            f: "3467",
                            si: 0,
                            n: 0,
                            dd: "2020-10-11T07:00:00-08:00",
                            ad: "2020-10-15T08:30:00-08:00",
                            tt: "f",
                            stf: false,
                            di: 417.6024,
                            od: "/SKYWEST AIRLINES AS ALASKASKYWEST",
                            ac: []
                        }
                    },
                    lo: [],
                    od: ["/SKYWEST AIRLINES AS ALASKASKYWEST"],
                },
                length: 1
            },
            fs: 0,
            od: "/SKYWEST AIRLINES AS ALASKASKYWEST",
            fsl: "TERRIBLE",
        },
        4: {
            key: "00OOAS1.0100SJC1.0228SAN0",
            ac: "00OOAS1.0100SJC1.0228SAN0",
            l: [
                {
                    0:
                    {
                        pr:
                        {
                            p: 48.4,
                            f: 16.77,
                            dp: "$49",
                            df: "$16.77"
                        }
                    },
                    id: "Sabre|1|48",
                    m: "AlaskaUSMeta",
                    fb: { id: "S", cc: "AS", nm: "Saver" },
                    s: "Alaska",
                    pl: [],
                }
            ],
            f:
            {
                0: {
                    l:
                    {
                        0: {
                            da: "SJC",
                            aa: "SAN",
                            c: 0,
                            m: "AS",
                            o: "OO",
                            e: "E75",
                            f: "3467",
                            si: 0,
                            n: 0,
                            dd: "2020-10-11T11:20:00-08:00",
                            ad: "2020-10-15T12:35:00-08:00",
                            tt: "f",
                            stf: false,
                            di: 417.6024,
                            od: "/SKYWEST AIRLINES AS ALASKASKYWEST",
                            ac: []
                        }
                    },
                    lo: [],
                    od: ["/SKYWEST AIRLINES AS ALASKASKYWEST"],
                },
                length: 1
            },
            fs: 0,
            od: "/SKYWEST AIRLINES AS ALASKASKYWEST",
            fsl: "TERRIBLE",
        }
    },
    airports: [
        {
            0:
            {
                tz: "America/Los_Angeles",
                c: "SAN",
                i: 60750,
                g: { lat: 32.732777, lon: -117.191666 },
                cc: "US",
                cn: "San Diego",
                n: "San Diego Intl Airport",
                d: "San Diego, CA - San Diego International Airport (SAN)",
                st: "CA"
            }
        },
        {
            1: {
                tz: "America/Los_Angeles",
                c: "SJC",
                i: 33020,
                g: { lat: 37.3625, lon: -121.92834 },
                cc: "US",
                cn: "San Jose",
                n: "Mineta San Jose Intl Airport",
                d: "San Jose, CA - Mineta San Jose Intl Airport (SJC)",
                st: "CA",
            }
        }
    ],
    search_params: {
        it: "ONE_WAY",
        o: 0,
        st: "2020-01-16T01:03:11Z",
        so: "PRICE",
        t:
        {
            a: 1,
            s: 0,
            c: []
        },
        s: [
            { dd: "2020-10-11", o: "SJC", d: "SAN", no: false, nd: false }
        ],
        sid: "447eef0c-01b7-4108-abef-a5a672c15706.951"
    }
}

let flightTestObject = { 0: flightTestAPI }