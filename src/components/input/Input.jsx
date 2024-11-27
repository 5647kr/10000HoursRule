import React, { useState } from 'react';
import { InputWrap } from './InputStyle';

export default function Input({setData}) {
  const [part, setPart] = useState("");
  const [time, setTime] = useState("");
  
  const handlePart = (e) => {
    setPart(e.target.value)
  }

  const handleTime = (e) => {
    setTime(e.target.value)
  }

  const clickBtn = () => {
    setData(() => [part, time]);
  };

  return (
    <InputWrap>
      <p>
        나는
        <label className='a11y-hidden'>훈련 분야</label>
        <input
          type="text"
          placeholder='예)프로그래밍'
          onChange={handlePart}
        />
        전문가가 될 것이다.
      </p>

      <p>
        그래서 앞으로 매일 하루에
        <label className='a11y-hidden'>훈련 시간</label>
        <input
          type="text"
          placeholder='예)5시간'
          onChange={handleTime}
        />
        시간씩 훈련할 것이다.
      </p>

      <button type='button' onClick={clickBtn}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
    </InputWrap>
  );
}
