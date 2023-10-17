import React, { Component } from "react";

class Kor4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [23,58,88,16,27],
      result: 0,
    };
  }

  calculateSum = () => {
    const { arr } = this.state;
    let result = 0;
    let max = arr[0]

    if(arr[1] > max){
        max = arr[1];
    }
    if(arr[2] > max){
        max = arr[2]
    }
    if(arr[3] > max){
        max = arr[3]
    }
    if(arr[4] > max){
        max = arr[4]
    }

    result = max;

    this.setState({
      result: result,
    });
  };

  render() {
    const { result } = this.state;

    return (
      <div>
        <div>
            <h2>Who is highest[23,58,88,16,27]</h2>
        </div>
        <br />
        <button onClick={this.calculateSum}>Calculate Highest</button>
        <div>
          <p>highest number is {result}</p>
        </div>
      </div>
    );
  }
}

export default Kor4;
