import React from 'react'
import { ResultWrap } from './ResultStyle';

export default function Result({data}) {
  const part = data[0];
  const time = data[1];
  const day = Math.floor(10000 / time);
  return (
    <ResultWrap>
      <p>당신은 <span>{part}</span> 전문가가 되기 위해서</p>
      <p>대략 <span>{day}</span> 일 이상 훈련하셔야 합니다! :)</p>
    </ResultWrap>
  );
}
