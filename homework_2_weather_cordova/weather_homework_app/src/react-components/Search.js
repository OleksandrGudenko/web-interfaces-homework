import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from 'react-bootstrap';

class Search extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            searchString: "",
            cities: []
          };
          this.handleChange = this.handleChange.bind(this);
          this.clean = this.clean.bind(this);
        }
    

          
        componentDidMount(){
        const cities = require('../cities/city.list.json');
        this.setState( {cities} );
        }
    
      
        handleChange() {
          this.setState({
            searchString: this.refs.search.value
          });
        }

        clean(){
          this.refs.search.value = null;
          this.setState({
            searchString: this.refs.search.value
          })
        }
      
        render() {
          let _cities = this.state.cities;
          let search = this.state.searchString.trim().toLowerCase();
      
          if (search.length > 0) {
            _cities = _cities.filter(function(city) {
              return city.name.toLowerCase().match(search);
                      

            });

             
          }
      
          return (
            <div >
              <h3>FIND CITY:</h3>
              <div>
                <input
                  className="input-serch"
                  type="text"
                  value={this.state.searchString}
                  ref="search"
                  onChange={this.handleChange}
                  placeholder="HERE"
                  autoFocus
                />
                <ul>
                { 
                        _cities.slice(0, 10).map((city, index) => {
                          if (this.state.searchString.length > 0) {
                            return (
                              
                            <li>
                                <Link to={{
                                    pathname: "/city",
                                    state: {
                                        cityName: city.name,
                                        cityID: city.id
                                    }
                                }
                                } className="search-btn">
                                <Button key={index} className="link-btn" onClick={() => this.clean()} >
                                {city.name}
                                </Button>
                                </Link>
                            </li>
                            )
                        } })
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