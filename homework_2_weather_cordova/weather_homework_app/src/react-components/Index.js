import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Search from './Search';
import CityWeather from './CityWeather';

class Index extends Component {
    constructor() {
        super();

    }


    render() {
        return (
            <div>
                <h1>Weather App</h1>
                <br />
                <Search />               
                
                <Route path={"/city"}  component={CityWeather}  /> 

            </div>
        );
    }
}

export default Index;