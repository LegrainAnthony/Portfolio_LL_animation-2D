import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e49393;
    border-radius: 25px;
    text-decoration: none;
    color: black;
    width: 10em;
    height: 3em;
    transition: 0.5s;
    position: relative;
    z-index: 999;
  }

  .button:hover {
    transform: scale(1.5);
  }
`;