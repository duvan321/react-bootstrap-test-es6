import React from "react";
import PropTypes from "prop-types";
import "./cards.css";






function Card({ title, imageSource, url, text }) {
  
  return (
   

    

    
    <div className="card text-center bg-dark animate__animated animate__flip">
       
      <div className="overflow">
        <img src={imageSource} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-light animate__animated animate__bounce">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{text}</p>
        <a
          href={url}
          className="btn btn-outline-secondary rounded-0"
          target="blank"
        >
          go to this website
        </a>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
};

export const ProductPage = ()=>{
  <p>carrito</p>
}
export default Card;
