import React, { useState, useEffect } from 'react';
import marked from 'marked';

import './App.css';

import sampleText from './sampleText';

function App() {
  const [state, setState] = useState();

  useEffect(() => {
    const text = localStorage.getItem('text');
    if (text) {
      setState(text);
    }
    setState(sampleText);
  }, []);

  useEffect(() => {
    localStorage.setItem('text', state);
  }, [state]);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const renderText = (text) => {
    if (text) {
      return marked(text, { sanitize: true });
    }
    return marked('Text not loading', { sanitize: true });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <textarea
            className="form-control"
            rows="35"
            value={state}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-6">
          <div dangerouslySetInnerHTML={{ __html: renderText(state) }} />
        </div>
      </div>
    </div>
  );
}

export default App;
