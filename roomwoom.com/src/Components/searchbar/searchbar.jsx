import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import './searchbar.css';
import Cityname from '../../cityname';
import Mapicon from '../../assets/searchbar/mapicon.svg';
import Searchicon from '../../assets/searchbar/searchicon.svg';

class Searchbar extends Component {
    
    // state = {
    //     search : ""
    // }

    // onChange = e =>{
    //     this.setState({ search : e.target.value});
    // }

    render() {

        // const {search} = this.state;
        // const filtercity = Cityname.filter( Cityname =>{
        //     return Cityname.sector.toLowerCase().indexOf( search.toLowerCase() ) == -1
        // })

        return(
            <Container>
                
                <div className="box">
                    <Image className="image" src={Searchicon}/>
                    <input  
                    type="text" 
                    placeholder="Enter your city" 
                    onChange={this.onChange} 
                    />
                  
                </div>

            </Container>
        )
    }
}


export default Searchbar;