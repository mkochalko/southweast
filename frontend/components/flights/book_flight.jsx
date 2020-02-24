import React from 'react';
import DatePicker from 'react-datepicker';
import { format, parseISO } from 'date-fns';
// import "react-datepicker/dist/react-datepicker.css";


class BookFlight extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.trip
        this.airportCodes = ['BHM', 'DHN', 'HSV', 'MOB', 'MGM', 'ANC', 'FAI', 'JNU', 'FLG', 'PHX', 'TUS', 'YUM', 'FYV', 'LIT', 
        'XNA', 'BUR', 'FAT', 'LGB', 'LAX', 'OAK', 'ONT', 'PSP', 'SMF', 'SAN', 'SFO', 'SJC', 'SNA', 'ASE', 'COS', 'DEN', 'GJT', 
        'PUB', 'BDL', 'HVN', 'IAD', 'DCA', 'DAB', 'FLL', 'RSW', 'JAX', 'EYW', 'MIA', 'MCO', 'PNS', 'PIE', 'SRQ', 'TPA', 'PBI', 
        'PFN', 'ATL', 'AGS', 'SAV', 'ITO', 'HNL', 'OGG', 'KOA', 'LIH', 'BOI', 'MDW', 'ORD', 'MLI', 'PIA', 'EVV', 'FWA', 'IND', 
        'SBN', 'CID', 'DSM', 'ICT', 'LEX', 'SDF', 'BTR', 'MSY', 'SHV', 'AUG', 'BGR', 'PWM', 'BWI', 'BOS', 'HYA', 'ACK', 'ORH', 
        'BTL', 'DTW', 'DET', 'FNT', 'GRR', 'AZO', 'LAN', 'MBS', 'DLH', 'MSP', 'RST', 'GPT', 'JAN', 'MCI', 'STL', 'SGF', 'BIL', 
        'LNK', 'OMA', 'LAS', 'RNO', 'MHT', 'ACY', 'EWR', 'TTN', 'ABQ', 'ALM', 'ALB', 'BUF', 'ISP', 'JFK', 'LGA', 'SWF', 'ROC', 
        'SYR', 'HPN', 'AVL', 'CLT', 'FAY', 'GSO', 'RDU', 'INT', 'BIS', 'FAR', 'CAK', 'CVG', 'CLE', 'CMH', 'DAY', 'TOL', 'OKC', 
        'TUL', 'EUG', 'PDX', 'HIO', 'SLE', 'ABE', 'ERI', 'MDT', 'PHL', 'PIT', 'AVP', 'PVD', 'CHS', 'CAE', 'GSP', 'MYR', 'PIR', 
        'RAP', 'FSD', 'TRI', 'CHA', 'TYS', 'MEM', 'BNA', 'AMA', 'AUS', 'CRP', 'DAL', 'DFW', 'ELP', 'HOU', 'IAH', 'LBB', 'MAF', 
        'SAT', 'SLC', 'BTV', 'MPV', 'RUT', 'IAD', 'PHF', 'ORF', 'RIC', 'ROA', 'PSC', 'SEA', 'GEG', 'CRW', 'CKB', 'HTS', 'GRB', 
        'MSN', 'MKE', 'CPR', 'CYS', 'JAC', 'RKS',]

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.roundTrip = this.roundTrip.bind(this);
        this.oneWayTrip = this.oneWayTrip.bind(this);
        this.airportDropdown = this.airportDropdown.bind(this);
        this.airportArrivalDropdown = this.airportArrivalDropdown.bind(this);
        this.filterAirportDropdown = this.filterAirportDropdown.bind(this);
        this.filterAirportArrivalDropdown = this.filterAirportArrivalDropdown.bind(this);
    }

    componentDidMount() {
        let dropdownUl = document.getElementById("airport-dropdown-ul")
        for (let i = 0; i < this.airportCodes.length; i++) {
            dropdownUl.innerHTML += `<li key=${i}>${this.airportCodes[i]}</li>`
        }
        dropdownUl.addEventListener("click", (e) => {
            console.log(e.target.innerText)
            this.setState({o1: e.target.innerText}, () => {
                console.log(this.state)
                let input = document.getElementById("departure-flight-input")
                // console.log(input)
                input.value = this.state.o1
            })

            let dropdown = document.getElementsByClassName("airport-dropdown")
            $(dropdown).css("display", 'none')
        })
        let dropdownArrivalUl = document.getElementById("airport-arrival-dropdown-ul")
        for (let i = 0; i < this.airportCodes.length; i++) {
            dropdownArrivalUl.innerHTML += `<li key=${i}>${this.airportCodes[i]}</li>`
        }
        dropdownArrivalUl.addEventListener("click", (e) => {
            console.log(e.target.innerText)
            this.setState({d1: e.target.innerText}, () => {
                console.log(this.state)
                let input = document.getElementById("arrival-flight-input")
                // console.log(input)
                input.value = this.state.d1
            })

            let dropdown = document.getElementsByClassName("airport-arrival-dropdown")
            $(dropdown).css("display", 'none')
        })
    }

    handleSubmit(e) {
        let searchButton = document.getElementById("flight-search-button")
        let searchLoading = document.getElementById("flight-search-button-loading")
        searchButton.style.display = "none"
        searchLoading.style.display = 'flex'
        this.props.clearBookingErrors()
        localStorage.setItem('prevLocation', this.props.props.history.location.pathname)
        e.preventDefault();
        if (this.state.dd2.length > 0) {
            this.props.createFlightSession(this.state)
                .then(() => this.props.createReturnFlightSession(this.state))
                .then(() => this.props.updatePassengers(this.state.ta))
                .then(() => this.props.props.history.push("/flights_search"))
        } else {
            this.props.createFlightSession(this.state)
                .then(() => this.props.updatePassengers(this.state.ta))
                .then(() => this.props.props.history.push("/flights_search"))
        }
        
        // setTimeout( () => Object.keys(this.props.flightsApi).length > 0 ? this.props.history.push("/flights_search") : "", 2000 )
    }

    componentWillUnmount() {
        document.getElementById("flight-search-button").style.display = "flex";
        document.getElementById("flight-search-button-loading").style.display = "none"
        
    }

    onDateChange(form) {
        return (e) => {
            this.setState({ [form]: e}, () => console.log(this.state))
        }
    }

    onChange(form) {
        return (e) => this.setState({ [form]: e.currentTarget.value }, () => console.log(this.state))
    }

    roundTrip() {
        let returnDate = document.getElementById("return-date")
        returnDate.removeAttribute("disabled")
        returnDate.className = 'return-date-enabled'
    }

    oneWayTrip() {
        let returnDate = document.getElementById("return-date")
        returnDate.setAttribute("disabled", "true")
        returnDate.className = 'return-date-disabled'
    }

    filterAirportDropdown(text) {
        let filter = text.toUpperCase();
        let ul = document.getElementById("airport-dropdown-ul");
        let li = Array.from(ul.getElementsByTagName('li'));
        let i;

        for (i = 0; i < li.length; i++) {
            let txtValue = li[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    
    airportDropdown(e) {
        this.filterAirportDropdown(e.currentTarget.value)
        let dropdown = document.getElementsByClassName("airport-dropdown")
        $(dropdown).css("display", 'block')

    }

    filterAirportArrivalDropdown(text) {
        let filter = text.toUpperCase();
        let ul = document.getElementById("airport-arrival-dropdown-ul");
        let li = Array.from(ul.getElementsByTagName('li'));
        let i;

        for (i = 0; i < li.length; i++) {
            let txtValue = li[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    airportArrivalDropdown(e) {
        this.filterAirportArrivalDropdown(e.currentTarget.value)
        let dropdown = document.getElementsByClassName("airport-arrival-dropdown")
        $(dropdown).css("display", 'block')

    }


    render() {
        // console.log(this.props)
        if (this.props.errors.length > 0) {
            document.getElementById("flight-search-button").style.display = "flex";
            document.getElementById("flight-search-button-loading").style.display = "none"
        }
        return (
            <div>
                <section className="flight-search-container-background">
                    <div className="flight-search-container">
                        <form onSubmit={this.handleSubmit} className="flight-search-form-container">
                            <div className="flight-search-oneway-radio">
                                <section id="group1">
                                    <input type="radio" value="roundtrip" name="group1" onChange={this.roundTrip} checked/><span className="flight-search-radio-labels">Roundtrip</span>
                                    <input type="radio" value="roundtrip" name="group1" onChange={this.oneWayTrip}  /><span className="flight-search-radio-labels">One-way</span>
                                </section>
                                <section id="group2">
                                    {/* <input type="radio" value="pricing" name="group2" /><span className="flight-search-radio-labels">Dollars</span> */}
                                    {/* <input type="radio" value="pricing" name="group2" checked/> */}
                                    <span className="flight-search-radio-labels">Points</span>
                                </section>
                            </div>
                            <div className="flight-search-form">
                                <div className="flight-search-form-input-grouping">
                                    <div className="flight-search-form-single-input-grouping">
                                        <h4>Depart</h4>
                                        <input type="text"
                                            id="departure-flight-input"
                                            onChange={this.onChange('o1')}
                                            onInput={this.airportDropdown}
                                            value={this.state.o1}
                                        />
                                        <div className="airport-dropdown"><ul id="airport-dropdown-ul" className="airport-dropdown-ul"></ul></div>
                                    </div>

                                    <div className="flight-search-form-single-input-grouping datepicker">
                                        <h4>Depart Date</h4>
                                        {<DatePicker selected={this.state.dd1} onChange={this.onDateChange("dd1")}/>}
                                    </div>
                                    <div className="flight-search-form-single-input-grouping">
                                        <h4>Passengers</h4>
                                        <select onChange={this.onChange("ta")}>
                                            <option value="1">1</option> 
                                            <option value="2">2</option> 
                                            <option value="3">3</option> 
                                            <option value="4">4</option> 
                                            <option value="5">5</option> 
                                            <option value="6">6</option> 
                                            <option value="7">7</option> 
                                            <option value="8">8</option> 
                                            <option value="9">9</option>
                                        </select>
                                    </div>
                                </div>
                                <input type="hidden" name="currency" value="USD"/>
                                <input type="hidden" name="passengers" value="1"/>
                                <div className="flight-search-form-input-grouping">
                                    <div className="flight-search-form-single-input-grouping">
                                        <h4>Arrive</h4>
                                        <input type="text" 
                                            id="arrival-flight-input"
                                            onChange={this.onChange("d1")}
                                            value={this.state.d1}
                                            onInput={this.airportArrivalDropdown}
                                        />
                                        <div className="airport-arrival-dropdown"><ul id="airport-arrival-dropdown-ul" className="airport-arrival-dropdown-ul"></ul></div>
                                    </div>
                                    <div className="flight-search-form-single-input-grouping datepicker">
                                        <h4>Return Date</h4>
                                        {<DatePicker selected={this.state.dd2} onChange={this.onDateChange("dd2")} />}
                                    </div>
                                </div>
                            </div>
                            <div className="flight-search-submit-button">
                                <div>{this.props.errors}</div>
                                <input id="flight-search-button" type="submit" value="Search"/>
                                <div id="flight-search-button-loading"><img src={window.loadingDots} alt="waiting dots"/></div>
                            </div>
                        </form>
                        <div className="flight-search-weast-message-container">
                            <div className="flight-search-weast-message-section">
                                <img src={window.compassURL}/>
                                <p>West</p>
                            </div>

                            <div className="flight-search-weast-message-section">
                                <img src={window.weastCompassURL}/>
                                <p>I thought you said Weast</p>
                            </div>

                            <div className="flight-search-message-slanted-section"></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default BookFlight;