# README

## [SouthWeast](https://southweast.herokuapp.com/)

###  Info

Southweast is a clone of the Southwest Airlines website where a user can search for, book, edit, and keep track of flights.


------------



#### Features completed: 
* Account creation
	* Create new user
	* Log in user
	* Demo log in option
* Flights Search by Date
	* one way
* User Profile
	* Upcoming Trips
	* Past Trips
	
#### Features in development: 
* Flights Search by Date
	* round trip
* Booking Trips
* User Profile
	* Upcoming Trips
	* Past Trips
	* Flight Watchlist
  

------------


### Features

The home page immidiately shows one of the main features of the app which is searching for future available flights. This allows the user to select their departure airport(currently only compatiable with correct airport codes) and destination airport along with the departure date and number of passengers.

![Image](https://github.com/mkochalko/southweast/blob/master/app/assets/images/booking.png "Booking Search")


On submit the user will be taken to the flights search page witch shows the index of available flights, the departure times, duration and flight price. Once development is complete a user will be albe to select a flight and proceed to the trip bookings page to 'purchase' and save flights to the users profile. 

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

As mentioned above, once development is complete, users will be able to book trips, which update in the user profile, edit trips, and 'purchase' flights directly on the site. These flights will then be reflected in the user's show page for reference. This will allow for a complete flight/trip creation as one would expect on a normal airlines web application. 

------------



# Technologies 

* Ruby on Rails (version: 5.2.3)
	** backend portion of the project 
* PostgreSQL 
	** Created tables for users, flights, trips, and watchlists to save information specific to the user
* jBuilder
	** Formatted the backend response to match the state shape my frontend app was anticipating
* JavaScript 
	** JS was the primary language for all frontend work, used both jQuery and Vanilla DOM to manipulate the page for great transition affects as seen with the carousels
* React (version: 16.12.0)
	** Implemented react 
* Redux (version: 4.0.5)
* [Trip Advisor Api](https://rapidapi.com/apidojo/api/tripadvisor1/endpoints)
	** Used to pull flight data for my search feature

