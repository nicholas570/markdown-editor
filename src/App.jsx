import React from 'react';
import './App.css';

import marked from 'marked';

import sampleText from './sampleText';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: sampleText,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const text = localStorage.getItem('text');
    if (text) {
      this.setState({ text });
    } else {
      this.setState({ text: sampleText });
    }
  }

  componentDidUpdate() {
    const { text } = this.state;
    localStorage.setItem('text', text);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  renderText(text) {
    return marked(text, { sanitize: true });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              className="form-control"
              rows="35"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={{ __html: this.renderText(text) }} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
