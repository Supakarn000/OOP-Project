import React, { Component } from "react";

class Kor9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      a: [],
      result: 0,
      x1: 0,
      y1: 0,
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

    this.setState({ result: `${x1} ${y1}` });
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
    const { n, result, a , x1, y1} = this.state;

    return (
      <div style={{justifyContent:"center",textAlign:"center",backgroundColor: "#f0f0f0", height: "100vh"}}>
        <div>
          <h1>Mod Dance</h1>
          <label>
            Enter N:<input type="number" name="n" value={n} onChange={this.nstate} /><br/>
            Enter Array:{a.map((value, index) => (<input key={index} type="number" value={value} onChange={(e) => this.astate(e, index)}/>))}<br/>
            Enter x1:<input type="number" name="x1" value={x1} onChange={e => this.setState({ x1: parseInt(e.target.value) })} />
            Enter y1:<input type="number" name="y1" value={y1} onChange={e => this.setState({ y1: parseInt(e.target.value) })} />
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

export default Kor9;
