import React from "react";
import { browserHistory } from "react-router";
import { Link } from "react-router";

const API = 'https://itunes.apple.com/search?term=rock&media=music';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            results: [],
            isLoading: false
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ results: data.results, isLoading: false }));
        console.log("Component did mount!");
    }
    onNavigateDetails() {
        browserHistory.push("/Details");
    }
    render() {
        const { results, isLoading } = this.state;
        if (isLoading) {
            return <div className="module1">
                <div className="mainmodule">
                    <div className="gridContainer">
                        <div className="grid-1" >
                            <img src={require('../Images/loading.gif')} />
                        </div>
                    </div>
                </div>
            </div>;
        }
        return (
            <div className="module1">
                <div className="mainmodule">
                    <div className="gridContainer">
                        <div className="grid-1" >
                        <ul >
                            {results.map(track =>
                                <li className ="list" key={track.collectionId}>    
                                <Link to={{
                                    pathname:"/Details",
                                    state:{
                                        trackviewURL: track.trackViewUrl,
                                        artworkURL: track.artworkUrl30,
                                        trackName: track.trackName,
                                        artistName: track.artistName,
                                        trackPrice: track.trackPrice,
                                        durationTime: track.trackTimeMillis,
                                        releaseDate: track.releaseDate,
                                    }
                                    }} 
                                    activeClassName="active" className="detailslink" >Select Track</Link>                                    
                                    <p id="tracks">TrackName: {track.trackName}</p>
                                    <p id="tracks">Artist: {track.artistName}</p>
                                    <p id="tracks">Price: {track.trackPrice}</p>
                                    <p id="tracks">Artwork URL: <a href={track.artworkUrl100}>{track.artworkUrl100}</a>
                                    <img src ={track.artworkUrl30}></img></p>
                                    <div className="linebreak"></div>
                                </li>
                            )}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
//JM - 08-02-2019 tidied up formatting, removed unecessary code, fixed the loading section not displaying correctly by adding a couple divs: <div className="module1"></div><div className="mainmodule">