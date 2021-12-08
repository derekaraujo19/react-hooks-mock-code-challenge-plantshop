import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// DELIV 1:
// house state and useEffect for loading all the plants
// send it down to plant list, and in turn, plant card

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchValue, setSearchValue] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantItems) => setPlants(plantItems));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

    console.log(searchValue)

  const filteredSearch = plants.filter((plant) => plant.name.includes(searchValue));

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant}/>
      <Search setSearchValue={setSearchValue} searchValue={searchValue}/>
      <PlantList plants={searchValue ? filteredSearch : plants} />
    </main>
  );
}

export default PlantPage;
