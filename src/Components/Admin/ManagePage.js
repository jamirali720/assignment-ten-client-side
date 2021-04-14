import React, { useEffect, useState } from 'react';
import BookDetails from './BookDetails';

const ManagePage = () => {
    const [manageBooks, setManageBooks] = useState([])
   useEffect(() => {
        fetch('http://localhost:8080/getAllBooks')
        .then(res => res.json())
        .then(books => setManageBooks(books))   
    
   }, [])
    return (
        <div>
            <div className="d-flex justify-content-around">
            <h1>Book Name</h1>
            <h1>Author Name</h1>
            <h1>Book Price</h1>
            </div>
          {
              manageBooks.map((book, index) => <BookDetails book={book} index={index}></BookDetails> )
          }
        </div>
    );
};

export default ManagePage;