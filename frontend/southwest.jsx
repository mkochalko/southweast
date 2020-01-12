import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root";
import configureStore from './store/store';
import * as TripActions from './actions/trip_actions';
import { requestCities } from './actions/flight_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUser: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.requestCities = requestCities;

    ReactDOM.render(<Root store={store}/>, root)
})