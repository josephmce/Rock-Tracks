import React from "react";

export class Header extends React.Component {
    constructor(props) {
        super();
        this.state = {
        };
    }    
        render() {
        return(
            <div className="toprow">
           
                <div>
                <p className="title">Rock Tracks</p><span className="headeruserinfo"></span><span className="headeruserinfo"></span> 
                </div>
            
            </div>
        );
        }
    }
