import styled from "styled-components";

import { FcIcons8Cup, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
  background-color: #ffffffa4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px #e2e2e273;
  min-height: 30vh;
  min-width: 32vw;
  border-radius: 5px;
  padding: 15px 10px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20.5rem;
    height: 100%;
    padding: 0;
    gap: 1rem;
  }
  h3 {
    color: green;
  }
`;
export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  input {
    height: 2rem;
    width: 15rem;
    padding: 2px;
    border-radius: 5px;
    border: 2px solid green;
    outline: none;
    font-size: 1rem;
    color: black;
  }
`;

export const Button = styled.button`
  height: 2.4rem;
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: #3bc33b73;
  color: white;

  &:hover {
    box-shadow: 2px 2px 10px #3ac83a73;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  width: 97%;
  background: ${(props) => (props.isFinished ? "#E3EB8C" : "#0000006e")};
  margin: auto;
  height: 2rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
  justify-content: space-between;
`;

export const Delete = styled(FcIcons8Cup)`
  font-size: 1.3rem;
  cursor: pointer;
`;
export const Completed = styled(FcCheckmark)`
  font-size: 1.3rem;
  cursor: pointer;
`;
