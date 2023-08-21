import React, { useState } from "react";

const About = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ 
      fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "500px  ",
        width: "50%",
        background: "#f7f7f7",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.3)",
        borderRadius: "10px",
        margin: "0 auto",
      }}>
      <h2>About Page</h2>
      <form onSubmit={handleSubmit} style={{ 
        marginBottom: "20px", 
        backgroundColor: "white", 
        borderRadius: "10px", padding: "20px", 
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", 
        width: "50%" 
        }}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            style={{ marginLeft: "10px", padding: "5px", borderRadius: "5px", border: "1px solid gray" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            style={{ marginLeft: "10px", padding: "5px", borderRadius: "5px", border: "1px solid gray" }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: "lightblue", border: "none", borderRadius: "5px", padding: "5px 10px", cursor: "pointer" }}>Submit</button>
      </form>
      <table style={{ borderCollapse: "collapse", width: "20%" }}>
        <thead>
          <tr style={{ backgroundColor: "lightgray" }}>
            <th style={{ padding: "10px" }}>Name</th>
            <th style={{ padding: "10px" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid gray" }}>John Doe</td>
            <td style={{ padding: "10px", border: "1px solid gray" }}>john.doe@example.com</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid gray" }}>Jane Smith</td>
            <td style={{ padding: "10px", border: "1px solid gray" }}>jane.smith@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
