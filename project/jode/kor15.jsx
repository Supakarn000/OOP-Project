import React, { Component } from "react";

class Kor15 extends Component {
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
    let result = 0.0;
    let avg = 0.0, max = a[0] , min = a[0], sd = 0.0 ,avgres = 0.0; 

    //avg
    for (let i=0 ; i<n ; i++) {
        avg += a[i];
    }
    avgres = avg/n;

    //max
    for(let i=0;i<n;i++){
        if(a[i] > max){
            max = a[i];
        }
    }

    //min
    for (let i = 0; i < n; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    //SD
    let sum = 0.0, xi = 0.0;
    for (let i = 0; i < n; i++) {
        xi = a[i];
        sum += (xi - avgres) * (xi - avgres);
    }
    sd = Math.sqrt(sum/n);


    this.setState({ result: `avg = ${avgres} max = ${max} min = ${min} SD = ${sd}`});
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
          <h1>Average MAX MIN SD</h1>
          <label>
            Enter N:<input type="number" name="n" value={n} onChange={this.nstate} /><br/>
            Enter Input:{a.map((value, index) => (<input key={index} type="number" value={value} onChange={(e) => this.astate(e, index)}/>))}<br/>
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

export default Kor15;
