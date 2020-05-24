import React from 'react';
import {Link} from 'react-router-dom';
import './header.component.scss'
const Header = ()=>(
    <header>
        <Link to="/"><h1>Lima</h1></Link>
        <nav>
            <Link to="/productos">Productos</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/login" >Ingresar</Link>
        </nav>
    </header>
);
export default Header;