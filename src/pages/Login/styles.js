import styled from "styled-components";
import { darken } from "polished";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  label span {
    margin: 0;
    padding: 0;
  }

  label input {
    padding: 5px;
    border: 1px solid #eee;
    border-radius: 5px;
  }

  button {
    background: #7159c1;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: all 0.3s;

    &:hover {
      background: ${darken(0.3, "#7159c1")};
      color: ${darken(0.3, "#fff")};
      transition: all 0.3s;
    }
  }
`;
