import React, { Component } from 'react';

class Favorites extends Component {
    constructor(){
        super();
        state = {
            Fivi: []
        }
    }

    displayFav() {
        for (i=0; i <= window.localStorage.length; i++){
            
        }
    }

    render() {
        
        return(
            <div>This is Favorites</div>
        );
    }
}

export default Favorites;