import React, { useContext } from 'react';
import {Link } from "react-router-dom";
import {userContext} from '../../App'
const Header = () => {


    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const headerStyle = {
        marginLeft: '300px'
    }
    return (
        <div className="d-flex" style={headerStyle}>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-primary" to="#">Online Book Seller</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active text-primary" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-primary" to="/orders">Orders</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-primary" to="/addBook">Admin</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-primary" to="/deals" tabIndex="-1">Deals</Link>

                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-primary" to="/login" tabIndex="-1">Login</Link>
                        </li>
                        <li> Welcome {loggedInUser.name}</li>
                        
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    );
};

export default Header;