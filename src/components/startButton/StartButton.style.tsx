import styled from "styled-components";

import startButton from "../../assets/start.png";
import startClicked from "../../assets/startClicked.png";

type ButtonProps = {
  isOpen: boolean;
};

export const Start = styled.button<ButtonProps>`
  height: 35px;
  width: 82px;
  background: ${({ isOpen }) =>
    isOpen
      ? `
     url(${startClicked})
  `
      : `url(${startButton})`};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;
