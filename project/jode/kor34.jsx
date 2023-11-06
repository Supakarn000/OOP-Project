import React, { Component } from "react";

class Kor34 extends Component {
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
    let first,last;

    first = x[0];
    last = x[x.length-1]

    if(first === last){
        result = 'True'
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
          <h1>sameFirstLast</h1>
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

export default Kor34;
