import React, { useState } from "react";

function AddMovie({ isOpen, addMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" }); 
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Movie</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Movie</button>
      </div>
    </div>
  );
}

export default AddMovie;