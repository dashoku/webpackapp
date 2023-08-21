import React from "react";
import {Link}  from "react-router-dom";
 
export default function Nav(){
    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button 
                style={{ 
                margin: "10px", 
                padding: "10px 20px", 
                backgroundColor: "lightblue", 
                border: "none", 
                borderRadius: "5px", 
                cursor: "pointer" }}>
            <Link to="/">Home</Link>
            </button>
          
            <button 
                style={{ 
                margin: "10px", 
                padding: "10px 20px", 
                backgroundColor: "lightblue", 
                border: "none", 
                borderRadius: "5px", 
                cursor: "pointer" }}>
            <Link to="/hobbies">Hobbies</Link>
            </button>
          
            <button 
                style={{ 
                margin: "10px", 
                padding: "10px 20px", 
                backgroundColor: "lightblue", 
                border: "none", 
                borderRadius: "5px", 
                cursor: "pointer" }}>
            <Link to="/about">About</Link>
            </button>     

            <button 
                style={{ 
                margin: "10px", 
                padding: "10px 20px", 
                backgroundColor: "lightblue", 
                border: "none", 
                borderRadius: "5px", 
                cursor: "pointer" }}>
            <Link to="/hobbiinfo">Hobbi Info</Link>
            </button> 

        </div>;
}