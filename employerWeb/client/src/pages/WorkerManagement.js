import React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { DialogTitle } from "@mui/material";
import Categories from "../components/Categories/Categories";
import WorkerList from "../components/WorkerList/WorkerList";
import WorkerInformation from "../components/WorkerInformation/WorkerInformation";
import TerminationDialog from "../components/WorkerManagement/Dialog/TerminationDialog";
import AwardDialog from "../components/WorkerManagement/Dialog/AwardDialog";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background-color: #f5f8fb;
`;

const ContractDialog = styled.div`
  width: 900px;
  height: 720px;
  padding: 30px;
  border-radius: 15px;
  border: 3px solid #f1f1f1;
  margin: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background-color: #fc7070;
  font-family: "Noto Sans CJK KR";
  font-weight: bold;
  border: 0px;
  color: white;
  font-size: 20px;
  width: 96px;
  height: 48px;
  border-radius: 30px;
  padding-left: 30px;
  padding-right: 30px;
`;

const WorkerManagement = ({
  accounts,
  contract,
  nftcontract,
  name,
  workers,
  wpinfo,
}) => {

  // 근로계약서 다이얼로그 상태
  const [contractOpen, setContractOpen] = useState(false);

  const [workername, setWorkername] = useState();
  const [customworkers, setCustomworkers] = useState();
  const [contractaddress, setContractAddress] = useState();
  const [laborcontract, setLaborcontract] = useState();

  const [userdata, setUserdata] = useState([]);

  // 조회 선택 시 state customeworkers index
  const [selectedWorker, setSelectedWorker] = useState({});
  // 조회 선택 시 state laborcontract index

  const [ready, setReady] = useState(false);
  const [contractready, setContractready] = useState(false);

  useEffect(() => {
    makeCustomWorker();
  }, []);

  useEffect(() => {
    getLaborContract();
  }, [contractaddress]);

  // 근로계약서 조회 버튼 눌렀을 때 호출
  const handleClickContract = (name, address) => {
    setContractOpen(true);
    setWorkername(name);
    setContractAddress(address);
  };

  const [rewardOpen, setRewardOpen] = useState(false);
  // Buttons에서 보상 지급 버튼 눌렀을 때 호출
  const handleClickReward = () => {
    setRewardOpen(true);
  };

  const [terminationOpen, setTerminationOpen] = useState(false);
  // Buttons에서 근로계약 해지 버튼 눌렀을 때 호출
  const handleClickTermination = () => {
    setTerminationOpen(true);
  };

  // 근로자 목록에서 조회 클릭 시
  // TODO 이 페이지가 로드가 완료되면, 0번 인덱스 조회버튼이 눌리도록 할 것
  const onClickEnquiry = (index) => {
    // 선택된 근로자 정보 설정
    setSelectedWorker(customworkers[index]);

    // 근로계약서 정보 가져오기
    setContractAddress(selectedWorker[0]);

    // 유저 데이터 만들기
    getUserData(customworkers[index][0]);
  };

  const handleClose = () => {
    setContractAddress(null);
    setRewardOpen(false);
    setContractOpen(false);
    setContractready(false);
    setTerminationOpen(false);
  };

  // 근로자 데이터 불러오는 메소드
  const makeCustomWorker = async () => {
    let temp = [];
    // if문 -> 근로자가 1명 이상일때
    // else문 -> 근로자가 0명일때 처리
    if (workers.length > 1) {
      await getUserData(workers[0][0]);
    }

    if (workers[0].length != 0) {
      for (let x = 0; x < workers[0].length; x++) {
        temp.push([workers[0][x], decodeURI(workers[1][x])]);
      }
      setCustomworkers(temp);
      setSelectedWorker(temp[0]);
      setContractAddress(temp[0][0]);

      getUserData(temp[0][0]);

      setReady(true);
    } else {
      setSelectedWorker(null);
      setContractAddress(null);
      setReady(null);
    }
  };

  // 근로 계약서 불러오는 메소드
  const getLaborContract = async () => {
    try {
      const response = await contract.methods
        .getLaborContract(wpinfo[0], contractaddress)
        .call({ from: accounts[0] });
      setLaborcontract(response);
      setContractready(true);
    } catch (e) {
      console.log(e);
    }
  };

  // 유저 데이터 만드는 메소드
  const getUserData = async (workeraddress) => {
    let temp = [];
    let lbcontract;

    // 근로계약서 가져오기
    try {
      console.log(wpinfo[0])
      lbcontract = await contract.methods
        .getLaborContract(wpinfo[0], workeraddress)
        .call({ from: accounts[0] });
    } catch (e) {
      console.log(e);
    }

    // 입사일
    let startday = lbcontract[1].substr(0, 10);
    temp.push(startday);

    // 근무일수
    const now = new Date();

    const date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const date2 = new Date(
      parseInt(startday.substr(0, 4)),
      parseInt(startday.substr(5, 6)) - 1,
      parseInt(startday.substr(8, 9))
    );
    const elapsedMSec = date1.getTime() - date2.getTime();
    const elapsedDay = elapsedMSec / 1000 / 60 / 60 / 24;
    temp.push(elapsedDay.toString() + "일");

    // 마지막 근무일
    let caldata;

    try {
      let index = await contract.methods
        .getIndexOfEmployee(wpinfo[0], workeraddress)
        .call({ from: accounts[0] });

      caldata = await contract.methods
        .getAllAttendance(wpinfo[0], index)
        .call({ from: accounts[0] });
    } catch (e) {
      console.log(e);
    }
    temp.push(caldata[0][caldata[0].length - 1]);

    // 지각률
    let checkhour;
    let checkmin;
    let sum = 0;

    if (lbcontract[3][0] == "0") {
      checkhour = lbcontract[3][1];
    } else {
      checkhour = lbcontract[3].substring(0, 2);
    }

    if (lbcontract[3][3] == "0") {
      checkmin = lbcontract[3][4];
    } else {
      checkmin = lbcontract[3].substring(3, 5);
    }

    for (let x = 0; x < caldata[0].length; x++) {
      if (caldata[1][x] != checkhour || caldata[2][x] != checkmin) {
        sum += 1;
      }
    }

    if (isNaN(sum / caldata[0].length) * 100) {
      temp.push("0%");
    } else {
      temp.push(((sum / caldata[0].length) * 100).toString() + "%");
    }
    setUserdata(temp);
  };


  return (
    <Container>
      {/* 근로 계약서 Dialog */}
      {contractaddress != null && (
        <Dialog maxWidth={1280} onClose={handleClose} open={contractOpen}>
          <DialogTitle> {workername} 님 </DialogTitle>
          <CloseButton onClick={handleClose} />
          {!contractready && <p>잠시만 기다려주세요...</p>}
          {contractready && (
            <ContractDialog>
              <h2> 근로 계약 기간 </h2> <p> {laborcontract[1]}</p>
              <h2> 업무 내용 </h2>
              <p> {decodeURI(laborcontract[2])} </p>
              <h2> 소정 근로 시간 </h2>
              <p> {laborcontract[3]} </p>
              <h2> 근무일 </h2>
              <p> {decodeURI(laborcontract[4])} </p>
              <h2> 임금(시급) </h2>
              <p> {laborcontract[5]} </p>
              <h2> 임금지급일 </h2>
              <p> {decodeURI(laborcontract[6])} </p>
              <h2> 기타사항 </h2>
              <p> {decodeURI(laborcontract[7])} </p>
            </ContractDialog>
          )}
        </Dialog>
      )}

      {/* 보상 지급 선택 시 Dialog */}
      <Dialog maxWidth={1280} onClose={handleClose} open={rewardOpen}>
        <DialogTitle> {workername} 님 </DialogTitle>
        <AwardDialog
          accounts={accounts}
          nftcontract={nftcontract}
          selectedWorker={selectedWorker}
          wpinfo={wpinfo}
          onClickClose={handleClose}
        />
      </Dialog>

      {/* 근로계약 해지 시 Dialog */}
      {/* 사용자 이름 전달해야 함 name */}
      {/* 해지 버튼클릭 시 이벤트 전달해야 함 */}
      <Dialog maxWidth={1280} onClose={handleClose} open={terminationOpen}>
        <TerminationDialog
          accounts={accounts}
          contract={contract}
          selectedWorker={selectedWorker}
          wpinfo={wpinfo}
          onClickClose={handleClose}
        />
      </Dialog>

      {/* 좌측 카테고리 */}
      <Categories name={name} wpname={wpinfo[1]} />

      {/* 근로자 목록 */}
      <WorkerList
        ready={ready}
        customworkers={customworkers}
        onClickEnquiry={onClickEnquiry}
      />

      {/* 근로자 정보 */}
      {/* TODO 조회가 클릭된 근로자의 데이터를 삽입해야 함 */}
      {userdata ? (
        <WorkerInformation
          userdata={userdata}
          selectedWorker={selectedWorker}
          handleClickContract={handleClickContract}
          handleClickReward={handleClickReward}
          handleClickTermination={handleClickTermination}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default WorkerManagement;
