import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import LandingPage from './components/LandingPage/Landing.jsx'
import Videogames from './components/Videogames/Videogames.jsx'
import GameDetail from './components/GameDetail/GameDetail.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar />
        <Route exact path='/' component={LandingPage}></Route>
        <Route exact path='/videogames' component={Videogames}></Route>
        <Route path='/videogame/:id' component={GameDetail}></Route>
      </React.Fragment>
    </div>
  );
}
// <Route path='/videogame/post' component={Form}></Route>
// import Form from './components/Form/Form.jsx'
export default App;