import React, { Component } from "react";

class Kor3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [23,16,27],
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
            <h2>Who is highest[23,16,27]</h2>
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

export default Kor3;
