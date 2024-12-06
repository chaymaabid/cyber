import "./NavbarStyle.css";
import { Component} from "react";
import{MenuItems} from "./MenuItems";
import {Link} from "react-router-dom";
import logo from "../../assets/logo2.png";
class Nabar extends Component {

    state={clicked:false};
    handleclick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="navbarItems">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </Link>
                
                <div className="menu-icons" onClick={this.handleclick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}

export default Nabar;