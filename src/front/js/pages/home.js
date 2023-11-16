import React, { useContext } from "react";
import { Context } from "../store/appContext";
import eugenia from "../../img/eugenia.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Eugenia Brito, Poeta y crítica literaria</h1>
			<p>
				<img src={eugenia} />
			</p>
			<p> En esta página web, encontrarás parte de la obra de la poeta y crítica Eugenia Brito, como asi también biografía galería de fotos, eventos y lanzamientos </p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
};
