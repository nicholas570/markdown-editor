import React from 'react';
import './App.css';

import marked from 'marked';

import sampleText from './sampleText';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              className="form-control"
              rows="35"
              value={sampleText}
            ></textarea>
          </div>
          <div className="col-sm-6">
            <div>{sampleText}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
