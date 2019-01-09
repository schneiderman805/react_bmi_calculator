import React, { Component } from 'react';
import './App.css';
import DisplayResult from './DisplayResult';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      methodType: 'metric'
    }
  }

  calculateMethod () {
    if (this.state.methodType === 'metric') {
      this.setState({ methodType: 'imperial' });
    } else {
      this.setState({ methodType: 'metric'})
    }
  }

  render() {
    return (
      
      <div id="App">

        <div>
        <h1>BMI Converter</h1>
        </div>

        <div>
          <label>
            Weight {this.state.methodType === 'metric' ? '(kg)' : '(lbs)'}
          </label>
          <input name="weight" value={this.state.weight} onChange={(e) => this.setState({ weight: e.target.value })} />
        </div>

        <div>
          <label>
            Height {this.state.methodType === 'metric' ? '(cm)' : '(inch)'}
          </label>
          <input name="height" value={this.state.height} onChange={(e) => this.setState({ height: e.target.value })} />
        </div>
        <button 
          name="methodSelector" onClick={() => this.calculateMethod()}>{this.state.methodType === 'metric' ? 'imperial' : 'metric'}
        </button>
        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          methodType={this.state.methodType}
        />
      </div>
    );
  }
}

export default App;
