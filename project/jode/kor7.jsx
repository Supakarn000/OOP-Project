import React, { Component } from "react";

class Kor7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d: 0,
      y: 0,
      m: 0,
      day: 0,
      result: " ",
    };
  }


  calculateSum = () => {
    let { d, y, m, day } = this.state;
    let year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const checkLeap = (x) => {
      if (x % 4 === 0) {
        return true;
      } else {
        return false;
      }
    };

    // Start the calculation
    for (let i = 0; i < day; i++) {
      if (checkLeap(y - 43)) {
        year[1] = 29;
      }

      if (d === year[m - 1]) {
        d = 1;
        m = m + 1;
      } else if (m === 12) {
        d = 1;
        m = 1;
        y = y + 1;
      } else {
        d = d + 1;
      }
    }

    const result = `${d}-${m}-${y}`;

    this.setState({
      result: result,
    });
  };

  render() {
    const { d,y,m,day,result } = this.state;

    return (
      <div style={{justifyContent:"center",textAlign:"center",backgroundColor: "#f0f0f0", height: "100vh"}}>
        <div>
            <h2>What Day</h2>
            input day <input type="number" name="d" value={d} onChange={e => this.setState({ d: parseInt(e.target.value) })} />
            month <input type="number" name="m" value={m} onChange={e => this.setState({ m: parseInt(e.target.value) })} />
            year <input type="number" name="y" value={y} onChange={e => this.setState({ y: parseInt(e.target.value) })} />
            <br/>
            future in <input type="number" name="day" value={day} onChange={e => this.setState({ day: parseInt(e.target.value) })} /> day
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

export default Kor7;
