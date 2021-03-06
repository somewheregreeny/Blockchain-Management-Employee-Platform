import React, { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: row;

  padding: 12px 24px 12px 24px;

  width: 100%;
  height: auto;

  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  background-color: #f7f7f7;

  margin-bottom: 50px;

  > div {
    width: 100%;
    padding: 0.5%;
    overflow-x: hidden;
    /* overflow-x: scroll; */
    > h2 {
      font-size: 26px;
      font-weight: bold;
      margin: 0px;
    }

    > div {
      margin-top: 12px;
      > div {
        display: flex;
        > p {
          font-size: 16px;
          color: #999999;
          font-weight: bold;
          margin: 0px;
          width: 84px;
        }
      }
    }
  }
`;

const StyledTokenExchangeDiv = styled.div`
  padding: 0.5%;
`;

const StyledTokenInput = styled.input`
  width: auto;
  height: auto;
  padding: 10px;
  margin-right: 1rem;
  font-size: 16px;
  border: 0px;
  background-color: #f1f1f1;
  color: #999999;
  font-family: "Noto Sans CJK KR";
  font-weight: bold;
  border-radius: 40px;
`;

const StyledButton = styled.button`
  background-color: #7970fc;
  font-family: "Noto Sans CJK KR";
  font-weight: bold;
  border: 0px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  border-radius: 30px;
  /* padding-left: 30px;
  padding-right: 30px; */
  padding: 5px 30px 5px 30px;

  :hover {
    background-color: #2669a4cc;
  }
`;

const WorkerBalance = ({ name, accounts, balance, onExchangeButtonClick }) => {
  const [inputBalance, setInputBalance] = useState();

  return (
    <Content>
      <div className="div1">
        <h2>나의 계정 정보</h2>
        <div>
          <div>
            <p>이름:</p>
            <p>{name}</p>
          </div>
          <div>
            <p>주소:</p>
            <p>{accounts}</p>
          </div>
        </div>
      </div>
      <div className="div2">
        <h2>계정 잔액</h2>
        <h1>{balance} 원</h1>
      </div>
      <StyledTokenExchangeDiv className="div1">
        <h2>토큰 교환</h2>
        <div>
          <StyledTokenInput
            type="number"
            placeholder="금액을 입력해주세요"
            value={inputBalance}
            onChange={(e) => {
              setInputBalance(e.target.value);
            }}
          />
          <StyledButton
            onClick={() => {
              onExchangeButtonClick(inputBalance, setInputBalance);
            }}
          >
            교환
          </StyledButton>
        </div>
      </StyledTokenExchangeDiv>
    </Content>
  );
};

export default WorkerBalance;
