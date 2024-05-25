import React from 'react';
import './Summary.css';
import Header from '../components/Header';

function BackButton({ onClick }) {
  return (
    <button className="back-button" onClick={onClick}>Back</button>
  );
}

function OpenQuestionSummary({ question, onSubmit, onBack }) {
  return (
    <div>
      <Header/>
      <div id="head1">   
        <div className="form-container2"> 
          <h1 className="subtitle2">Summary</h1>
          <p id="q">Question: {question}</p>
          <button className="submit-button" onClick={onSubmit}>Submit</button>
          <BackButton onClick={onBack} />
        </div>
      </div>  
    </div>
  );
}

function ClosedQuestionSummary({ question, options, onSubmit, onBack }) {
  return (
    <div>
      <Header/>
      <div id="head1">    
        <div className="form-container3">   
          <h1 className="subtitle2">Summary</h1>
          <p id="q">Question: {question}</p>
          <div id="op">
            <p>Options:</p>
            <ul>
              {options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
          <button className="submit-button" onClick={onSubmit}>Submit</button>
          <BackButton onClick={onBack} />
        </div>
      </div>
    </div>
  );
}

export { OpenQuestionSummary, ClosedQuestionSummary };
