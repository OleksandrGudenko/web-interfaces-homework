import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Search from './Search';
import CityWeather from './CityWeather';
import Author from './Madeby';


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

                <Author />
            </div>
            

        );
    }
}

export default Index;