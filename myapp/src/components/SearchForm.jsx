import React from 'react';
// import './style.css';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm() {
  return (
    <form className="p-5">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
         Name:
        </label>
        <input
          type="email"
          className="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
         Message:
        </label>
        <textarea
          className='form-control'
          id='exampleFormContraolTextarea1'
          rows='3'
        />
        </div>
        <div className="d-grid gap-2 col-5 mx-auto">
        <button
          className="btn btn-outline-secondary text-light"
        >
          Search
        </button>

      </div>
    </form>
  );
}

export default SearchForm;