import React, { useContext, useEffect, useState } from 'react';
import {Link , useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../App';

const CheckOut = () => {
    const { id} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [bookDetail, setBookDetail] = useState({});
    


        useEffect(() => { 
            fetch('https://hidden-retreat-56623.herokuapp.com/getBooks/'+id)
            .then(res => res.json())
            .then(book => setBookDetail(book[0]))   
        
        }, [id])

       const { name ,  price } = bookDetail;  
   
     
      
        const handleSubmit = () => {
          const buyerDetails = {...loggedInUser, ...bookDetail, buyTime: new Date().toDateString()}
     
      
            fetch('https://hidden-retreat-56623.herokuapp.com/buyerInfo', {
                    method: 'POST',
                    body: JSON.stringify(buyerDetails),
                    headers: {'Content-type': 'application/json; charset=UTF-8',},
            })
                    .then((res) => res.json())
                    .then(result => {
                    console.log(result)
                    });        
            
        }
       
     
    return ( 
        <> 
        
           
            <div className="container">

                    <div className="d-flex" style={{ marginLeft: '300px'}}>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand text-primary" to="#">Online Book Seller</Link>
                                <button className="navbar-toggler" type="button" book-bs-toggle="collapse" book-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <Link className="nav-link active text-primary" aria-current="page" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link text-primary" to="/product">Product</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link text-primary" to="/adminPage">Admin</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link text-primary" to="/checkOut" tabIndex="-1"> <FontAwesomeIcon icon={faShoppingCart} />CheckOut</Link>
                                    </li>                 
                                </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="tableDiv my-5">
                        <h1 className="mt-5 mb-2">Check Out</h1>
                    <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">SL No</th>
                                <th scope="col">Book Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>{name}</td>
                                <td>1</td>
                                <td>{price}</td>
                                </tr>
                             
                                <tr>
                                <th scope="row">Total</th>
                                <td colSpan="2">1</td>
                                <td> {price}</td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
              <Link to= {`/orders/${loggedInUser.email}`}>
              <button  onClick={handleSubmit} className="btn-primary"> Check Out</button>
              </Link>
             </div>
        
        
       
        </>
    );
};

export default CheckOut;