import React, { Component } from "react";

class Kor22 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      result: 0,
      w: 0,
      l: 0,
      b: 0,
      h: 0,
      r: 0,
    };
  }

  calculateSum = () => {
    let { n,w,l,b,h,r } = this.state;
    let result = 0;

    if(n === 1){
        result = w*l;
    }
    else if(n === 2){
        result = (b*h)/2;
    }
    else if(n === 3){
        result = Math.PI * Math.pow(r,2);
    }

    this.setState({result: result})
  };

  selectchange = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    this.setState({ [name]: value });
  }

  render() {
    const { n, result ,w , l, b, h, r} = this.state;


    return (
      <div>
        <div>
          <h1>SBasicOOC</h1>
          <label>
                Select 1 - 3:<select name="n" onChange={this.selectchange}>
                <option value="0">Select below</option>
                <option value="1">1 Square</option>
                <option value="2">2 Triangle</option>
                <option value="3">3 Circle</option>
                </select>
          </label>
          {this.state.n === 1 && (<label>Input W<input type="number" name="w" value={w} onChange={e => this.setState({ w: parseInt(e.target.value) })}/>Input l<input type="number" name="l" value={l} onChange={e => this.setState({ l: parseInt(e.target.value) })}/></label>)}
          {this.state.n === 2 && (<label>Input b<input type="number" name="b" value={b} onChange={e => this.setState({ b: parseInt(e.target.value) })}/>Input h<input type="number" name="h" value={h} onChange={e => this.setState({ h: parseInt(e.target.value) })}/></label>)}
          {this.state.n === 3 && (<label>Input r<input type="number" name="r" value={r} onChange={e => this.setState({ r: parseInt(e.target.value) })}/></label>)}
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

export default Kor22;
