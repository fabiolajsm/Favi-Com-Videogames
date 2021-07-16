import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/Landing.jsx'
import Videogames from './components/Videogames/Videogames.jsx'
import GameDetail from './components/GameDetail/GameDetail.jsx'
import CreateGame from './components/CreateGame/CreateGame.jsx'
// import Error from './components/Error/Error.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route exact path='/videogame/:id' component={GameDetail}></Route>
        <Route exact path='/videogame/' component={CreateGame}></Route>
        <Route exact path='/videogames' component={Videogames}></Route>
        <Route exact path='/' component={LandingPage}></Route>
        {/* <Route path='/*' component={Error}></Route> */}
      </React.Fragment>
    </div>
  );
}
export default App;