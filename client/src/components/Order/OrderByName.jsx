import React from "react";
import { useDispatch } from "react-redux";
import { sortName } from "../../redux/actions";
import style from './OrderByBreeds.module.css'

export default function OrderByName() {

    const dispatch = useDispatch()


    function handleOrdenar(e) {
        e.preventDefault();
        dispatch(sortName(e.target.value));
    }

    return (
        <div>
            <select onChange={e => handleOrdenar(e)} className={style.select}>
                <option value='All'>Alphabetically</option>
                <option value='asc'> A a Z  </option>
                <option value='desc'> Z a A  </option>
            </select>
        </div>
    )
}