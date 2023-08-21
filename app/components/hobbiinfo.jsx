import React, { useState } from "react";

const HobbyInfo = () => {
  const [hobby, setHobby] = useState({
    name: "Hiking",
    description:
      "Hiking is a recreational activity that involves walking or trekking on trails or paths in natural environments, often in mountainous or hilly terrain.",
    image: "https://th.bing.com/th/id/OIP.6pkpwv75oWap1m7NFnwBHAHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
  });

  const handleNameChange = (e) => {
    setHobby({ ...hobby, name: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setHobby({ ...hobby, description: e.target.value });
  };

  const handleImageChange = (e) => {
    setHobby({ ...hobby, image: e.target.value });
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        width: "50%",
        background: "#f7f7f7",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.3)",
        borderRadius: "10px",
        margin: "0 auto",
        padding:"20px",
      }}
    >
      <h2>Edit Hobby Information</h2>
      <form
        style={{
          marginBottom: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          width: "50%",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={hobby.name}
            onChange={handleNameChange}
            style={{
              marginLeft: "10px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={hobby.description}
            onChange={handleDescriptionChange}
            style={{
              marginLeft: "10px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={hobby.image}
            onChange={handleImageChange}
            style={{
              marginLeft: "10px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "lightblue",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          Save Changes
        </button>
      </form>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          width: "50%",
          }}
          >
          <h3>{hobby.name}</h3>
          <img src={hobby.image} alt={hobby.name} style={{ maxWidth: "100%" }} />
          <p>{hobby.description}</p>
      </div>
      </div>
    );
  };
          
export default HobbyInfo;
