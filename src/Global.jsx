import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  body {
    background: linear-gradient(90deg, rgba(0,0,0,1) 35%, rgba(10,61,37,1) 69%);

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    outline: none;
    font-family: 'Inter', sans-serif;
  }
  button{
    cursor: pointer;
  }
`;

export default Global;
