import React, { Component } from "react";
import Navbar from "../component/navbar";
class Square extends Component{
    constructor(props){
        super(props);
        this.state = {
            w: 0,
            l: 0,
        }
    }

    calculateSum = () =>{
        return this.state.w * this.state.l
    }

    render(){
        return(
            <div>
                <label>
                    Input w<input type="number" name="w"  onChange={(e) => this.setState({ w: parseInt(e.target.value) })}/>
                    Input l<input type="number" name="l"  onChange={(e) => this.setState({ l: parseInt(e.target.value) })}/>
                </label>
                <p>Result = {this.calculateSum()}</p>
            </div>
        );
    }
}

class Triangle extends Component{
    constructor(props){
        super(props);
        this.state = {
            b: 0,
            h: 0
        }
    }
    calculateSum = () =>{
        return (this.state.b * this.state.h)/2
    }

    render(){
        return(
            <div>
                <label>
                    Input b<input type="number" name="b"  onChange={(e) => this.setState({ b: parseInt(e.target.value) })}/>
                    Input h<input type="number" name="h"  onChange={(e) => this.setState({ h: parseInt(e.target.value) })}/>
                </label>
                <p>Result = {this.calculateSum()}</p>
            </div>
        )
    }
}

class Circle extends Component{
    constructor(props){
        super(props);
        this.state = {
            r: 0
        }
    }
    calculateSum = () =>{
        return Math.PI * Math.pow(this.state.r, 2);
    }
    render(){
        return(
            <div>
                <label>
                    Input r<input type="number" name="r"  onChange={(e) => this.setState({ r: parseFloat(e.target.value) })}/>
                </label>
                <p>Result = {this.calculateSum()}</p>
            </div>
        )
    }
}


//////////////////////////////////////////
class Kor24 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        select: 0
    };
  }

  render() {
    return (
        <div style={{justifyContent:"center",textAlign:"center",backgroundColor: "#f0f0f0", height: "100vh"}}>
            <Navbar />
        <h1>SBasicOOPWCon</h1>
        <label>select 1-3</label>
        <select onChange={(e) => this.setState({ select: parseInt(e.target.value) })}>
          <option value="0">select below</option>
          <option value="1">1 Square</option>
          <option value="2">2 Triangle</option>
          <option value="3">3 Circle</option>
        </select>
        {this.state.select === 1 && <Square/>}
        {this.state.select === 2 && <Triangle/>}
        {this.state.select === 3 && <Circle/>}
      </div>
    );
  }
}

export default Kor24;
