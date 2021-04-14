
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import CheckOut from './Components/CheckOut/CheckOut';
import AddBook from './Components/Admin/AddBook';
import ManagePage from './Components/Admin/ManagePage';
import Orders from './Components/CheckOut/Orders';

 export  const userContext = createContext()
function App() {

  const [loggedInUser, setLoggedInUser] = useState({})  

  return (
    <div className="App">
        <userContext.Provider value ={[loggedInUser , setLoggedInUser]}> 
    
    <Router>          
            <Switch>
         
              <Route   path="/home">
                <Home></Home>
              </Route>
           
              <Route path="/login">
                <Login></Login>
              </Route>              
                       
            <Route path="/addBook">
              <AddBook></AddBook>
            </Route>
            <Route path="/managePage">
              <ManagePage></ManagePage>
            </Route>
                <Route exact path="/book/:id">
                <CheckOut></CheckOut>
                 </Route >
              <Route  path="/orders/:email" >
                <Orders />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            
            </Switch>         
    </Router>
  
     
    </userContext.Provider>
    </div>
  );
}

export default App;
