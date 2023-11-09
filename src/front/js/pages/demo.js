import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container col-9">
      <div className="alert alert-light" role="alert">
        <h3>Imágenes correspondientes a Masivas Tetarte 2023</h3>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://res.cloudinary.com/dxvi8sefw/image/upload/v1688690500/DSC_8706_copia.f1b2655d10525150f23b_ou14go.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dxvi8sefw/image/upload/v1688690500/DSC_8756_copia.8d2f88e06598afd68671_w7iqbs.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dxvi8sefw/image/upload/v1688690491/DSC_8771_copia.c5c404008029e0d34787_l9biej.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dxvi8sefw/image/upload/v1688690498/DSC_8704_copia.19dc153f2fc3aaf18c54_ojvjtk.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dxvi8sefw/image/upload/v1688690496/DSC_8758_copia.e4008f6a538e8b35dc87_hqthkq.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};