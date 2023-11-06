import React, { Component } from "react";
import Navbar from "../component/navbar";

class Kor5 extends Component {
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
    let a, b, c, d;
    if(x < 100 || x > 999){
        alert("out of range")
    }
    a = Math.floor (x / 100);
    b = Math.floor (x % 100);
    c = Math.floor (b / 10);
    d = Math.floor (b % 10);

    result = result = d * 100 + c * 10 + a;;
    this.setState({
      result: result
    });
  };

  render() {
    const { x,result } = this.state;

    return (
      <div style={{justifyContent:"center",textAlign:"center",backgroundColor: "#f0f0f0", height: "100vh"}}>
        <Navbar />
        <div>
            <h2>0-999</h2>
            Enter 100-999 to reverse: <input type="number" name="x" value={x} onChange={e => this.setState({ x: parseFloat(e.target.value) })} />
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

export default Kor5;
