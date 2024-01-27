import React, { useState } from "react";

import { Start } from "./StartButton.style";

const StartButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Start
      isOpen={isOpen}
      onMouseDown={() => {
        setIsOpen(!isOpen);
      }}
    />
  );
};

export default StartButton;
