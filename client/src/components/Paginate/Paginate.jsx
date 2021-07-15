import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendPaginate } from "../../actions/paginate";

export default function Paginate() {
  const state = useSelector((state) => state.videogames);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  let showGames = state.slice(0, 15);

  function gamesPerPage(page) {
    let end = page * 15;
    let start = end - 15;
    showGames = state.slice(start, end);
  }

  const handleChange = (newPage) => {      
    setPage(newPage);
    gamesPerPage(newPage);
    dispatch(sendPaginate(showGames));
    return console.log("entre");
  };

  return (
    <div>
      <button onClick={()=>{handleChange(page - 1)}} >prev</button>
      <button onClick={()=>{handleChange(page + 1)}}>next</button>
    </div>
  );
}
