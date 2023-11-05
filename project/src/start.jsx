import React from "react";
import { Navigate, Link } from "react-router-dom";
import "../CSS/start.css";
import image from "./image/300.png";
import Lottie from 'lottie-react';
import hi from './image/animation_lokbdp7i.json';

const Main = () => {
    return (
        <div style={{ backgroundColor: "#f0f0f0", height: "100vh" }}>
            <div className="image-container" >
                {/* <img src={image} alt="image" /> */}
                <Lottie animationData={hi} className="centered-animation" />
                <h1>Choose Jode SI</h1>
            </div>
            <div className="container">
                <div className="btn">
                    <Link to="/kor1">
                        <button>ข้อ 1</button>
                    </Link>
                    <Link to="/kor2">
                        <button>ข้อ 2</button>
                    </Link>
                    <Link to="/kor3">
                        <button>ข้อ 3</button>
                    </Link>
                    <Link to="/kor4">
                        <button>ข้อ 4</button>
                    </Link>
                    <Link to="/kor5">
                        <button>ข้อ 5</button>
                    </Link>
                    <Link to="/kor6">
                        <button>ข้อ 6</button>
                    </Link>
                    <Link to="/kor7">
                        <button>ข้อ 7</button>
                    </Link>
                    <Link to="/kor8">
                        <button>ข้อ 8</button>
                    </Link>
                    <Link to="/kor9">
                        <button>ข้อ 9</button>
                    </Link>
                    <Link to="/kor11">
                        <button>ข้อ 11</button>
                    </Link>
                </div><br/>

                <div className="container">
                    <div className="btn">
                        <Link to="/kor15">
                            <button>ข้อ 15</button>
                        </Link>
                        <Link to="/kor16">
                            <button>ข้อ 16</button>
                        </Link>
                        <Link to="/kor22">
                            <button>ข้อ 22</button>
                        </Link>
                        <Link to="/kor23">
                            <button>ข้อ 23</button>
                        </Link>
                        <Link to="/kor24">
                            <button>ข้อ 24</button>
                        </Link>
                        <Link to="/kor25">
                            <button>ข้อ 25</button>
                        </Link>
                        <Link to="/kor26">
                            <button>ข้อ 26</button>
                        </Link>
                        <Link to="/kor27">
                            <button>ข้อ 27</button>
                        </Link>
                        <Link to="/#">
                            <button>ข้อ #</button>
                        </Link>
                        <Link to="/#">
                            <button>ข้อ #</button>
                        </Link>
                    </div>
                </div>
            </div>



            <footer className="container">
                
            </footer>
        </div>
    )
}


export default Main;