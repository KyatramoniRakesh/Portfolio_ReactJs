import React from "react";
import "./Internship.css";
import Image1 from "../../assets/DRDO.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Defence Research and Development Organization (Research Center Imarat)",
    position:"GUI Development Intern",
    date: "March, 2023 - July, 2023",
    description:
      "As a GUI Development Intern at Defence Research and Development Organization's Research Imarat Center, I collaborated with a skilled team to enhance the AMODA project's user interface using Qt and C++. My efforts led to improved GUI performance, effective communication within the team, and ultimately, a more satisfying user experience",
  },

];

function Services() {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title-1">Internship</h2>

      <div className="services__container">
        {data.map(({ id, image, title,position,date, description }) => {
          return (
            <div className="services__Card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <h5 className="services__title">{position}</h5>
              <h7 className="services__title">{date}</h7>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
