import React from "react";
import { useDispatch } from "react-redux";
import { sortWeight } from "../../redux/actions/index";
import style from './OrderByBreeds.module.css'

export default function OrderByWeight() {

    const dispatch = useDispatch()


    function handleOrdenarWeitgh(e) {
        e.preventDefault();
        dispatch(sortWeight(e.target.value));
    }

    return (
    <div>
        <select onChange={e=> handleOrdenarWeitgh(e)} className={style.select}>
            <option value='All'>By Weight</option>
            <option value='light'> Light  </option>
            <option value='big'> Weight  </option>
        </select> 
    </div> 
    )
}