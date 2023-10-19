import React, { useState, useEffect } from 'react';
import './Carousel.css';
import Ali from './Images/Ali.png';
import Ahmad from './Images/Ahmad.png';
import Abdullah from './Images/Abdullah.png';
import Raza from './Images/Raza.png';
import Umair from './Images/Umair.png';

const Carousel = () => {
  const people = [
    { name: 'Ali', role: 'Front End Developer', img: Ali },
    { name: 'Ahmad', role: 'Backend Developer', img: Ahmad },
    { name: 'Abdullah', role: 'Graphic Designer', img: Abdullah },
    { name: 'Raza', role: 'UI & UX Designer', img: Raza },
    { name: 'Umair', role: 'Business Developer', img: Umair },
  ];

 const initialPeople = people.slice(0, 3);

  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);

  const handleRightArrowClick = () => {
    setCurrentPersonIndex((currentPersonIndex + 1) % people.length);
  };

  const handleLeftArrowClick = () => {
    // Ensure the index doesn't go below zero
    setCurrentPersonIndex((currentPersonIndex - 1 + people.length) % people.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleRightArrowClick();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentPersonIndex]);

  return (
    <>
      <div>
        <h1>
          What Our Valued Clients Think About <br /> Hive Technologies
        </h1>
        <p>
          Discover The Real Stories And Experiences Shared By Our Valued
          Customers <br /> And How Our Services Have Transformed Their Business
        </p>
      </div>
      <div className="left-arrow" onClick={handleLeftArrowClick}>
        <i className="fa-solid fa-less-than-equal"></i>
      </div>
      <div className="right-arrow" onClick={handleRightArrowClick}>
        <i className="fa-solid fa-greater-than-equal"></i>
      </div>
      <div className="people-container">
        {people.map((person, index) => (
          <div
            key={index}
            className={`person-img ${index === currentPersonIndex ? 'fade-in' : 'fade-out'}`}
          >
            <img src={person.img} alt={`${person.name} Avatar`} />
            <h2>{person.name}</h2>
            <p>{person.role}</p>
          </div>
        ))}
      </div>
      <div className="indicators">
        {people.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentPersonIndex ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
