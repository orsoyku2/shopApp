import HomePage from "./pages/HomePage/index";
import ShopPage from "./pages/Shop/index";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/index";
import Header from "./components/header/index";
import { Switch, Route } from "react-router-dom";
import {auth} from './firebase/firebase.utils'
import firebase from "firebase";
import React, {useState,useEffect} from 'react'
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [unsubscribeFromAuth,setunsubscribeFromAuth] = useState(null)
 
  useEffect(() => {
   setunsubscribeFromAuth(() =>
   auth.onAuthStateChanged(user => {
   setCurrentUser(user)
  })
  )
  return () => {
   unsubscribeFromAuth()
  }
  }, [])

  return (
    <div>
      <Header  currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;

