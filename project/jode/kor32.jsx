import React, { Component } from "react";
import Navbar from "../component/navbar";
class Kor32 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      result: '',
      time: 0
    };
  }

  calculateSum = () => {
    const { x, time } = this.state;
  
    if (x.length < 2) {
      this.setState({
        result: x.repeat(time),
      });
    } else {
      const count = x.slice(-2);
      this.setState({
        result: count.repeat(time),
      });
    }
  };

  render() {
    const { x, result,time } = this.state;

    return (
      <div style={{justifyContent:"center",textAlign:"center",backgroundColor: "#f0f0f0", height: "100vh"}}>
        <Navbar />
        <div>
          <h1>ExtraEnd</h1>
          <label>
            Enter String: <input type="text" name="x" value={x} onChange={e=>this.setState({x: e.target.value})}/>
          </label><br/>A
          <label>
            Enter time:<input type="number" name="time" value={time} onChange={e=>this.setState({time: parseInt(e.target.value)})}/>
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

export default Kor32;
