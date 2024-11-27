import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import "./style/font.css"



function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <TitleHeading>10000 Hours Rule</TitleHeading>
      <SubTitleHeading>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</SubTitleHeading>
      <SubscribeParagraph>1만 시간의 법칙은<br/>어떤 분야의 전문가가 되기 위해서는<br/>최소한 1만 시간의 훈련이 필요하다는 법칙이다.</SubscribeParagraph>
    </Wrap>
  );
}
export default App;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 100px 400px 0;
  background-color: var(--bg-color);
`

const TitleHeading = styled.h1`
  margin-top: 50px;
  font-size: 60px;
  font-weight: bold;
  font-family: "Black Han Sans";
  text-align: center;
`

const SubTitleHeading = styled.h2`
  margin-top: 40px;
  font-size: 30px;
  font-family: "Nanum Pen Script";
  color: var(--content-color);
`

const SubscribeParagraph = styled.p`
  margin-top: 40px;
  font-size: 30px;
  font-family: "Black Han Sans";
  line-height: 50px;
  text-align: center;
`