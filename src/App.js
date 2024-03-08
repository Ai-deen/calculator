import './App.css';
import React, { useState } from 'react';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('0');

  function handleNumberClick(number) {
    if(displayValue === '' || displayValue === '-'){
      setDisplayValue(number);
    } else {
      setDisplayValue(prevValue => prevValue + number);
    }
  }

  function handleOperatorClick(operator) {
    if(displayValue.endsWith('-')){
      return;
    }
    setDisplayValue(prevValue => prevValue + operator);
  }

  function handleDecimalClick() {
    if (!displayValue.includes('.')) {
      setDisplayValue(prevValue => prevValue + '.');
    }
  }

  function calculateResult() {
    try {
      const result = eval(displayValue);
      setResult(result.toString());
    } catch (error) {
      setDisplayValue('Error');
      setResult('');
    }
  }


  function handleAllClear(){
    setDisplayValue('');
    setResult('0');
  }


  return (
    <div className="App">
      <div className="container">
        <div id="display" className="display">
          <div>{displayValue}</div>
          <div>{result}</div>
        </div>
        <div>
          <button id="clear" className="clear" onClick={handleAllClear}> AC </button>
          <button id="divide" className="symbol" onClick={() => handleOperatorClick('/')}> / </button>
          <button id="multiply" className="symbol" onClick={() => handleOperatorClick('*')}> x </button>
        </div>
        <div>
          <button id="seven" className="number" onClick={() => handleNumberClick('7')}> 7 </button>
          <button id="eight" className="number" onClick={() => handleNumberClick('8')}> 8 </button>
          <button id="nine" className="number" onClick={() => handleNumberClick('9')}> 9 </button>
          <button id="subtract" className="symbol" onClick={() => handleOperatorClick('-')}> - </button>
        </div>
        <div>
          <button id="four" className="number" onClick={() => handleNumberClick('4')}> 4 </button>
          <button id="five" className="number" onClick={() => handleNumberClick('5')}> 5 </button>
          <button id="six" className="number" onClick={() => handleNumberClick('6')}> 6 </button>
          <button id="add" className="symbol" onClick={() => handleOperatorClick('+')}> + </button>
        </div>
        <div className="minicontainer">
          <div>
            <div>
              <button id="one" className="number" onClick={() => handleNumberClick('1')}> 1 </button>
              <button id="two" className="number" onClick={() => handleNumberClick('2')}> 2 </button>
              <button id="three" className="number" onClick={() => handleNumberClick('3')}> 3 </button>
            </div>
            <div>
              <button id="zero" className="numberzero" onClick={() => handleNumberClick('0')}> 0 </button>
              <button id="decimal" className="number" onClick={() => handleDecimalClick('.')}> . </button>
            </div>
          </div>
          <div>
            <button id="equals" className="equals" onClick={calculateResult}> = </button>
          </div>
        </div>
      </div>
      <p> Designed and coded by</p>
      <p> Tallapaka Lahari Sreeja</p>

    </div>
  );
}

export default App;
