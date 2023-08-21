import React, { useState, useEffect } from "react";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://th.bing.com/th/id/OIP.6pkpwv75oWap1m7NFnwBHAHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    "https://th.bing.com/th/id/OIP.L90TipJ-V23AlXw5KpmX4QHaE8?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.C-DNDeICYA29SYdzbKTARwHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    "https://th.bing.com/th/id/OIP.XgZ0cg4aMCy7MihE06OzOwHaEZ?w=260&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    "https://th.bing.com/th/id/R.421466a2ac276234fc0a53d8e144cc77?rik=hFyo52m2exI8ZQ&pid=ImgRaw&r=0",
    "https://moysadiogorod.ru/wp-content/uploads/2020/10/571q.jpg"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
        width: "50%",
        background: "#f7f7f7",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.3)",
        borderRadius: "10px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontFamily: "Arial, sans-serif", fontSize: "24px" }}>
        Home Page
      </h2>
      <img
       

       src={images[currentImageIndex]}
       alt="random image"
       style={{ width: "auto", height: "300px", marginBottom: "20px", borderRadius:"10px"}}
       />
       <p>
       Welcome to my website! 
       This is the home page. 
       </p>
       </div>
       );
       };
       
       export default Home;