import React, { Component } from "react";

class Kor9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      a: [],
      result: 0,
    };
  }

  calculateSum = () => {

    

    this.setState({
      result: result,
    });
  };


  render() {
    const { n, result } = this.state;

    return (
      <div>
        <div>
          <h1>Mod Dance</h1>
          <label>
            Enter N:<input type="number" name="n" value={n} onChange={e => this.setState({ n: parseInt(e.target.value) })}/> <br/>
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
