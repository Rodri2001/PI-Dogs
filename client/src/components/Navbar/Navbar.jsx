import React from "react";
import styles from "./Navbar.module.css"
import { Link, } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import FilterByDB from "../Filter/FilterByDB";
import FilterByTemper from "../Filter/FilterByTemper";
import OrderByName from "../Order/OrderByName";
import OrderByWeight from "../Order/OrderByWeight";

export default function Navbar() {

    return (
        <div className={styles.Navbar}>
            <SearchBar></SearchBar>
            <Link to='/home' >
                <button>Home</button>
            </Link>
            <Link to='/create'>
                <button>Create</button>
            </Link>
            <div>
                Filters: <FilterByDB/>
                <FilterByTemper/>
            </div>
            <div>
                Orders: <OrderByName/>
                <OrderByWeight />
            </div>
        </div>
    )
}