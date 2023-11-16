import React, { useContext } from "react";
import { Context } from "../store/appContext";
import eugenia from "../../img/eugenia.jpg";
import "../../styles/home.css";

export const Biografia = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Biografía de Eugenia Brito</h1>
			<p>
				<img src={eugenia} />
			</p>		
			
			<p>
				Lorem Ipsum
			</p>
            <p>
                Lorem Ipsum
            </p>
		</div>
	);
};