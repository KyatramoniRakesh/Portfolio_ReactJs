import React from 'react'
import  { useState } from 'react';


function AboutBox() {
    const [activeLanguage, setActiveLanguage] = useState(null);

    const handleLanguageClick = (language) => {
      setActiveLanguage(language === activeLanguage ? null : language);
    };
    const languages = [
        {
          id: 'python',
          name: 'Python',
          icon: 'devicon-python-plain',
          subtitle: 'Snake Charmer',
        },
        {
          id: 'java',
          name: 'Java',
          icon: 'devicon-java-plain colored',
          subtitle: 'Code Coffee',
        },
        {
          id: 'react',
          name: 'React',
          icon: 'devicon-react-original colored',
          subtitle: 'Frontend Alchemist',
        },
        {
          id: 'django',
          name: 'Django',
          icon: 'devicon-django-plain',
          subtitle: 'Pythonic Powerhouse',
        },
        {
          id: 'javascript',
          name: 'JavaScript',
          icon: 'devicon-javascript-plain',
          subtitle: 'DOM Wizard',
        },
        {
          id: 'mysql',
          name: 'MySQL',
          icon: 'devicon-mysql-original colored',
          subtitle: 'Database Maestro',
        },
        {
          id: 'bootstrap',
          name: 'Bootstrap',
          icon: 'devicon-bootstrap-plain colored',
          subtitle: 'Responsive Prowess',
        },
        {
          id: 'css',
          name: 'CSS',
          icon: 'devicon-css3-plain colored',
          subtitle: 'Styling the Web',
        },
        {
          id: 'html',
          name: 'HTML',
          icon: 'devicon-html5-plain colored',
          subtitle: 'HyperText Hero',
        },
    ];
    return (
        <section className="blog container section" id="blog">
        <h3 className="section__title-1">Skills</h3>
  
        <div className="about__boxes grid">
          {languages.map((language) => (
            <div
              key={language.id}
              className={`about__box ${activeLanguage === language.id ? 'active' : ''}`}
              onClick={() => handleLanguageClick(language.id)}
            >
              <i className={`devicon ${language.icon}`}></i>
              <div>
                <h3 className='about__title_skills'>{language.name}</h3>
                <span className='about__subtitle_skills'>{language.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}

export default AboutBox