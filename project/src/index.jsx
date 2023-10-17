import React from "react";
import { Navigate,Link } from "react-router-dom";

const Index = () => {
    return(
        <div>
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
        </div>
    )
}


export default Index;