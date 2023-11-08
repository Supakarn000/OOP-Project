import React, { Component } from "react";
import Navbar from "../component/navbar";
import Plot from 'react-plotly.js';

class Kor9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      a: [],
      result: "0 0",
      x1: 0,
      y1: 0,
      data: [{ x: [0], y: [0], type: 'scatter', mode: 'lines+points' }],
    };
  }

  calculateSum = () => {
    let { n, a, x1, y1 } = this.state;

    for (let i = 0; i < n; i++) {
      if (a[i] % 4 === 1) {
        y1++;
      } else if (a[i] % 4 === 2) {
        x1--;
      } else if (a[i] % 4 === 3) {
        x1++;
      } else {
        y1--;
      }
    }

    const newDataPoint = { x: this.state.data[0].x.concat(x1), y: this.state.data[0].y.concat(y1) };
    this.setState({ result: `${x1} ${y1}`, data: [newDataPoint] });
  };

  nstate = (e) => {
    const n = parseInt(e.target.value);
    const a = new Array(n).fill(0);

    this.setState({
      n,
      a,
    });
  };

  astate = (e, index) => {
    const value = parseInt(e.target.value);
    const { a } = this.state;
    a[index] = value;
    this.setState({ a });
  };

  render() {
    const { n, result, x1, y1, data } = this.state;

    const arrayinput = [];
    for (let i = 0; i < n; i++) {
      arrayinput.push(
        <input
          key={i}
          type="number"
          value={this.state.a[i]}
          onChange={(e) => this.astate(e, i)}
        />
      );
    }

    return (
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#f0f0f0",
          height: "100vh",
        }}
      >
        <Navbar />
        <div>
          <h1>Mod Dance</h1>
          <label>
            Enter N:
            <input type="number" name="n" value={n} onChange={this.nstate} />
            <br />
            Enter Array: {arrayinput}
            <br />
            Enter x1:
            <input
              type="number"
              name="x1"
              value={x1}
              onChange={(e) => this.setState({ x1: parseInt(e.target.value) })}
            />
            Enter y1:
            <input type="number" name="y1" value={y1} onChange={(e) => this.setState({ y1: parseInt(e.target.value) })} />
          </label>
        </div>
        <br />
        <button onClick={this.calculateSum}>Calculate Result</button>

        <div>
          <h2>Scatter Plot</h2>
          <Plot data={data} layout={{ width: 450, height: 450, title: 'Scatter Plot' }} />
        </div>

        <div>
          <h2>Result:</h2>
          <p>{result}</p>
        </div>
      </div>
    );
  }
}

export default Kor9;
