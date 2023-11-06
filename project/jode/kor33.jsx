import React, { Component } from "react";

class Kor33 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      result: '',
    };
  }

  calculateSum = () => {
    const x = this.state.x.split(' ').map(Number);
    let result = 'False'

    for(let i=0;i<x.length;i++){
        if(x[i] === 6){
            result = 'True'
            break;
        }
    }

    this.setState({
        result: result
    })
  };

  render() {
    const { x, result } = this.state;

    return (
      <div style={{justifyContent:"center",textAlign:"center",backgroundColor: "#f0f0f0", height: "100vh"}}>
        <div>
          <h1>First Last 6</h1>
          <label>
            Enter number in array: <input type="text" name="x" value={x} onChange={e=>this.setState({x: e.target.value})}/>
          </label><br/>
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

export default Kor33;
