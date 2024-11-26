import React from 'react';
import { TimeWrap, DateContainer, TimeContainer } from './TimeStyle';

export default function Time() {

  return (
    <TimeWrap>
      <DateContainer>
          <div>
            <h2>2024.</h2>
            <h2>11.</h2>
            <h2>26</h2>
          </div>
      </DateContainer>

      <TimeContainer>
        <div>
          <h2>12 : </h2>
          <h2>12 : </h2>
          <h2>00</h2>
        </div>
      </TimeContainer>
    </TimeWrap>
  );
}
