import React from "react";
import {Link} from "react-router";

export const Sidebar = (props) =>{
var listStyle=
{
        width:'100%'
        
}

        return(
            <ul className="main-nav">
                    <li><Link to={"/home"} activeClassName="active"><img className="spinner" style ={listStyle} src={require('../Images/icon_1.png')} alt="Track"/></Link></li>

            </ul>
        );
};
//Unused - <li><Link to={"/Details"} activeClassName="active"><img className="spinner" style ={listStyle} src={require('../Images/icon_2.png')} alt="Details"/></Link></li>

