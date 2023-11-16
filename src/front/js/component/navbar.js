import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Textos</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<span className="navbar-brand mb-0 h1">Galería de Fotos</span>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/biografia">
						<span className="navbar-brand mb-0 h1">Biografía</span>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/links">
						<span className="navbar-brand mb-0 h1">Links de Interés</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};
