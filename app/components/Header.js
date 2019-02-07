import React from "react";


export class Header extends React.Component {
    //ES6 - Check out
    constructor(props) {
        super();
        this.state = {
            //You shouldn't assign props to your state, except for the case where this is the initial value

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
