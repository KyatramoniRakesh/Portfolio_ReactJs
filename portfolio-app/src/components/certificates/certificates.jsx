import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./certificates.css";
import Image1 from "../../assets/DRDO.png";
import Image2 from "../../assets/cyber security certificate.jpg";
import Image3 from "../../assets/KyatramoniRakesh_FullStackDeveloper_certificate.jpg";


const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`arrow next ${className}`}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`arrow prev ${className}`}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
};

function Blog() {
  const certificates = [
    {
      category: "Cyber Security",
      image: Image2,
      link: "https://drive.google.com/file/d/1oshdJiBoHwrkbtqYt5q6R7XjVH2myqlb/view?usp=sharing",
      title: "Cyber Security",
      organization: "Teachnook",
      location: "Course",
    },
    {
      category: "Full Stack Development",
      image: Image3,
      link: "https://drive.google.com/file/d/1LldvIHKOsznteNNRSLSAM-MNjId2HGQq/view?usp=sharing",
      title: "Full Stack Web Development",
      organization: "Traning",
      location: "Hyderabad",
    },
    {
      category: "React",
      image: Image3,
      link: "https://drive.google.com/file/d/1wJVwNlC-FcD5ZxbuhDI5QphMgEOjDSeo/view?usp=sharing",
      title: "React Js",
      organization: "Traning",
      location: "Hyderabad",
    },
    {
      category: "DRDO",
      image: Image1,
      link: "https://drive.google.com/file/d/15HQoCloSlXQ44gSlrckvoIOh5cumuth6/view?usp=drive_link",
      title: "Defence Research and Development Organisation",
      organization: "Internship Certificate",
      location: "Hyderabad",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2, // Number of slides to show at a time
    slidesToScroll: 2, // Number of slides to scroll
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  
  return (
    <section className="blog container section" id="certificates">
      <h2 className="section__title-1">Certificates</h2>

      <Slider {...settings}>
        {certificates.map((certificate, index) => (
          <div key={index} className="blog__card">
            <div className="blog__thumb">
              <a href={certificate.link}>
                <span className="blog__category">{certificate.category}</span>
              </a>
              <a href={certificate.link}>
                <img src={certificate.image} alt="certificate" className="blog__img-1" />
              </a>
            </div>
            <div className="blog__details">
              <h3 className="blog__title">{certificate.title}</h3>
              <div className="blog__meta">
                <span>{certificate.organization}</span>
                <span className="blog__dot">.</span>
                <span>{certificate.location}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Blog;
