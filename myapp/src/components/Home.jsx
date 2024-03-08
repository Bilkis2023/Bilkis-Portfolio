import React from 'react';
import ContactList from './ContactList';

const Home = () => {
  return (
    <>
      <div className='container align-container mb-4'>
        <h1 id="name" className='my-4'>
          Hi!, this is my Portfolio 
        </h1>
        <div className='row'>
          <div className='col-6'>
            <img className='headshot img-fluid mx-auto d-block' src="./assets/code-images/Avatar-1.jpg" alt="Bilkis Naher" />
          </div>
          <div className='col-6'>
            <div className='bio-text mt-5 p-5'>
              <p>Mst Bilkis Naher ( font-end web developer)</p>
              <p>I had been learning some skills related to Digital Marketing 
                before I started my Bootcamp Coding lessons. </p>
              <p>I'm fast approaching
               the end of the course, which gives me a feeling of happiness and
                at the same time I feel little worried also thinktng how much 
                I would be able to apply my coding knoledge successfully.
               I'm looking forward to learning more about coding and earning 
              practical knowledege by applying those.</p>
            </div>
          </div>
        </div>
        <ContactList />
      </div>
    </>


  ); 
}

export default Home;
