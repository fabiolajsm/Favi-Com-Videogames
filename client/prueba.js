/// tatz version 
// const ByYou = ({ showGames }) => {
//     return (showGames && showGames.map(vg => {
//         if (filterByGenres !== 'All') {
//             if (vg.created === true && vg.genres.includes(filterByGenres)) {
//                 return <div key={vg.id} >
//                     <Link to={`/videogame/${vg.id}`}>
//                         <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
//                     </Link>
//                 </div>
//             }
//             return <div>{`Sorry! we don't have a game with that genre`}</div>
//         }
//         else if (filterByGenres === 'All') {
//             if (vg.created === true) {
//                 return <div key={vg.id} >
//                     <Link to={`/videogame/${vg.id}`}>
//                         <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
//                     </Link>
//                 </div>
//             }
//         }
//         return console.log('Created by you');
//     }))
// };

// const ByFavs = ({ showGames }) => {
//     return (showGames && showGames.map(vg => {
//         if (filterByGenres !== 'All') {
//             if (vg.created === false && vg.genres.includes(filterByGenres)) {
//                 return <div key={vg.id} >
//                     <Link to={`/videogame/${vg.id}`}>
//                         <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
//                     </Link>
//                 </div>
//             }
//         }
//         else if (filterByGenres === 'All') {
//             if (vg.created === false) {
//                 return <div key={vg.id} >
//                     <Link to={`/videogame/${vg.id}`}>
//                         <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
//                     </Link>
//                 </div>
//             }
//         }
//         return console.log('Created by Favi-Com');
//     }))
// };

// const DefaultGames = ({ showGames }) => {
//     return (showGames && showGames.map(vg => {
//         return <div key={vg.id} >
//             <Link to={`/videogame/${vg.id}`}>
//                 <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
//             </Link>
//         </div>
//     }))
// };

// const filtersCreated = (filterBy) => {
//     switch (filterBy) {
//         case "By you": return (<ByYou showGames={showGames} />);
//         case "By Favi-Com": return (<ByFavs showGames={showGames} />);
//         default: return (<DefaultGames showGames={showGames} />)
//     }
// };
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendPaginate } from "../../actions/paginate";

// export default function Paginate() {
//   const state = useSelector((state) => state.filtered);
//   const [page, setPage] = useState(1);
//   const dispatch = useDispatch();
//   let showGames = state.slice(0, 15);

//   function gamesPerPage(page) {
//     let end = page * 15;
//     let start = end - 15;
//     showGames = state.slice(start, end);
//   }

//   const handleChange = (newPage) => {
//     setPage(newPage);
//     gamesPerPage(newPage);
//     dispatch(sendPaginate(showGames));
//     return console.log("entre");
//   };

//   return (
//     <div>
//       <button onClick={() => { handleChange(page - 1) }} >prev</button>
//       <button onClick={() => { handleChange(page + 1) }}>next</button>
//     </div>
//   );
// }


// // form agus:
// import React, { useState } from "react";
// import { getTemperaments } from "../../actions";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { useHistory } from "react-router";
// import imaged from "./space.gif";
// import { Link } from "react-router-dom";
// import s from "./form.module.css"
// import NavBar from "../NavBar/NavBar"
// function Form() {
//   // EL COMPONENTE FUNCIONA

//   const DefImg = imaged;
//   const expresiones = {
//     nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
//     numero: /^\d{1,2}$/, // no usada
//   };

//   //////////////////////////////////////// HOOKS ////////////////////////////////////////////////

//   const [name, setName] = useState({ value: "", valid: null }); //Nombre
//   const [minH, setMinH] = useState({ value: "0", valid: null }); //Altura Minima
//   const [maxH, setMaxH] = useState({ value: "", valid: null }); //Altura MAxima
//   const [minW, setMinW] = useState({ value: "0", valid: null }); //Peso Minimo
//   const [maxW, setMaxW] = useState({ value: "", valid: null }); //Peso Maximo
//   const [minAge, setMinAge] = useState({ value: "0", valid: "true" }); //Edad
//   const [maxAge, setMaxAge] = useState({ value: "", valid: "true" }); //Edad
//   const [image, setImage] = useState({ value: "", valid: "true" }); //Edad
//   const [selectedTemps, setSelectedTemps] = useState([]);
//   // const [tempn, setTempn] = useState([]) //nombre Temperamentos
//   //const [tempId, setTempId] = useState([]) //nombre Temperamentos
//   const [error, setError] = useState(""); // Error
//   const { push } = useHistory(); //Hook Para Redireccionar
//   const temps = useSelector((state) => state.Temperaments); //Temperamentos Disponibles en el Back
//   const dispatch = useDispatch(); //Hook Dispatch

//   useEffect(() => {
//     dispatch(getTemperaments()); //CDM Component Did Mount
//     // return () => dispatch(clear) //CWU Component Will UnMount
//   },[dispatch]); //CDU Component Did Update

//   //////////////////////////////////////// HANDLERS ////////////////////////////////////////////////

