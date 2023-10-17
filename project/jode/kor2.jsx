import React, { Component } from "react";

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
      <div>
        <div>
          <label>
            Enter จำนวนชั่วโมง:{" "}
            <input
              type="number"
              name="x"
              value={x}
              onChange={(e) => this.setState({ x: parseFloat(e.target.value) })}
            />
          </label>
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
