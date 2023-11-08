import React from "react";
import { Navigate, Link } from "react-router-dom";
import "../CSS/start.css";
import './App.css';
import image from "./image/300.png";
import eta from "./image/ETA.png";
import etadisc from './image/eta_disc.png'
import Lottie from 'lottie-react';
import hi from './image/animation_lokbdp7i.json';
import Navbar from "../component/navbar";

const Main = () => {
    return (
        <div style={{ backgroundColor: "#f0f0f0", height: "150vh" }}>
            <Navbar />
            <div className="image-container" >
                <Lottie animationData={hi} className="center-animation" />
                <h1>Welcome Kub r jarn</h1>
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
                    <Link to="/kor10">
                            <button>ข้อ 10</button>
                        </Link>
                    <Link to="/kor11">
                        <button>ข้อ 11</button>
                    </Link>
                </div><br />

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
                    </div><br />

                    <div className="container">
                        <div className="btn">
                            <Link to="/kor30">
                                <button>ข้อ 30</button>
                            </Link>
                            <Link to="/kor31">
                                <button>ข้อ 31</button>
                            </Link>
                            <Link to="/kor32">
                                <button>ข้อ 32</button>
                            </Link>
                            <Link to="/kor33">
                                <button>ข้อ 33</button>
                            </Link>
                            <Link to="/kor34">
                                <button>ข้อ 34</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



            <footer className="container">
                <div style={{ textAlign: "center" }}>
                    {/* <img src={eta} alt="image" className="rotate-animation" style={{ maxWidth: "20%" }} /> */}
                    <img src={etadisc} alt="image" className="rotate-animation" style={{ maxWidth: "20%",padding:"2rem" }} />
                    <img src={etadisc} alt="image" className="rotate-animation" style={{ maxWidth: "20%" ,padding:"2rem" }} />
                </div>
                {/* <img src={image} alt="image" className="rotate-animation"/> */}
            </footer>
        </div>
    )
}


export default Main;