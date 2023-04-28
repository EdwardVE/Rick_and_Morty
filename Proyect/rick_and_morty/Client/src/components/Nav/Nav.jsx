import style from "./Nav.module.css"
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

class Nav extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={style.nav}>
                <SearchBar onSearch={this.props.onSearch}/>
                {/* <SearchBar onSearch={(characterID) => window.alert(characterID)}/> */}
                <Link to='/About'><h3>ABOUT</h3></Link>
                <Link to='/Home'><h3>HOME</h3></Link>
            </div>
        )
    }
}
export default Nav;