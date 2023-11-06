import React, { Component } from 'react';

class Kor10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 1,
      minute: 0,
      result: '',
    };
  }

  caculatesum = () => {
    const { hour, minute } = this.state;

    if (hour < 1 || hour > 12 || minute < 0 || minute > 59) {
      this.setState({ result: "invalid" });
      return;
    }

    const position = (hour * 5) + Math.floor(minute / 12);
    this.setState({ result: "เข็มชี้ไปที่ "+ position });
  };

  hourstate = (e) => {
    this.setState({ hour: parseInt(e.target.value) });
  };

  minutestate = (e) => {
    this.setState({ minute: parseInt(e.target.value) });
  };

  render() {
    return (
      <div className="App">
        <div style={{ justifyContent: "center", textAlign: "center", backgroundColor: "#f0f0f0", height: "100vh" }}>
        <h1>What time?</h1>
          <label>enter the hour (1-12): </label>
          <input type="number" min="1" max="12" value={this.state.hour} onChange={this.hourstate} /><br/>
          <label>enter the minute (0-59): </label>
          <input type="number" min="0" max="59" value={this.state.minute} onChange={this.minutestate} />
        <button onClick={this.caculatesum}>Calculate</button>
        <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default Kor10;
