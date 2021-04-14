import React, { useEffect , useState} from 'react';
import Header from '../Header/Header';
import Bookings from '../Bookings/Bookings';





const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {

        fetch('http://localhost:8080/getBook')
        .then(res => res.json())
        .then(data => setBooks(data))   
     
    }, [])
   
 
  

    return (
        <div className="">        
            <Header></Header>
            <div className="container row justify-content-md-center">
            {
                    books.map((book, index) => <Bookings book={book} key={index}></Bookings>)                  
                   
            }
            </div>
    
        </div>
    );
};

export default Home;