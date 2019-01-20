import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            searchString: "",
            cityNames: []
          };
          this.handleChange = this.handleChange.bind(this);
        }
    

          
        componentDidMount(){
        const cities = require('../cities/city.list.json');
        const cityNames = cities.map(city => ( city.name ));
        this.setState( {cityNames} );
        }
    
      
        handleChange() {
          this.setState({
            searchString: this.refs.search.value
          });
        }
      
        render() {
          let _cities = this.state.cityNames;
          let search = this.state.searchString.trim().toLowerCase();
      
          if (search.length > 0) {
            _cities = _cities.filter(function(city) {
              return city.toLowerCase().match(search);
            });

          }
      
          return (
            <div>
              <h3>React - simple search</h3>
              <div>
                <input
                  type="text"
                  value={this.state.searchString}
                  ref="search"
                  onChange={this.handleChange}
                  placeholder="type name here"
                />
                <ul id='search-res'>
                    { 
                        _cities.slice(0, 10).map((city, index) => {
                            return (

                            <li key={index}>
                                <Link to={{
                                    pathname: "/city",
                                    state: {
                                        cityName: city
                                    }
                                }
                                } >
                                {city}</Link>
                            </li>
                            )
                        })
                     
                    }
                </ul>
              </div>
              <div>
                  
              </div>
            </div>
          );
        }
      }
      
export default Search;