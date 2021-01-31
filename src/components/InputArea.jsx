import React, {useState} from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  // when the input changes the text there should update dynamically
  function updateInputText(event) {
    const newValue = event.target.value;
    setInputText(newValue);
    // this sets the inputText = newValue
  }

  return (
    <div className="form">
      <input
        onChange={updateInputText}
        type="text"
        value={inputText}
      />
      <button
        onClick={ () => {
            props.onAddItem(inputText);
            setInputText("");
          }
        }
      >
        <span>Add</span>
      </button>
    </div>

  )
}

export default InputArea;
