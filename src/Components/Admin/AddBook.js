
import React, {  useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import  './AddBook.css'
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPen, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons'

const AddBook = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);   

  
    const onSubmit = data => {   
      
        const { name , price, author} = data;
        const numPrice = parseInt(price);         
      
        const userData = {
            name :name,
            author : author,
            price : numPrice,
            imageURL: imageURL
        }
        console.log(userData);
        fetch('http://localhost:8080/addBook', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {'Content-type': 'application/json; charset=UTF-8',},
        })
                .then((res) => res.json())
                .then(result => {
                console.log(result)
                });            

        
    };   

      

            const handleUploadImage =(event) => {
                const imageData =  new FormData();
                imageData.set('key','105ed5f67efbaeb13216a1991d9da0a8');
                imageData.append('image', event.target.files[0]);        
                
                axios.post('https://api.imgbb.com/1/upload', imageData )
                .then(function (response) {           
                    const product = response.data.data.display_url;
                    setImageURL(product)
                
                })
                .catch(function (error) {
                    console.log(error);
                });   


            };


    return (
        <div className='text-center main card mt-5'>
            
            <div className="sidebar">
                    <h4>Online Book Seller</h4>
                    <a  href="http://localhost:8080/"><FontAwesomeIcon icon={faThLarge} />Manage Books</a>                  
                    <Link to="/addBook"><FontAwesomeIcon icon={faPlus} />Add book</Link>              
                    <Link to="#"><FontAwesomeIcon icon={faPen} /> Edit Book</Link>              
             
                </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-around">                            
                        <input className="form-control m-2" type="text" placeholder="Book Name" ref={register} name="name" />
                        <input className="form-control m-2" type="text" placeholder="Author Name" ref={register} name="author" />              
            
                </div>
           
                <div className="d-flex justify-content-around">                                  
                        <input className="form-control m-2" type="text" placeholder="Book Price" ref={register} name="price" />
                        <input className="form-control m-2" onChange={handleUploadImage} name="file" type="file"  ref={register}  />                      
                </div>
                <button className="form-control m-2 btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBook;