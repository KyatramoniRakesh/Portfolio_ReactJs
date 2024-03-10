import React from "react";
import "./Education.css";
import Data from "./Data";
import Card from './Card'

function Resume() {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title-1">Education</h2>

      <div className="resume__container">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  subTitle={val.subTitle}
                  year={val.year}
                  desc={val.desc}
                  GPA={val.GPA}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Resume;
