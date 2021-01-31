import React, {useState} from "react";
import Item from "./Item.jsx";
import InputArea from "./InputArea.jsx";

function App() {
  // initialise inputText to blank and a fn ref to set its state
  // must import useState above
  // const [inputText, setInputText] = useState(""); // moved to InputArea.jsx

  // declare an empty array to hold items and a fn to set it
  const [items, setItems] = useState([]);

  // when the input changes the text there should update dynamically
  // function updateInputText(event) {
  //   const newValue = event.target.value;
  //   setInputText(newValue);
  //   // this sets the inputText = newValue
  // }

  // when "Add" button pressed
  function addItem(inputText) {
    setItems( items => [...items, inputText]);
    // appends current inputText when button is pressed to items array
    //setInputText(""); // clears input for more text to be entered
  }

  // functional programming (5 nested fns) to remove item when clicked
  function removeItem(id) {
    console.log("Item clicked with id: ", id);
    setItems( prevItems => {
      return prevItems.filter( (item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea
        onAddItem={addItem}
      />

      <div> {/* open list */}
        <ul>
          {/* for each item in items it displays it in li s using an anon arrow fn */}
          { items.map( (item, index) => (
              <Item
                key={index}
                id={index}
                item={item}
                onClickItem={removeItem}
              /> )
            )
          }

          {/*  <li>A Item </li> */}
        </ul>
      </div> {/* close list */}
    </div>
  );
}

export default App;
