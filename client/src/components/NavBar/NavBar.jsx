import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByName } from '../../actions/getByName' // (elvalordelINput)

export default function NavBar() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  // const state = useSelector(state => state.videogames)
  // const dispatch = useDispatch()

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleSubmit(event) {
    // console.log(event, 'eventeeeeeeeeeeee');
    // console.log(name, 'nameeeeeeeeeeeeeeeeeeee');
    event.preventDefault();  
    dispatch(getByName(name));
  }
  return (
    <div>
      <img src="https://i.pinimg.com/564x/57/ee/72/57ee72c7df36b686d17fd810c125458e.jpg" alt="" width="60" height="60" />
      <span>Favi-Con</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id="title"
          placeholder='Busca un videojuego...'
          autoComplete="off"
          value={name}   
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
    </div>
  )
};