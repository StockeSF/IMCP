import React from "react";

function Button({ children, button_options }) {
  return (
    <button className={`link-btn ${button_options.classTitle}`}>
      {children}
    </button>
  );
}

export default Button;