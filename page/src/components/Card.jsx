import React from "react";

const Card = ({ image, title, description, price, category }) => {
  return (
    <div>
      <div className="card bg-base-100 max-w-96 shadow-sm">
        <figure>
          <img className="w-30" src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline"> $ {price}</div>
            <div className="badge badge-outline">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
