import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; //useSelector
import { getByName } from '../../actions/getByName'
import { Link } from 'react-router-dom';
import styles from './NavBar.modules.css'

export default function NavBar() {
  // const storeState = useSelector(state => state.videogames)
  // console.log(storeState, 'state storeeeeeeee');
  // console.log(storeState.status, 'state storeeeeeeee');

  const [name, setName] = useState('')
  const dispatch = useDispatch()

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleSubmit(event) {
    // console.log(event, 'eventeeeeeeeeeeee'); 
    // console.log(name, 'nameeeeeeeeeeeeeeeeeeee'); 
    event.preventDefault();
    dispatch(getByName(name));
    setName('')
  }
  return (
    <div className={styles.container}>
      <img src="../pic.png" alt="logo" width="134px" height="140px" />
      <nav>
        <Link to="/videogames"><span>Home</span></Link>
        <form className={styles.searchBar}>
          <input
            className={styles.inputSearch}
            type="text"
            id="title"
            placeholder='Search a videogame...'
            autoComplete="off"
            value={name}
            onChange={(e) => handleChange(e)}  >
          </input>
          <button onClick={(e) => handleSubmit(e)} >🔍️</button>
        </form>
        <Link to="/videogame"><span>Create Game</span></Link>
      </nav>
    </div>
  )
};