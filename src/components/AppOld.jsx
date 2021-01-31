import React, { useState } from "react";

function App() {

  const [ itemText, setItemText ] = useState("");
  const [ items, setItems ] = useState([]);
  console.log(items);

  function updateItem(event) {
    const newValue = event.target.value;
    setItemText(newValue);

  }

  function addItem(){
    setItems(prevItemillelicals => {
      return [...prevItemillelicals, itemText];
    })
    setItemText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={updateItem}
          type="text"
          placeholder="Type Here"
          name="newItem"
          value={itemText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
