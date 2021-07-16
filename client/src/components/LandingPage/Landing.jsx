import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css'

export default function LandingPage() {
    return (
        <div className={style.content} >
            {/* <img className={style.myImg} src="https://images.unsplash.com/photo-1612404459571-ccef4b6588e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80" alt="Not found"/> */}
            <h1>Welcome to Favi-Con!</h1>
            <p>This a Videogame-Com, you can find all videogames that you like or discover a new one...</p>
            <Link to='/videogames'><button className={style.bt}>Press to start</button></Link>
        </div>
    )
}






















// export default function LandingPage() {
//     return (
//         <div className={style.background}>
//             <h1>Welcome to Favi-Con!</h1>
//             <h2>algo</h2>
//             <Link to='/videogames'><button className={style.bt}>Press to start</button></Link>
//         </div>
//     )
// }