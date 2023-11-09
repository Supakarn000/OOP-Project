import React, { Component, useState, useEffect } from "react";
import Navbar from "../component/navbar";
import Plot from 'react-plotly.js';
import axios from 'axios';
import '../CSS/kor9.css'

class Kor9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      a: [],
      result: "0 0",
      x1: 0,
      y1: 0,
      data: [{ x: [], y: [], type: 'scatter', mode: 'lines+points' }],
      id: 0,
      error: null,
      allData: [],
      arrayX:[],
      arrayY:[]
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

    const datapoint = { x: this.state.data[0].x.concat(x1), y: this.state.data[0].y.concat(y1) };
    this.setState({ result: `${x1} ${y1}`, data: [datapoint] });
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

  caculateApi = () => {
    const { n, a } = this.state;
    const requestBody = { n, a };

    axios.post("http://localhost:8000/calculate", requestBody, {
      headers: { "Content-Type": "application/json", }
    })
      .then((res) => {
        const { x1, y1 } = res.data;
        const datapoint = { x: this.state.data[0].x.concat(x1), y: this.state.data[0].y.concat(y1) };
        this.setState({ result: `${x1} ${y1}`, data: [datapoint] });
      })
      .catch((error) => {
        alert(error)
      });
  }

  caculateApival = () => {
    axios.get("http://localhost:8000/calculate/value")
      .then((res) => {
        const { x1, y1 } = res.data;
        const datapoint = { x: this.state.data[0].x.concat(x1), y: this.state.data[0].y.concat(y1) };
        this.setState({ result: `${x1} ${y1}`, data: [datapoint] });
      })
      .catch((error) => {
        alert(error)
      });
  }

  caculateApiDB = () => {
    const { id } = this.state;

    axios.get(`http://localhost:8000/calculate/db?id=${id}`)
      .then((res) => {
        const { x1, y1 } = res.data;
        const datapoint = { x: this.state.data[0].x.concat(x1), y: this.state.data[0].y.concat(y1) };
        this.setState({ result: `${x1} ${y1}`, data: [datapoint] });
      })
      .catch((error) => {
        alert(error);
      });
  }

  componentDidMount() {
    this.getdata()
      .then(() => {
        console.log("data = ", this.state.allData);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }

  getdata = () => {
    return axios.get('http://localhost:8000/all')
      .then((res) => {
        this.setState({ allData: res.data });
      })
      .catch((error) => {
        this.setState({ error });
        throw error;
      });
  }

  index2call = () => {
    axios.get('http://localhost:8800/index2cal')
      .then((res) => {
        const { resultX, resultY } = res.data;
        console.log(resultX);
        console.log(resultY);
        const datapoint = { x: this.state.data[0].x.concat(...resultX), y: this.state.data[0].y.concat(...resultY) };
        console.log(datapoint);
        this.setState({ data: [datapoint] });
      })
  }


  render() {
    const { n, result, x1, y1, data, id, allData } = this.state;

    const arrayinput = [];
    for (let i = 0; i < n; i++) {
      arrayinput.push(
        <input key={i} type="number" value={this.state.a[i]} onChange={(e) => this.astate(e, i)} />
      );
    }

    return (
      <div
        style={{ justifyContent: "center", textAlign: "center", backgroundColor: "#f0f0f0", height: "150vh", }}>
        <Navbar />
        <div>
          <h1>Mod Dance</h1>
          <label>
            Enter N:<input type="number" name="n" value={n} onChange={this.nstate} /><br />
            Enter Array: {arrayinput}<br />
            Enter x1:<input type="number" name="x1" value={x1} onChange={(e) => this.setState({ x1: parseInt(e.target.value) })} />
            Enter y1:<input type="number" name="y1" value={y1} onChange={(e) => this.setState({ y1: parseInt(e.target.value) })} />
          </label>
        </div>
        <br />
        <button onClick={this.calculateSum} style={{ padding: "5px", margin: "0.5rem" }}>Calculate Result</button>
        <button onClick={this.caculateApi} style={{ padding: "5px", margin: "0.5rem" }}>Calculate with api</button>
        <button onClick={this.caculateApival} style={{ padding: "5px", margin: "0.5rem" }}>Caculate with api with value</button><br /><br />
        <button onClick={this.index2call}>cal index2</button>
        <div>
          <label style={{ margin: "0.5rem" }}>Choose Question ID</label>
          <input type="number" name="id" value={id} onChange={(e) => this.setState({ id: parseInt(e.target.value) })}></input><br />
          <button onClick={this.caculateApiDB} style={{ padding: "5px", margin: "0.5rem" }}>Caculate with Question ID (api)</button><br />
        </div>
        <div>
          <h2>Plot graph</h2>
          <Plot data={data} layout={{ width: 450, height: 450, title: 'Graph' }} />
        </div>

        <div>
          <h2>Result:</h2>
          <p style={{ fontSize: "30px", background: "#48E5EC" }}>{result}</p>
        </div>

        <div className="datatab">
          <h1>Question list in database</h1>
          <table>
              <tr>
                <th>ID</th>
                <th>N</th>
                <th>A</th>
              </tr>
              {allData.map((item , i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.n}</td>
                  <td>{item.a}</td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    );
  }
}

export default Kor9;
