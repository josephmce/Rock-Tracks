import React from 'react';
import { browserHistory } from "react-router";



export class Details extends React.Component{

    constructor(props) {
        super();
        //React Property that sets our state
        this.state = {
            //You shouldn't assign props to your state, except for the case where this is the initial value
            results: [],
        };
        setTimeout(() => {
            this.setState({
                status: 1
            })
        },);
        console.log("Constructor");

    }
    onNavigateHome(){
        browserHistory.push("/home");
    }
    openMoreDetails() {
        window.open("https://www.w3schools.com");
      }


    render(){
        const{artworkURL, trackName, artistName, trackPrice, durationTime, releaseDate, trackviewURL} = this.props.location.state
        console.log(this.state);
        return(
            <div className="module1">             
                <div className="mainmodule">
                    <div className="gridContainer">
                    <div className="grid-1" >                                        
                                <p>Artwork URL: <a href={artworkURL}>{artworkURL}</a></p> 
                                <p>Track Name: {trackName}</p> 
                                <p>Artist: {artistName}</p>
                                <p>Track Price: £{trackPrice}</p>
                                <p>Duration: {durationTime} Milli seconds</p>
                                <p>Release Date: {releaseDate}</p>
                                <button onClick={() => {window.open(trackviewURL);}}>More Details...</button>                        
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}



