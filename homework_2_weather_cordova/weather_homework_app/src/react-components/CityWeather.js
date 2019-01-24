import React, { Component } from 'react';
import history from './History';
import { Button } from 'react-bootstrap';

class CityWeather extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            name:[],
            id:[],
            favoritesCount:[],
            liked: false
        }
        this.closeForecase = this.closeForecase.bind(this);
        this.addToFav = this.addToFav.bind(this);
        this.removeFromFav = this.removeFromFav.bind(this);
        this.checkIfLiked = this.checkIfLiked.bind(this);
    }


    componentDidMount(){
        const {cityID} = this.props.location.state;
        
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
                }),
                this.checkIfLiked();
            }),
            (error) => {
                this.setState({ error })
            }

    }

        
    closeForecase(){
        history.push('/');
    }

    addToFav(id, name){
        var storage = window.localStorage;
        var favCount = storage.getItem('favorites-count');
        var newFavCount = null;
        for ( let i=1; i <= favCount; i++){
            if(favCount != localStorage.getItem(i)){
                newFavCount = Number(favCount) + 1 ;
                break;
            } else{
                newFavCount = i ;
            }
        }
        storage.setItem(newFavCount, JSON.stringify({name, id})); 
        storage.setItem('favorites-count', newFavCount);
        this.setState({liked: true})
        
        this.checkIfLiked()
    }

    removeFromFav(req){

        var favCount = localStorage.getItem('favorites-count');

        for ( let i=1; i <= favCount; i++){
            if (localStorage.getItem(i) != null){  
                if(localStorage.getItem(i) != localStorage.getItem('favorites-count')) {
                    if(req == (JSON.parse(localStorage.getItem(i))).name){
                    localStorage.removeItem(i) 
                    this.setState({liked: false})
                    break;
                    } 
                } 
            }
        }
        this.setState({state: this.state})
        this.checkIfLiked()
    }

    checkIfLiked(){
        var favCount = localStorage.getItem('favorites-count');
        for ( let i=1; i <= favCount; i++){
            if (localStorage.getItem(i) != null){   
                if(localStorage.getItem(i) != localStorage.getItem('favorites-count')) {
                    console.log(JSON.parse(localStorage.getItem(i)).name)
                    console.log('this is state: '+ this.state.name)
                    if(this.state.name === JSON.parse(localStorage.getItem(i)).name){
                        this.setState({liked: true}) ;
                        break;
                    } 
                }  
            }
                
        }
        
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
                <p>Current Temperature:  {this.state.currTemp - 273}C </p>
                <p>Max Temperature:  {this.state.maxTemp - 273}C </p>
                <p>Min Temperature:  {this.state.minTemp - 273}C </p>
                <br />
                <p>Humidity:    {this.state.humidity} %</p>
                <br />
                <p>Air Pressure:    {this.state.pressure} mbar</p>
                <Button onClick={() => this.closeForecase()} className="btn btn-primary" style={{magrinBottom: "10px" }}>Close Forecast</Button> 
                {  this.state.liked === false 
                    ?
                    <Button onClick={() => this.addToFav(this.state.id, this.state.name)} className="btn" style={{magrinBottom: "10px" }}>Remember</Button> :
                    <Button onClick={() => this.removeFromFav(this.state.name)} className="btn" style={{magrinBottom: "10px" }}>Forget</Button>
              }
            </div>

        )
        }
    }
}

export default CityWeather;