# README

## [SouthWeast](https://southweast.herokuapp.com/)

###  Info

Southweast is an airlines website inspired by the Southwest Airlines website. The purpose of this project was to create a full stack project with CRUD features, some including searching for flights, booking flights and creating an account.

![Image](https://github.com/mkochalko/southweast/blob/master/app/assets/images/booking.png "Booking Search")

------------

# Technologies 

* `Ruby on Rails` (version: 5.2.3)
	* Rails was used for the backend portion of this project. Utalizing PostgreSQL as the database, rails made querys to 		the database to provide information needed for the frontend. 

* `PostgreSQL` 
	* This relational database was used to create tables for users, flights, trips, and watchlists to save information 		specific to the user

* `jBuilder`
	* Formatted the backend response to match the state shape my frontend app was anticipating

* `JavaScript` 
	* JS was the primary language for all frontend work, this project used both jQuery and Vanilla DOM to manipulate the 		page for great transition affects as seen with the carousels

* `React` (version: 16.12.0)
	* Implemented react on the front end to create individual componenets to track  

* `Redux` (version: 4.0.5)
	* Utalized Redux to keep track of state and allow for access to the correct information when needed

* [Trip Advisor Api](https://rapidapi.com/apidojo/api/tripadvisor1/endpoints)
	* Called the Trip Advisor API to pull flight data that displayed flight information based on the inputs provided 		during the search


------------


### Features

The home page immidiately shows one of the main features of the app which is searching for future available flights. This allows the user to select their departure airport(based on the codes provided in an autocomplete feature) and destination airport along with the departure date and number of passengers. Since the API retrieving the flight information requires the airport search parameters to be provided as the airport code, an autocomplete feature was implemented that requires the user to select the airport from the downdown list, which will convert the input into the proper format before the search. 

![]()

The code below is how this autocomplete was implemented. `onInput` in the text field, triggered `airportDropdown()` function. 

```
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
 ```
 Each list element in the dropdown had an event handler which would update the state of the flight information.
 
 ```
 let dropdownUl = document.getElementById("airport-dropdown-ul")
        for (let i = 0; i < this.airportCodes.length; i++) {
            dropdownUl.innerHTML += `<li key=${i}>${this.airportCodes[i]}</li>`
        }
        dropdownUl.addEventListener("click", (e) => {
            this.setState({o1: e.target.innerText}, () => {
                let input = document.getElementById("departure-flight-input")
                input.value = this.state.o1
            })

            let dropdown = document.getElementsByClassName("airport-dropdown")
            $(dropdown).css("display", 'none')
        })
```

On submit the user will be taken to the flights search page witch shows the index of available flights, the departure times, duration and flight price. A user can select a flight and proceed to the trip bookings page to 'purchase' flights which will be updated and added to the users profile. 

![](https://github.com/mkochalko/southweast/blob/master/app/assets/images/flight_search_result.png "Flights Search Results")

As trips are booked and trips are taken, all upcoming and past trips will be saved on the users profile page. A user will be able cycle through the upcoming trips for the pertinent information as well as the past trips to track where they have gone.

Example of upcoming trips:

![](https://github.com/mkochalko/southweast/blob/master/app/assets/images/upcoming_trip_carousel.gif "Upcoming Trips Carousel")

------------


Example of past trips:

![](https://github.com/mkochalko/southweast/blob/master/app/assets/images/past_trip_carousel.gif "Past Trips Carousel")

------------


Example of user's show page navigaion:

![](https://github.com/mkochalko/southweast/blob/master/app/assets/images/trip_tab_carousel.gif "Tab Carousel")



------------

	
#### Features in development: 
* Flight Watchlist
  
