import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Map.css'

class Map extends Component{
    render(){
        let imagePath;
        if (this.props.imageName){
            imagePath =  'images/'+this.props.imageName;
        }
        else{
            imagePath = 'images/none.png';
        }
        return (<div className = "MapBox">

        <img src = {imagePath} alt = {this.props.location}/>
        </div>
        );
    }
}
export default Map;