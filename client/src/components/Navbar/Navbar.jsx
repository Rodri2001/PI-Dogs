import React from "react";
import styles from "./Navbar.module.css"
import { Link, } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


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
        </div>
    )
}