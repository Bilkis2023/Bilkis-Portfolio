import React from 'react';
import ContactList from './ContactList';
import SearchForm from './SearchForm'

function Contact() {
    return (
      <>
      <div className='container align-container'>
        <h1 className='mt-5'>Contact Me!</h1>
        <h2>I'm available for contract or freelance work.</h2>
      <SearchForm />

      </div>
    <ContactList />
      </>
    );
  }
  
  export default Contact;
