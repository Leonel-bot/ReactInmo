import { useEffect, useState } from 'react';
import './App.css';

import {auth} from './firebase/firebase-config'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthContext from './context/authContext'
import NavBar from './components/navbar/navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Home from './pages/home/home'
import Admin from './pages/admin/admin'
import Show from './pages/show/show'
import Footer from './components/footer/footer';

import AboutUs from './pages/aboutUs/aboutUs';
import Contact from './pages/contact/contact';
import WhatsApp from './components/whatsApp/whatsapp';




function App() {



  const [userData , setUserData] = useState()

  function userAuthChanged(){
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUserData(
          true
        )
      } else {
        setUserData(
          false
        )
      }
    });
  }
  useEffect(() => {
    //console.log(userData);
    userAuthChanged()
  },[userData])




  return (
    <div className="App">
      <AuthContext.Provider value={userData}>
        <ToastContainer />
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/post/:id' component={Show} />
            <Route exact path='/aboutUs' component={AboutUs} />
            <Route exact path='/contact' component={Contact} />
            <Route component={Home} />
          </Switch>
          <WhatsApp/>
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
