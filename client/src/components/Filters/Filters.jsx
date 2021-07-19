import React from "react";
import { useDispatch } from "react-redux";
import { filterBy } from "../../actions/orders&filters";
import style from '../Filters/Filters.module.css'

export default function FilterOptions() {
    const dispatch = useDispatch();
    const handleCreated = (e) => {
        switch (e.target.value) {
            case 'By Favi-Com': dispatch(filterBy(vg => vg.created === false)); break
            case 'By you': dispatch(filterBy(vg => vg.created === true)); break
            default: dispatch(filterBy(vg => vg.hasOwnProperty('created')))
        }
    };

    return (
        <div>
            <h5 className={style.label}>Filter by Created:</h5>
            <form >
                <select className={style.box_select} name="Created" onChange={handleCreated}>
                    <option value="All">All</option>
                    <option value="By Favi-Com">By Favi-Com</option>
                    <option value="By you">By you</option>
                </select>
            </form>
        </div>
    )
}
