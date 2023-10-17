import React, { Component } from "react";

class Kor1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      result: 0,
    };
  }

  calculateSum = () => {
    const { x } = this.state;
    const result = 3 * Math.pow(x, 4) + 2 * Math.pow(x, 3) - x + 10;
    
    this.setState({
      result: result,
    });
  };

  render() {
    const { x, result } = this.state;

    return (
      <div>
        <div>
            <h1>3x^4 + 2x^3 - x + 10</h1>
          <label>
            Enter X: <input type="number" name="x" value={x} onChange={e => this.setState({ x: parseFloat(e.target.value) })} />
          </label>
        </div>
        <br/>
        <button onClick={this.calculateSum}>Calculate Result</button>
        <div>
          <p>Result: {result}</p>
        </div>
      </div>
    );
  }
}

export default Kor1;
