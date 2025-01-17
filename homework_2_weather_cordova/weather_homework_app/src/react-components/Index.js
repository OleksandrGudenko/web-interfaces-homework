import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Search from './Search';
import CityWeather from './CityWeather';
import Author from './Madeby';
import Favorites from './Favorites';
import FavCityWeather from './FavCityWeather';


class Index extends Component {
    constructor() {
        super();

    }

componentDidMount(){ 
    if(localStorage.getItem('favorites-count')){
        return;
    } else {
        localStorage.setItem('favorites-count', 1)
    }
}


    render() {
        return (
            <div className="index-div">
                <h1>Weather App</h1>
                

                <Search /> 
                <Favorites />    

                <Route path={"/city"}  component={CityWeather}  />  
                <Route path={"/fav-city"} component={FavCityWeather} />   

                <Author />
            </div>
        );
    }
}

export default Index;