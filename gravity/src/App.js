import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, useNavigate ,  Routes, Link} from "react-router-dom";
import { Home } from ".//components/Home";
import { Register } from "./components/Register";
import { Login } from "./components/login";
import { Welcome } from "./components/welcome"
import logo from './Home-img/ftcy.jpg';


const getData = () => {
  const data = localStorage.getItem('items');
  if(data) {return JSON.parse(data);}
  else {return []; }
}

 function App() {
 let navigate = useNavigate()
  
const [items, setItems] = useState(getData());
// const [search, setSearch] = useState("");
// const [isLoggedIn, setIsLoggedIn] = useState(false);
// const [editPassword, setEditPassword] = useState("null");
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("null");

// handleSubmit data;
const handleSubmit = (e) => {
  e.preventDefault();
  let item = {
    userName: userName,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  };
  console.log("details", item)
  if (items.find((items) => items.email === email)) {
    alert("email already exists");
  } else if (password !== confirmPassword) {
    alert("password don't match");
  } else {
    setItems([...items, item]);
    navigate("/Welcome");
  }
  console.log("details", items)
}

const handleSubmitSuccess = (e) => {
  e.preventDefault();
  let item1 ={
    email: email,
    password: password,
  };
  if (items.find((items) => items.email === email)){
    navigate("/Welcome");
  } else {
    alert("Account Doesn't exists");
};
};

  //send data to localStorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App"> 
   
    {/* <nav className="navbar"> */}
        {/* <div class="logo"> */}
        {/* <img src={logo} alt="Logo" /> */}
        {/* </div> */}
       {/* <div class="search"> */}
       {/* <input type="text" name="search" id="search" placeholder="Search this website"/> */}
       {/* </div> */}
        {/* <Link to="/Login" className="link">Login</Link> */}
        {/* <Link to="/Register" className="link">Register</Link> */}
        {/* <Link to="#" className="link">Browse</Link> */}
        {/* <Link to="/" className="link">Home</Link> */}
    {/* </nav>  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register 
          handleSubmit={handleSubmit}
          setUserName={setUserName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          />} />
          <Route path="/Login" element={<Login 
          handleSubmitSuccess={handleSubmitSuccess}
          setEmail={setEmail}
          setPassword={setPassword}
          />} />
          <Route path="/Welcome" element={<Welcome />} />
          </Routes>
    
    </div>
  );
}
export default App;