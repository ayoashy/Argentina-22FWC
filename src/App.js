import React, { useState, useEffect } from 'react';
import './styles/style.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { pictures } from './data';

function App() {
  const [counter, setCounter] = useState(0);
  const [isMoving, setIsmoving] = useState(true);

  const lastSlide = pictures.length - 1;

  const nextSlide = () => {
    setCounter((counter) => {
      return counter + 1;
    });
  };
  const prevSlide = () => {
    setCounter((counter) => {
      return counter - 1;
    });
  };

  useEffect(() => {
    if (counter < 0) {
      setCounter(lastSlide);
    }
    if (counter > lastSlide) {
      setCounter(0);
    }
  }, [counter]);

  useEffect(() => {
    let interval;
    if (isMoving) {
      interval = setInterval(() => {
        setCounter(counter + 1);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [counter, isMoving]);

  return (
    <>
      <header>
        <nav>
          <h1>Argentina</h1>
          <ul>
            {[1, 2, 3, 4, 5].map((vamos, index) => (
              <li key={index}>vamos</li>
            ))}
          </ul>
        </nav>
      </header>

      <section>
        <article>
          <img
            src={pictures[counter]}
            alt='vamos argentina'
            onMouseOver={() => setIsmoving(false)}
            onMouseOut={() => setIsmoving(true)}
          />
          <button className='btn1' onClick={prevSlide}>
            <AiOutlineArrowLeft />
          </button>
          <button className='btn2' onClick={nextSlide}>
            <AiOutlineArrowRight />
          </button>
        </article>
        <div>
          {pictures.map((picture, index) => (
            <button
              key={index}
              className={index === counter ? 'scale' : ''}
              onClick={() => setCounter(index)}
            >
              <BsDot size={30} />
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
