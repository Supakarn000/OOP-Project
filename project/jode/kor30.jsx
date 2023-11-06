import React, { Component } from "react";
import Navbar from "../component/navbar";
class Kor30 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      result: '',
      time: 0
    };
  }

  calculateSum = () => {
    let { x,time,result } = this.state;

    
    for(let i=0;i<time;i++){
        result += x;
    }



    this.setState({
      result: result,
    });
  };

  render() {
    const { x, result,time } = this.state;

    return (
      <div style={{justifyContent:"center",textAlign:"center",backgroundColor: "#f0f0f0", height: "100vh"}}>
        <Navbar />
        <div>
          <h1>StringTimes</h1>
          <label>
            Enter String: <input type="text" name="x" value={x} onChange={e=>this.setState({x: e.target.value})}/>
          </label><br/>
          <label>
            Enter times:<input type="number" name="time" value={time} onChange={e=>this.setState({time: parseInt(e.target.value)})}/>
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

export default Kor30;
