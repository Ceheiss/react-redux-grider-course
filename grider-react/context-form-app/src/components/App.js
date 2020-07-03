import React, { Component } from 'react';
import UserCreate from './UserCreate';

class App extends Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange('dutch')}
          />
          <h3>{this.state.language}</h3>
          <UserCreate />
        </div>
      </div>
    );
  }
}

export default App;
