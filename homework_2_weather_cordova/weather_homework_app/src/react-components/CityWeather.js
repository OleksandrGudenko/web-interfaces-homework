import React, { Component } from 'react';
import { browserHisotry } from 'react-router';

class CityWeather extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        }
    }


    componentDidMount(){
        const {cityName} = this.props.location.state;
        this.setState({cityName})
        let reqCity = JSON.stringify({cityName}.cityName);
        let cityString = reqCity.replace(/['"]+/g, '');

        
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+ cityString +'&APPID=883a671d450723aaa990ba07e02d1701').then(
            res => { return res.json() }).
            then( data => {
                this.setState({
                    name: data.name,
                    id : data.id,
                    weather: data.weather[0].main,
                    weatherDetails: data.weather[0].description,
                    currTemp: parseFloat(data.main.temp),
                    maxTemp: parseFloat(data.main.temp_max),
                    minTemp: parseFloat(data.main.temp_min),
                    humidity: parseFloat(data.main.humidity),
                    pressure: parseFloat(data.main.pressure)
                })
                }),
                (error) => {
                    this.setState({ error })
                }

        }
        
    

    render(){

        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>
        } else {
        return (
            <div>
                
                <h1>(direct storage)Weather for {this.state.name}</h1>
                
                <p>ID: {this.state.id}</p>
                <br />
                <p>Weather:{this.state.weather}</p>
                <p>Description:{this.state.weatherDetails}</p>
                <br />
                <p>Current Temperature: {this.state.currTemp - 273.15}</p>
                <p>Max Temperature: {this.state.maxTemp - 273.15} </p>
                <p>Min Temperature: {this.state.minTemp - 273.15}</p>
                <br />
                <p>Humidity: {this.state.humidity}</p>
                <br />
                <p>Air Pressure: {this.state.pressure}</p>
                
            </div>

        )
        }
    }
}

export default CityWeather;