import './App.css';
import React from 'react';

// Moved 'Your formatted text will go here' from handleSubmit to state param
// Fixed button type to be 'submit' instead of 'button'
// Added text conversion action to handleSubmit
// Changed output 'class' to 'className' to resolve console error

function App() {
  const [textInput, setTextInput] = React.useState(
    'Here is some example text.'
  );
  const [conversionMode, setConversionMode] = React.useState('lowercase');
  const [textOutput, setTextOutput] = React.useState(
    'Your formatted text will go here!'
  );

  const handleRadioChange = (event) => {
    setConversionMode(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Could extract this to switch case function for more conversion modes
    conversionMode === 'lowercase'
      ? setTextOutput(textInput.toLowerCase())
      : setTextOutput(textInput.toUpperCase());
  };

  return (
    <div className='App'>
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className='form-control form-control__text'>
          <label htmlFor='text'>Text to be converted:</label>
          <textarea
            id='text'
            onChange={handleTextareaChange}
            value={textInput}
          />
        </div>
        <div className='form-control form-control__radio'>
          <input
            type='radio'
            name='conversion'
            id='conversion-0'
            value='lowercase'
            checked={conversionMode === 'lowercase'}
            onChange={handleRadioChange}
          />
          <label htmlFor='conversion-0'>Convert text to lowercase</label>
        </div>
        <div className='form-control form-control__radio'>
          <input
            type='radio'
            name='conversion'
            id='conversion-1'
            value='uppercase'
            checked={conversionMode === 'uppercase'}
            onChange={handleRadioChange}
          />
          <label htmlFor='conversion-1'>Convert text to uppercase</label>
        </div>
        <button type='submit'>Submit</button>
        <div className='form-control form-control__text u-mt-3'>
          <label htmlFor='result'>Converted text:</label>
          <output id='result' className='result'>
            {textOutput}
          </output>
        </div>
      </form>
    </div>
  );
}

export default App;
