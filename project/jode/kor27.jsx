import React, { Component } from 'react';

class Kor27 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: 0,
    };
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  calculateSum = () => {
    const numbers = this.state.input.split(' ').map(Number);
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
          count++;
        }
      }
    }

    this.setState({ result: count });
  };

  render() {
    return (
        <div style={{justifyContent:"center",textAlign:"center",backgroundColor: "#f0f0f0", height: "100vh"}}>
        <h1>[SInverse]</h1>
        <p>enter number เว้นวรรคด้วย</p>
        <input type="text" value={this.state.input} onChange={this.handleInputChange} />
        <button onClick={this.calculateSum}>Count</button>
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}

export default Kor27;
