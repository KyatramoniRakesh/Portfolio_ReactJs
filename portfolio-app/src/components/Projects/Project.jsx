import React, { useState } from "react";
import "./Project.css";
import Menu from "./Menu";
// import { Link } from "react-router-dom"; 
function Portfolio() {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updateItems);
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title-1">Projects</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          All Projects
        </span>
        <span className="work__item" onClick={() => filterItem("Django")}>
          Django
        </span>
        <span className="work__item" onClick={() => filterItem("React")}>
          React
        </span>
        <span className="work__item" onClick={() => filterItem("Front-End")}>
         Front-End
        </span>
        <span className="work__item" onClick={() => filterItem("Others")}>
          Others
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="https://github.com/KyatramoniRakesh?tab=repositories" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
             
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
