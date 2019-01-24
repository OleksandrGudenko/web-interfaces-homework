import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class Favorites extends Component {
    constructor(){
        super();
        this.state = {
            cityNames: [],
            onBootLocalStorageLength: null
        }
    }

    componentDidMount(){

        let cityNames = {};

        let favCount = localStorage.getItem('favorites-count');    

        let BootLocalStorageLength = localStorage.length;
            

            for ( let i=1; i <= favCount; i++){
                if (localStorage.getItem(i) != null){
                    if(localStorage.getItem(i) != localStorage.getItem('favorites-count')) {
                        var cities = JSON.parse(localStorage.getItem(i));
                        cityNames[i] = {name : cities.name, id : cities.id};    
                    }
                }                 
            }
        
        this.setState({ cityNames:cityNames, onBootLocalStorageLength: BootLocalStorageLength },
                        () => {console.log(this.state.onBootLocalStorageLength)}); 

    }
    
    shouldComponentUpdate(){
        if(localStorage.length != this.state.onBootLocalStorageLength){
            this.componentDidMount();
            return true;
        } else{
            return false;
        }  
    }


    render() {
        
        let FavCities = this.state.cityNames;

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