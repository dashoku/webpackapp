import React, { useState } from "react";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([    {      id: 1,      name: "Hiking",      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",    },    {      id: 2,      name: "Cooking",      description:        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",    },    {      id: 3,      name: "Photography",      description:        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",    },  ]);

  const handleDelete = (id) => {
    const updatedHobbies = hobbies.filter((hobby) => hobby.id !== id);
    setHobbies(updatedHobbies);
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
        height: "700px",
        width: "50%",
        background: "#f7f7f7",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.3)",
        borderRadius: "10px",
        margin: "0 auto",
      }}
    >
      <h2>Hobbies Page</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>
            <h3>{hobby.name}</h3>
            <p>{hobby.description}</p>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                marginRight: "10px",
                fontWeight: "bold",
              }}
              onClick={() => handleDelete(hobby.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          marginTop: "20px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const newHobby = {
            id: hobbies.length + 1,
            name: e.target.elements.hobbyName.value,
            description: e.target.elements.hobbyDescription.value,
          };
          setHobbies([...hobbies, newHobby]);
          e.target.reset();
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="hobbyName">Name:</label>
          <input type="text" id="hobbyName" name="hobbyName" required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="hobbyDescription">Description:</label>
          <textarea
            id="hobbyDescription"
            name="hobbyDescription"
            rows="3"
            required
          ></textarea>
        </div>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
          }}
          type="submit"
          onMouseOver={(e) =>
            {
              e.target.style.backgroundColor = "darkblue";
              }}
              onMouseOut={(e) => {
              e.target.style.backgroundColor = "blue";
              }}
              >
              Add Hobby
        </button>
      </form>
    </div>
  );
};

export default Hobbies;