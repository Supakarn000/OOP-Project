import React, { Component } from "react";
import Navbar from "../component/navbar";

class Kor4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [23,58,88,16,27],
      result: 0,
      a: [],
      n: 0
    };
  }

  calculateSum = () => {
    const {a,n} = this.state;
    let max = a[0];

    for(let i=1;i<n;i++){
      if(max < a[i]){
        max = a[i]
      }
    }
    this.setState({
      result: max
    });
  };
  astate = (e, index) => {
    const value = parseInt(e.target.value);
    const a = this.state;
    a[index] = value;
    this.setState({ a });
  };

  render() {
    const { a,n,result } = this.state;

    const ainput = [];
    for(let i=0;i<n;i++){
      ainput.push(
        <input key={i} type="number" value={this.state.a[i]} onChange={(e) => this.astate(e, i)}/>
      )
    }
    //console.log(ainput);
    
    return (
      <div style={{justifyContent:"center",textAlign:"center",backgroundColor: "#f0f0f0", height: "100vh"}}>
        <Navbar />
        <div>
            <h2>Who is highest[23,58,88,16,27]</h2>
        </div>
        <br />
        <input type='number' name="n" value={n} onChange={(e)=>this.setState({n: e.target.value})}/><br/>
        {ainput}
        <button onClick={this.calculateSum}>Calculate Highest</button>
        <div>
          <p>highest number is {result}</p>
        </div>
      </div>
    );
  }
}

export default Kor4;
