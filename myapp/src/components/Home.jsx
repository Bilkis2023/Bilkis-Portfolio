import React from 'react';
import ContactList from './ContactList';
import headshot from '../assets/code-images/Code-1.jpg';


const Home = () => {
  return (
    <>
      <div className='container align-container mb-4'>
        <h1 id="name" className='my-4'>
          Hi! I'm Bilkis, this is my Portfolio Page
        </h1>
        <div className='row'>
          <div className='col-6'>
            <img className='headshot img-fluid mx-auto d-block' src={headshot} alt="Bilkis Naher" />
          </div>
          <div className='col-6'>
            <div className='bio-text mt-5 p-5'>
              <p>intro</p>
              <p>what you are doing now, and available for work</p>
              <p>when you are not coding, what you love todo</p>
            </div>
          </div>
        </div>
        <ContactList />
      </div>
    </>


  );
}

export default Home;
