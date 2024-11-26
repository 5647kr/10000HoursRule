import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #050303;
    --main-color: #F3F2EF;
    --content-color: #F8BA4D;
    --sub-color: #524845;
    --font-sz: 12px;
    --font-smz: 14px;
    --font-mz: 16px;
    --font-lz: 18px;
    --font-xlz: 20px;
  }

  body {
    color: var(--main-color);
  }

  *{
    box-sizing: border-box;
  }

	a{
		text-decoration: none;
		color: inherit;
	}

	html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
	a, dl, dt, dd, ol, ul, li, form, label, table, input,button{
		margin: 0;
		padding: 0;
		border: 0;
    box-sizing: border-box;
		vertical-align: baseline;
    text-align: center;
	}

	ol, ul{
		list-style: none;
	}
	
  input {
    all: unset;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`

export default GlobalStyle;