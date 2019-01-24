import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import history from './History';



class Favorites extends Component {
    constructor(){
        super();
        this.state = {
            cityNames: []
        }
    }

    componentDidMount(){

        let cityNames = {};

        let favCount = localStorage.getItem('favorites-count');    
            
        
            for ( let i=1; i <= favCount; i++){
                if (localStorage.getItem(i) != null){
                    var cities = JSON.parse(localStorage.getItem(i))
                    cityNames[i] = {name : cities.name, id : cities.id};    
                } else {
                    true;
                }
                
            }
        
        this.setState({cityNames:cityNames}); 
    }

    


    render() {
        
        let FavCities = this.state.cityNames;
        // console.log(FavCities);

        const RemCities = 
        Object.keys(FavCities).map( (key) => {
            if(FavCities[key].name){
                return(   
            <li key={FavCities[key].id}>
            <Link to={{
                pathname: "/city",
                state: {
                    cityName: FavCities[key].name,
                    cityID: FavCities[key].id
                }
            }} className="search-btn" >
            <Button className="link-btn">
            {FavCities[key].name}
            </Button>
        </Link> 
        </li>
    )}
    }) 
    

        return(
            <ul id="fivi">

            {   FavCities.length == 0 ? 
                <div>No Favorites</div>
                : RemCities
            }
            </ul>
        );
    }
}

export default Favorites;