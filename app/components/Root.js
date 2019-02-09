import React from 'react';

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Home } from "./Home";

export class Root extends React.Component{
    constructor(){
        //Always need to call super 1st if your extending from a class 
        super();
        this.state = {

            homeMounted: true
        };
    }
    onChangeHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }
    render() {
        let homeCmp="";
        if(this.state.homeMounted){
            homeCmp= (
            <Home/>
            );
        }
        return(
            <div>
                <Sidebar/>        
                    <div> 
                        <Header/>                    
                    <div>
                    {this.props.children}  
                    </div>
                </div>
            </div>
        );
    }
}