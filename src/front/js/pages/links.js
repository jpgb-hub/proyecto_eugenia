import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Links = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Links de Interés sobre Eugenia</h1>
			
			<p>
				Wikipedia: {" "}
				<a href="https://es.wikipedia.org/wiki/Eugenia_Brito_Astrosa">
					Wiki 
				</a>
			</p>
            <p>
				Memoria chilena:{" "}
				<a href="https://www.memoriachilena.gob.cl/602/w3-article-98214.html">
					Memoria Chilena
				</a>
			</p>
		</div>
	);
};
