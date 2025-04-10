import React from "react";
import "./Card.css";

export default function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button onClick={() => alert("Meer info over " + title)} className="card-button">Meer info</button>
     </div>
    </div>
  );
}