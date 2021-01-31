import React, { useState } from "react";

function Item(props) {
  const [struck, setStruck] = useState(false);

  function strikeOut() {
    setStruck( prevValue => !prevValue);
    // if false return true and v-v
  }

  return (
    <div style={{textDecoration: (struck ? "line-through" : "none")} }>
      <li
        // onClick={strikeOut}
        onClick={() => {
            props.onClickItem(props.id)
          }
        }
      >
        {props.item}
      </li>
    </div>
  )
}

export default Item;
