import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'


const Orders = () => {
    const {email} = useParams();
    const [orderBooks, setOrderBooks] = useState([])

    useEffect(() => {
        fetch(`https://hidden-retreat-56623.herokuapp.com/getBuyerInfo?email=${email}`)   
        .then(res => res.json())
        .then(results => setOrderBooks(results))   
     
    }, [email])
    console.log(orderBooks)
    return (
        <div>
            <div className='d-flex justify-content-around'>
                <h4>Book Name</h4>
                <h4>Book Author</h4>
                <h4>Buyer Email</h4>
                <h4>Buy Time</h4>
            </div>


         {
            orderBooks.map(orderBook => (
                  <div className="d-flex justify-content-around">
                 
                    <h5> {orderBook.name} </h5>
                      <h5>{orderBook.author} </h5>
                      <h5> {orderBook.email} </h5>                     
                      <h5> {orderBook.buyTime} </h5>                     

                  </div>

            ))
         }
        </div>
    );
};

export default Orders;