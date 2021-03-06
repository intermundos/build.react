import React from 'react';
import { NavLink }        from 'react-router-dom';
import './Header.scss';

const Header = () => {
	return (
		<header className="header hero is-dark">
			<div className="hero-body">
				<div className="container">
					<NavLink to={`/login`} className="nav__item" activeClassName="active">Login</NavLink>
					<NavLink exact to={`/`} className="nav__item" activeClassName="active">Home</NavLink>
				</div>
			</div>
		</header>
	)
};

export default Header;