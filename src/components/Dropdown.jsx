import React, {useState} from 'react'

const Dropdown = (props) => {
  const [display, setDisplay] = useState("none");

  function handleClick() {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }

  return (
    <div>
      Hello World
      <div style={{ display: display }}>{props.children}</div>
    </div>
  );
};

export default Dropdown
