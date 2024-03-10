import React from "react";

function Card(props) {
  return (
      <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.subTitle}</h3>
        <h7 className="timeline__title">{props.title}</h7>
        <p className="timeline__text">{props.desc}</p>
        <p className="timeline__text">{props.GPA}</p>
      </div>
      
  );

}

export default Card;
