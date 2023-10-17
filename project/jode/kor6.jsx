import React, { Component } from "react";

class Kor6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      result: 0,
    };
  }

  calculateSum = () => {
    const { x } = this.state;
    let result = 0;
    let a, b, c, d, e, f;
    if(x < 0 || x > 1000){
        alert("out of range")
    }
    a = Math.floor (x / 100);
    b = Math.floor (x % 100);
    c = Math.floor (b / 10);
    d = Math.floor (b % 10);
    e = Math.floor (d / 1);
    f = Math.floor (d % 1);

    result = f + e + c + a;

    this.setState({
      result: result,
    });
  };

  render() {
    const { x,result } = this.state;

    return (
      <div>
        <div>
            <h2>0-1000</h2>
            Enter 0-1000: <input type="number" name="x" value={x} onChange={e => this.setState({ x: parseFloat(e.target.value) })} />
        </div>
        <br />
        <button onClick={this.calculateSum}>Calculate</button>
        <div>
          <p>Result = {result}</p>
        </div>
      </div>
    );
  }
}

export default Kor6;