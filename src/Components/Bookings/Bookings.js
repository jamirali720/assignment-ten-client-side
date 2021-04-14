import React from 'react';
import { useHistory } from "react-router-dom";

const Bookings = (props) => {
  const history = useHistory()
    const  {_id, author, name, imageURL, price} = props.book;
 
    const bookingStyle = {
        width: '330px',
        height:' 370px',
        border: '1px solid gray', 

    }
        const handleBook = (id) => {
        history.push(`/book/${id}`)
      
 
    }

    return (
        <div style={bookingStyle} className=" card m-3">
            <div className="img">
                <img style={{width: '150px', height:"200px",  margin: '10px 70px '}} src={imageURL} alt=""/>
            </div>
            <div className="bookInfo mx-3">
                <p>Author Name : {author} </p>
                <p> Book Name : {name} </p>
              <div className="d-flex justify-content-around">
              <p> Book Price : {price} TK</p>

              <button onClick={() => handleBook(_id)} className="btn btn-primary ">BOOk NOW</button>   

              </div>
            </div>
         
          
        </div>
    );
};

export default Bookings;