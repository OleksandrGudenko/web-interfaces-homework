import React, { Component } from 'react';
import history from './History';
import { Button } from 'react-bootstrap';

class CityWeather extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        }
        this.closeForecase = this.closeForecase.bind(this);
    }


    componentDidMount(){
        const {cityID} = this.props.location.state;
        this.setState({cityID})

        // API key &APPID=883a671d450723aaa990ba07e02d1701

        
        fetch('http://api.openweathermap.org/data/2.5/weather?id='+ cityID +'&APPID=883a671d450723aaa990ba07e02d1701').then(
            res => { return res.json() }).
            then( data => {
                this.setState({
                    name: data.name,
                    id : data.id,
                    weather: data.weather[0].main,
                    weatherDetails: data.weather[0].description,
                    currTemp: Math.round(parseFloat(data.main.temp)),
                    maxTemp:  Math.round(parseFloat(data.main.temp_max)),
                    minTemp:  Math.round(parseFloat(data.main.temp_min)),
                    humidity: parseFloat(data.main.humidity),
                    pressure: parseFloat(data.main.pressure)
                })
                }),
                (error) => {
                    this.setState({ error })
                }

        }
        
    closeForecase(){
        history.push('/');
    }

    render(){

        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>
        } else {
        return (
            <div className="search-res">
                
                <h2>Weather for {this.state.name}</h2>
                
                <p>Weather Station ID:  {this.state.id}</p>
                <br />
                <p>Weather Condition:   {this.state.weather}</p>
                <p>More info:   {this.state.weatherDetails}</p>
                <br />
                <p>Current Temperature:  {this.state.currTemp - 273}</p>
                <p>Max Temperature:  {this.state.maxTemp - 273} </p>
                <p>Min Temperature:  {this.state.minTemp - 273}</p>
                <br />
                <p>Humidity:    {this.state.humidity} %</p>
                <br />
                <p>Air Pressure:    {this.state.pressure} mbar</p>
                <Button onClick={() => this.closeForecase()} className="btn btn-primary" style={{magrinBottom: "10px" }}>Close Forecast</Button> 
            </div>

        )
        }
    }
}

export default CityWeather;