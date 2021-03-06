import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import PayrollAdapter from "../components/Payroll/PayrollAdapter";
import Categories from "../components/Categories/Categories";
import WorkerBalance from "../components/Payroll/WorkerBalance";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  background-color: #f5f8fb;
  padding: 48px;

  h1 {
    font-size: 26px;
    font-family: "Noto Sans CJK KR";
  }


  .bottom {
    margin-left: auto;
    margin-top: auto;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 48px;
  }
`;

const Payroll = ({
  web3,
  accounts,
  contract,
  erc20contract,
  tokencontract,
  name,
  workers,
  wpinfo,
}) => {
  const [customworkers, setCustomworkers] = useState();
  const [balance, setBalance] = useState();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    makeCustomWorker();
  }, []);

  // 근로자들의 월급을 게산하는 함수
  const makeCustomWorker = async () => {
    let temp = [];

    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;

    let selectdate = year + "-" + ("0" + month.toString()).slice(-2);

    for (let x = 0; x < workers[0].length; x++) {
      let indexarr = await patternMatching(selectdate, x);

      let startIndex = indexarr[0];
      let endIndex = indexarr[1];

      if (startIndex != -1) {
        try {
          let employeeindex = await contract.methods
            .getIndexOfEmployee(0, workers[0][x])
            .call({ from: accounts[0] });

          let hourwage = await contract.methods
            .getWage(0, employeeindex)
            .call({ from: accounts[0] });
          hourwage = parseInt(hourwage);

          let wage = await contract.methods
            .getPayment(0, employeeindex, startIndex, endIndex, hourwage)
            .call({ from: accounts[0] });

          temp.push([workers[0][x], decodeURI(workers[1][x]), wage]);
        } catch (e) {
          console.log(e);
        }
      } else {
        temp.push([workers[0][x], decodeURI(workers[1][x]), 0]);
      }
    }
    await getBalnce();
    setCustomworkers(temp);
    setReady(true);
  };

  // 토큰의 잔고를 조회하는 함수
  const getBalnce = async () => {
    try {
      const response = await erc20contract.methods
        .balanceOf(accounts[0])
        .call({ from: accounts[0] });
      setBalance(response);
    } catch (e) {
      console.log(e);
    }
  };

  // 패턴 매칭하는 함수 -> 현재 달의 출석을 찾음
  const patternMatching = async (selectdate, index) => {
    let data;
    try {
      data = await contract.methods
        .getAllAttendance(wpinfo[0], index)
        .call({ from: accounts[0] });
    } catch (e) {
      console.log(e);
    }

    let stflag = 0,
      edflag = 0;
    let startIndex = -1,
      endIndex = -1;

    for (let x = 0; x < data[3].length; x++) {
      if (data[3][x].search(selectdate) != -1) {
        if (stflag == 0) {
          startIndex = x;
          stflag = 1;
        }
      } else {
        if (stflag == 0) continue;
        else {
          endIndex = x - 1;
          edflag = 1;
          break;
        }
      }
    }

    if (startIndex != -1 && edflag == 0) endIndex = data[3].length - 1;
    return [startIndex, endIndex];
  };

  // 월급을 지급하는 함수
  const payWage = async (name, totalwage, address) => {
    if (
      window.confirm(
        `${name}님의 Address ${address}로 \n${totalwage}원을 보냅니다. 보내시겠습니까?`
      )
    ) {
      try {
        const response = await erc20contract.methods
          .transfer(address, totalwage)
          .send({ from: accounts[0] });
        alert(
          `트랜잭션 전송을 성공했습니다.\ntxhash: ${response["transactionHash"]}`
        );
      } catch (e) {
        console.log(e);
        alert("트랜잭션 전송을 거절하거나 실패했습니다.");
      }
    }
  };

  // 토큰 교환 함수
  const onExchangeButtonClick = async (inputBalance, setInputBalance) => {
    await tokencontract.methods
        .buy()
        .send({ from: accounts[0], value:  web3.utils.toWei(String(inputBalance / 1000000), 'ether') });

    setInputBalance(0);
  };

  return (
    <Container>
      <Categories name={name} wpname={wpinfo[1]} />
      <Content>
        {!ready && <h2>잠시만 기다려주세요...</h2>}
        {ready && (
          <>
            <div>
              <WorkerBalance
                name={name}
                accounts={accounts[0]}
                balance={balance}
                onExchangeButtonClick={onExchangeButtonClick}
              />
              <PayrollAdapter workers={customworkers} payWage={payWage} />
            </div>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Payroll;
