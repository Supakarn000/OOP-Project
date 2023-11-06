import React, { Component } from "react";
import Navbar from "../component/navbar";

class Kor2 extends Component {
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
    if (x > 40) {
      result = (x - 40) * 20 + 40 * 120;
    } else {
      result = 40 * 120;
    }

    this.setState({
      result: result,
    });
  };

  render() {
    const { x, result } = this.state;

    return (
      <div style={{justifyContent:"center",textAlign:"center",backgroundColor: "#f0f0f0", height: "100vh"}}>
        <Navbar />
        <div>
            <h1>Enter จำนวนชั่วโมง:</h1><br/>
            <input type="number" name="x" value={x} onChange={(e) => this.setState({ x: parseFloat(e.target.value) })}/>
        </div>
        <br />
        <button onClick={this.calculateSum}>Calculate Result</button>
        <div>
          <p>Result: {result}</p>
        </div>
      </div>
    );
  }
}

export default Kor2;
