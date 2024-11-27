import styled from "styled-components";
import Pointer from "../../img/pointer.svg"

const InputWrap = styled.div`
  margin-top: 60px;

  input {
    background-color: var(--main-color);
    padding: 16px 40px;
    margin: 0 18px;
    border-radius: 8px;
    color: var(--bg-color);
  }

  p {
    font-size: var(--font-xlz);
    font-family: "Black Han Sans";
  }

  p:first-child {
    margin-bottom: 26px;
  }

  button {
    padding: 18px 48px;
    border-radius: 56px;
    font-size: var(--font-xlz);
    font-family: "Black Han Sans";
    background-color: var(--content-color);
    margin-top: 100px;
    position: relative;
  }

  button::after {
    content: "";
    display: block;
    width: 60px;
    height: 60px;
    position: absolute;
    right: -100px;
    bottom: -16px;
    background: url(${Pointer}) no-repeat 0 0 / 100%;
    cursor: auto;
  }
`

export {InputWrap}