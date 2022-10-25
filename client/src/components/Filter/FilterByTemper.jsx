import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, filterByTemper } from "../../redux/actions";
import style from './OrderByBreeds.module.css'


export default function FilterByTemper() {
    const dispatch = useDispatch()
    const allTempers = useSelector((e) => e.temperaments);

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])

    const handleFilterTemper = (e) => {
        dispatch(filterByTemper(e.target.value))
    }
    
    return(
        <div>
            <div>
                <select onChange={(e)=> handleFilterTemper(e)} className={style.select}>
                    <option value='All'>
                        All Tempers
                    </option>
                    {
                        allTempers && allTempers.map(({id, name}) => (
                            <option key={id} value={name}>{name}</option>
                            ))
                        }
                </select>
            </div>
        </div>
    )
}