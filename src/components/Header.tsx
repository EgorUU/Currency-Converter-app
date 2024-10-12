import React, { FC } from 'react'
import '../scss/blocks/header.scss'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Header: FC = () => {
    return (
        <>
        	<nav className="navbar navbar-expand-lg bg-primary">
            	<div className="container-fluid">
            		<Link to="/" className="navbar-brand logo">exchange rate</Link>
            		<div className="collapse navbar-collapse">
            			<ul className="navbar-nav navbar-collapse">
            				<li className="nav-item">
            					<Link to="/" className="nav-link">Главная</Link>
            				</li>            				
            			</ul>
            		</div>
            	</div>
            </nav>
            <main>
            	<Outlet />
            </main>
        </>
    )
}

export default Header