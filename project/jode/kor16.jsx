import React, { Component } from "react";

class Kor16 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      a: [],
      result: 0,
    };
  }

  calculateSum = () => {
    let { n, a,} = this.state;
    let result = 0 , sum = 0, xbar = 0 ,xi = 0.0;

    for(let i=0;i<n;i++){
		sum += a[i];
	}
    xbar = sum/n;

    sum = 0.0;
    for(let i=0;i<n;i++){
		xi = a[i];
		sum += (xi-xbar)*(xi-xbar);
	}

    result = Math.sqrt(sum/n)


    this.setState({ result: result });
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
    const { n, result, a} = this.state;

    return (
      <div>
        <div>
          <h1>Find SD</h1>
          <label>
            Enter N:<input type="number" name="n" value={n} onChange={this.nstate} /><br/>
            Enter Array:{a.map((value, index) => (<input key={index} type="number" value={value} onChange={(e) => this.astate(e, index)}/>))}<br/>
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

export default Kor16;
