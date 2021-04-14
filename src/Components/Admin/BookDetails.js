// import React from 'react';

// const BookDetails = (props) => {
//     const { _id,  name, author, price} = props.book
//     console.log(_id)
//     const handleDelete = (event,  id )=> {
//         fetch('http://localhost:8080/deleteBook/' + id, {
//             method: 'DELETE',
//             headers : { 
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }

//         })
    
//         .then(res => res.json())
//         .then(result => {
//              if(result){
//                  event.target.parentNode.style.display= 'none'
//              }
//         })
           
               
        
       
//     }
//      const deleteButtonStyle= {
//         width: '120px',
//         height:' 30px', 
//         marginTop:' 15px',
//         marginLeft: '15px',
//         color:' rgb(255, 255, 255)',
//         backgroundColor: 'tomato',
//         borderRadius: '5px'
//      }
   
//     return (

//          <div className="d-flex justify-content-around">
                        
//         <table className="table text-center">
            
//             <tbody>
//                 <tr>               
//                 <td>{name}</td>
//                 <td>{author}</td>
//                 <td>{price}</td>
//                 <td> <button onClick={handleDelete( 'event', _id)} style={deleteButtonStyle}>Delete</button></td>
//                 </tr>
              
              
//             </tbody>
//         </table>
          
//         </div>
//     );
// };

// export default BookDetails;