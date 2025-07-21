import styled, { css } from "styled-components";

const buttonStyles = css`
  border: solid 3px #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    color: #ff0000;
    background: #ffffff;
  }
`;

export const ButtonWithe = styled.button`
  ${buttonStyles}
`;

export const ButtonRed = styled.button`
  ${buttonStyles}

  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgba(255, 0, 0, 0.3);

  &:hover {
    box-shadow: 0px 0px 7px 15px rgba(255, 0, 0, 0.3);
    color: #ffffff;
    background: #ff0000;
  }
`;