//   /////////////////////////////////////// HANDLE SUBMIT
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.valid === "true") {
//       let temps = selectedTemps.map((t) => t.id);
//       let dogi = {
//         name: `${name.value}`,
//         height: `${minH.value} - ${maxH.value}`,
//         weight: `${minW.value} - ${maxW.value}`,
//         age: `${minAge.value} - ${maxAge.value} years`, //seteando valores de perrito
//         image: image.value || DefImg,
//         temperaments: temps,
//       };

//       axios.post("http://localhost:3001/dog", dogi) // Sumbit del perrito
//         .then((response) => {
//           push("dogs/" + response.data.id);
//         });
//     } else {
//       alert("el Nombre de perro no es valido");
//     }
//   };
//   /////////////////////////////////////// HANDLE CHANGE
//   const handleChange = (e) => {
//     console.log(e.target.name);
//     switch (e.target.name) {
//       case "name":
//         setName({ ...name, value: e.target.value });
//         break;
//       case "minH":
//         setMinH({ ...minH, value: e.target.value });
//         break;
//       case "maxH":
//         setMaxH({ ...maxH, value: e.target.value });
//         break; //handles dogs changes
//       case "minW":
//         setMinW({ ...minW, value: e.target.value });
//         break;
//       case "maxW":
//         setMaxW({ ...maxW, value: e.target.value });
//         break;
//       case "minAge":
//         setMinAge({ ...minAge, value: e.target.value });
//         break;
//       case "maxAge":
//         setMaxAge({ ...maxAge, value: e.target.value });
//         break;
//       case "image":
//         setImage({ ...image, value: e.target.value });
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSelect = (e) => {
//     //handles temperaments changes
//     e.preventDefault();
//     let temp = e.target.value.split(",");
//     var i = selectedTemps.length;
//     var flag = false;
//     while (i--) {
//       if (selectedTemps[i].name === temp[0]) return (flag = true);
//     }
//     if (flag) return;
//     var pack = { id: temp[1], name: temp[0] };
//     return setSelectedTemps([...selectedTemps, pack]);
//   };

//   const onClose = (e) => {
//     e.preventDefault();
//     let newTemps = selectedTemps.filter((t) => t.id !== e.target.value);
//     setSelectedTemps(newTemps);
//   };

//   const validate = (e) => {
//     if (expresiones.nombre.test(e.target.value)) {
//       setName({ ...name, valid: "true" });
//       setError(undefined);
//     } else setError("Name is not valid");
//   };
//   const handleCreate = (e) => {
//     e.preventDefault();
//   };
//   //////////////////////////////////////// HANDLERS ////////////////////////////////////////////////

//   ///////////////////////////////////////////////// DA Form
//   return (
//     <div className={s.container}>
//       <NavBar/>
//       <div className={s.imgCont}>
//       <img className={s.img} src={image.value} alt=""/>
//       </div>
//       <div>
//       <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
//         <div className={s.inputName}>
//         <div className={s.name}>
//         {error ? <p className={s.span  }>{error}</p> : <label>Name dog</label>}</div>
//         <input
//           type="text"
//           name="name"
//           placeholder="name..."
//           onBlur={validate}
//           onKeyUp={validate}
//           onChange={handleChange}
//           value={name.value}
//           className={error? s.error : s.input}
//         ></input> 
//         </div>
//         <div className={s.inputName}>
//         <label>Height </label>
//         <input
//           type="number"
//           placeholder="Min H"
//           name="minH"
//           min="0"
//           max={maxH.value}
//           step="1"
//           onChange={handleChange}
//           className={s.input2}
//         ></input>
//         <label> - </label>
//         <input
//           type="number"
//           name="maxH"
//           placeholder="Max H"
//           min={minH.value}
//           max="103"
//           step="1"
//           onChange={handleChange}
//           className={s.input2}
//         ></input> cm
//         </div>
//         <div className={s.inputName}>
//         <label>Weight</label>
//         <input
//           type="number"
//           placeholder="Min W"
//           name="minW"
//           min="0"
//           max={maxW.value}
//           step="0.5"
//           onChange={handleChange}
//           className={s.input2}
//         ></input>
        
//         <label> - </label>
//         <input
//           type="number"
//           name="maxW"
//           placeholder="Max W"
//           min={minW.value}
//           max="220"
//           step="0.5"
//           onChange={handleChange}
//           className={s.input2}
//         ></input> Kg
//         </div>
//         <div className={s.inputName}>
//         <label>Age</label>
//         <input
//           type="number"
//           placeholder="Min A"
//           name="minAge"
//           min="0"
//           max={maxAge.value}
//           step="1"
//           onChange={handleChange}
//           className={s.input2}
//         ></input>
//         <label> - </label>
//         <input
//           type="number"
//           name="maxAge"
//           placeholder="Max A"
//           min={minAge.value}
//           max="29"
//           step="1"
//           onChange={handleChange}
//           className={s.input2}
//         ></input> years
//         </div>
//         <div className={s.inputName}>
//         <label>Image url </label>
//         <input
//           type="text"
//           name="image"
//           value={image.value}
//           onChange={handleChange}
//           className={s.input}
//         ></input>
//         </div>
//         {selectedTemps.length< 13 ?<select className={s.select} onChange={handleSelect}>
//           <option value disabled>
//             select temperaments
//           </option>
//           {temps &&
//             temps.map((t) => {
//               return <option value={[t.name, t.id]}>{t.name}</option>;
//             })}
//         </select> : null}
//         <div className={s.tempC}>
//         {selectedTemps ? (
//           selectedTemps.map((t) => {
//             return (
//                 <button className={s.temp} onClick={onClose} key={t.name} value={t.id}>
//                   {t.name} 
//                 </button>)})): null}
//           </div> 
//           <button className={s.btnS} type="submit" onSubmit={handleCreate}>
//           Create Doggo!
//         </button>    
//       </form>
//       </div>
//       <div className={s.btnC}>
        
//       <Link className={s.btn} to="/home">Cancel</Link>
//       </div>
//     </div>
//   );
// }

// export default Form;