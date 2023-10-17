import React, { Component } from "react";

class Kor8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m: 0,
      n: 0,
      x1: 0,
      y1: 0,
      x0: 0,
      y0: 0,
      result: " ",
    };
  }


  calculateSum = () => {
    let { x1, y1, x0, y0, m, n } = this.state;
    let result = this.state;

    if( (x0 >= x1 && x0 <= m) && (y0 >= y1 && y0 <= n)){
      result = "Yes";
    }
    else{
      result = "No";
    }


    this.setState({
      result: result,
    });
  };

  render() {
    const { m,n,x1,y1,x0,y0,result } = this.state;

    return (
      <div>
        <div>
            <h2>Point</h2>
            input x1 <input type="number" name="x1" value={x1} onChange={e => this.setState({ x1: parseInt(e.target.value) })} />
            input y1 <input type="number" name="y1" value={y1} onChange={e => this.setState({ y1: parseInt(e.target.value) })} /><br/>
            input m <input type="number" name="m" value={m} onChange={e => this.setState({ m: parseInt(e.target.value) })} />
            input n <input type="number" name="n" value={n} onChange={e => this.setState({ n: parseInt(e.target.value) })} /><br/>
            input x0 <input type="number" name="x0" value={x0} onChange={e => this.setState({ x0: parseInt(e.target.value) })} />
            input y0 <input type="number" name="y0" value={y0} onChange={e => this.setState({ y0: parseInt(e.target.value) })} />
        </div>
        <br />
        <button onClick={this.calculateSum}>Calculate</button>
        <div>
          <p>Result = {result}</p>
        </div>
      </div>
    );
  }
}

export default Kor8;
