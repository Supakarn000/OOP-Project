import React, { Component } from "react";
import Navbar from "../component/navbar";
class Kor25 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        n: 0,
        a: [],
        result: " "
    };
  }

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

  calculateSum = () => {
    let {a,n} = this.state
    let sum = 0;
    let result = this.state;

    for(let i=0;i<n;i++){
        if(a[i] == 2){
            sum += 2
        }
    }

    if(sum === 10){
        result = "True"
    }
    else{
        result = "False"
    }

    this.setState({ result: result});
  }

  render() {
    const {n, result ,a} = this.state;

    const arrayinput = [];
    for (let i = 0; i < n; i++) {
      arrayinput.push(
        <input key={i} type="number" value={this.state.a[i]} onChange={(e) => this.astate(e, i)}/>
      );
    }

    return (
      <div style={{justifyContent:"center",textAlign:"center",backgroundColor: "#f0f0f0", height: "100vh"}}>
        <Navbar />
        <h1>SSum2to8</h1>
        <label>
            Input n<input type="number" name="n" value={n} onChange={this.nstate}/><br/>
            Enter Input:{arrayinput}<br/>
        </label>
        <button onClick={this.calculateSum}>Calculate Result</button>
        <div>
          <p>Result: {result}</p>
        </div>
    </div>
    );
  }
}

export default Kor25;
