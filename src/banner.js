import React, {Component} from 'react';
import crownImage from './the-crown-background.jpeg';

class Banner extends Component {
    render(){
        return(
            <div id="Main">
                <div id="Billboard"></div>
                <img id="Hero" src={crownImage}></img>
            </div>
        )
    }
       
}

export default Banner;