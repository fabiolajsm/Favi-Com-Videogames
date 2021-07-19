import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByName, loading } from '../../actions/getByName'
import { Link } from 'react-router-dom';
import styles from './NavBar.modules.css'

export default function NavBar() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  function handleChange(event) {
    setName(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getByName(name));
    dispatch(loading(true));
    setName('')
  };

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
        <Link to="/videogame/create"><span>Create Game</span></Link>
      </nav>
    </div>
  )
};