import React, { Component } from 'react';
import Navbar from '../component/navbar';
class Kor26 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: '',
      input: '',
      result: '',
    };
  }


  nstate = (e) => {
    this.setState({ n: e.target.value, input: '', result: '' });
  };

  numstate = (e) => {
    this.setState({ input: e.target.value, result: '' });
  };

  calculateSum = () => {
    const n = parseInt(this.state.n, 10);
    const numbers = this.state.input.split(' ').map(Number);

    if (isNaN(n)) {
        this.setState({ result: 'Please enter n and number' });
        return;
      }

    if (numbers.length !== n) {
        this.setState({ result: 'enter ' + n + ' numbers' });
        return;
      }

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === 1) {
        for (let j = i + 1; j < numbers.length; j++) {
          if (numbers[j] === 4) {
            this.setState({ result: 'False' });
            return;
          }
        }
      }
    }

    this.setState({ result: 'True' });
  };

  render() {
    return (
    <div style={{justifyContent:"center",textAlign:"center",backgroundColor: "#f0f0f0", height: "100vh"}}>
      <Navbar />
        <h1>S1More4</h1>
        <p>Input n:</p>
        <input type="number" value={this.state.n} onChange={this.nstate} />
        <p>enter {this.state.n} number</p>
        <input type="text" value={this.state.input} onChange={this.numstate} />
        <button onClick={this.calculateSum}>Calculate Result</button>
        <p>Result: {this.state.result}</p>
    </div>
    );
  }
}

export default Kor26;
