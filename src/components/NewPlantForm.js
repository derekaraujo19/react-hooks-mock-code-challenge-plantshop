import React, {useState} from "react";

function NewPlantForm({handleAddPlant}) {
  // create state to house form data for new plant - name, image, price
  // create values for name, image and price that onChange get updated
  // onSubmit, call handleAddPlant that packages the data from state into an object that makes a post request AND gets passed up to plantPage to get added to state

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let newPlantData = {
      "name": name,
      "image": image,
      "price": Number(price)
    };
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantData)
    })
    .then((r) => r.json())
    .then((newPlant) => handleAddPlant(newPlant));
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
