import React, { Component } from "react";

const axios = require("axios");

class Test extends Component {
  /*
  let accountInterval = setInterval(function() {
        // 계정이 바뀌었는지 확인
        if (web3.eth.accounts[0] !== accounts) {
          accounts = web3.eth.accounts[0];
          // 새 계정에 대한 UI로 업데이트하기 위한 함수 호출
          location.reload();
        }
      }, 100);
  */

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  // 근로자 정보 업로드
  uploadPersonalInfo0 = async () => {
    const { accounts, contract } = this.props;
    await contract.methods
      .uploadPersonalInfo(
        accounts[0],
        0,
        encodeURI("이영희"),
        24,
        encodeURI("여")
      )
      .send({ from: accounts[0] });
    console.log("uploadPersonalInfo0 complete");
  };

  // 사업주 정보 업로드
  uploadPersonalInfo1 = async () => {
    const { accounts, contract } = this.props;
    await contract.methods
      .uploadPersonalInfo(
        accounts[0],
        1,
        encodeURI("이철수"),
        50,
        encodeURI("남")
      )
      .send({ from: accounts[0] });
    console.log("uploadPersonalInfo1 complete");
  };

  // 사람의 개인정보 보기
  getPersonInformation = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getPersonInformation(accounts[0])
      .call({ from: accounts[0] });
    console.log(response);
    console.log(decodeURI(response[1]));
    console.log(decodeURI(response[3]));
  };

  // 사업장 등록
  uploadWorkplace = async () => {
    const { accounts, contract } = this.props;
    await contract.methods
      .uploadWorkplace(
        accounts[0],
        encodeURI("올리브영 시화점"),
        encodeURI("경기도 시흥시 정왕동 1737-16")
      )
      .send({ from: accounts[0] });
    console.log("uploadWorkplace complete");
  };

  // 사업장 조회
  getWorkplaces = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getWorkplaces()
      .call({ from: accounts[0] });
    console.log(response);
  };

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  // 근로계약서 업로드
  uploadLaborContract = async () => {
    const { accounts, contract } = this.props;
    let items = [
      "2022/05/01-2022/09/30",
      encodeURI("진열"),
      "14:00-20:00",
      encodeURI("화금"),
      "11000",
      encodeURI("매월 10일"),
      encodeURI("x"),
    ];
    await contract.methods
      .uploadLaborContract(items, "2022-05-01", accounts[0], 0)
      .send({ from: accounts[0] });

    console.log("uploadLaborContract complete");
  };

  // 근로자가 근로계약서 조회
  getLaborContract0 = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getLaborContract(0, accounts[0])
      .call({ from: accounts[0] });
    console.log(response);
  };

  // 사업주가 근로계약서 조회
  getLaborContract1 = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getLaborContract(0, "0x73fA89eDbc136AA1eC77a729D3409c760F631dcf")
      .call({ from: accounts[0] });
    console.log(response);
  };

  // 근로자의 모든 근로계약서 index 조회
  getAllLaborContract = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getAllLaborContract(accounts[0])
      .call({ from: accounts[0] });
    console.log(response);
  };

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  // 0 -> 출근 / 1 -> 퇴근
  // 출퇴근 업로드 : 출근
  uploadAttendance0 = async () => {
    const { accounts, contract } = this.props;
    await contract.methods
      .uploadAttendance(0, 0, "2022-07-07", 12, 0)
      .send({ from: accounts[0] });
    console.log("uploadAttendance0 complete");
  };

  // 출퇴근 업로드 : 퇴근
  uploadAttendance1 = async () => {
    const { accounts, contract } = this.props;
    await contract.methods
      .uploadAttendance(1, 0, "2022-07-07", 20, 0)
      .send({ from: accounts[0] });
    console.log("uploadAttendance1 complete");
  };

  // 출근, 퇴근 날짜 조회
  getCalAttendance = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getCalAttendance(0, 0)
      .call({ from: accounts[0] });
    console.log(response);
  };

  // 출석부 모두 조회
  getAllAttendance = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getAllAttendance(0, 1)
      .call({ from: accounts[0] });
    console.log(response);
  };

  deleteEmployee = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .deleteEmployee(
        0,
        "0xbE0A2A3894033297F92D632046D98FE5e80cB3fB",
        "2022-04-05"
      )
      .send({ from: accounts[0] });
    console.log(response);
  };

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  // 급여 정산
  getPayment = async () => {
    const { accounts, contract } = this.props;
    let wage = await contract.methods.getWage(0, 1).call({ from: accounts[0] });
    wage = parseInt(wage);

    const response = await contract.methods
      .getPayment(0, 1, 0, 2, wage)
      .call({ from: accounts[0] });
    console.log(response);
  };

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  // 사업주의 사업장 근로자 정보 목록 조회
  getEmployeeInfo = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getEmployeeInfo(0)
      .call({ from: accounts[0] });
    console.log(response);
  };

  // 사업주의 사업장의 근로자 수 조회
  getNumOfEmployee = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getNumOfEmployee(0)
      .call({ from: accounts[0] });
    console.log(response);
  };

  // 근로자의 근무지에서의 index 조회
  getIndexOfEmployee = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getIndexOfEmployee(0, accounts[0])
      .call({ from: accounts[0] });
    console.log(response);
  };

  // 근로자의 근무 시간 조회
  getWorkTime = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getWorkTime(0, 1, 0, 2)
      .call({ from: accounts[0] });
    console.log(response);
  };

  // 근로자의 근무 시간 조회
  getWage = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getWage(0, 1)
      .call({ from: accounts[0] });
    console.log(response);
  };

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  // 토큰 잔고
  balanceOf = async () => {
    const { accounts, erc20contract } = this.props;
    const response = await erc20contract.methods
      .balanceOf(accounts[0])
      .call({ from: accounts[0] });
    console.log(response);
  };

  // 토큰 전송
  transfer = async () => {
    const { accounts, erc20contract } = this.props;
    await erc20contract.methods
      .transfer("0x8F22cbB2Fe066d8671c9C09bfF005F0507e1627e", 1000000)
      .send({ from: accounts[0] });
    console.log("transfer complete");
  };

  // 이더 -> 토큰 구매
  buy = async () => {
    const { web3, accounts, tokencontract } = this.props;
    await tokencontract.methods.buy().send({ from: accounts[0], value:  web3.utils.toWei('2', 'ether') });
    console.log("buy compleate");
  };

  // 토큰 -> 이더 판매
  sell = async () => {
    const { accounts, tokencontract } = this.props;
    await tokencontract.methods.sell(1000000).send({ from: accounts[0] });
    console.log("sell compleate");
  };

  // erc20 주소 알아내기
  geterc20address = async () => {
    const { accounts, tokencontract } = this.props;
    const response = await tokencontract.methods.geterc20address().call({ from: accounts[0] });
    console.log(response);
  };

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  // nft 생성
  nft_mint = async () => {
    const { accounts, nftcontract } = this.props;
    await nftcontract.methods
      .mintNFT("0xbE0A2A3894033297F92D632046D98FE5e80cB3fB", "naver.com")
      .send({ from: accounts[0] });
    console.log("nft_mint complete");
  };

  // nft 잔고
  nft_balanceOf = async () => {
    const { accounts, nftcontract } = this.props;
    const response = await nftcontract.methods
      .balanceOf(accounts[0])
      .call({ from: accounts[0] });
    console.log(response);
  };

  // nft tokeninfo
  nft_tokenURI = async () => {
    const { accounts, nftcontract } = this.props;
    const response = await nftcontract.methods
      .tokenURI(0)
      .call({ from: accounts[0] });
    console.log(response);
  };

  // nft alltokeninfo
  nft_allTokenInfo = async () => {
    const { accounts, nftcontract } = this.props;
    const response = await nftcontract.methods
      .getAllTokens(accounts[0])
      .call({ from: accounts[0] });
    console.log(response);
  };

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  pinjsontoipfs = async () => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

    let JSONBody = {
      pinataMetadata: {
        name: "1",
        keyvalues: {
          owner: "0x35fD6bb34a38CC6746889FF976Fc05C3Ce3Fa236",
        },
      },
      pinataContent: {
        attributes: [
          {
            trait_type: "Breed",
            value: "Maltipoo",
          },
          {
            trait_type: "Eye color",
            value: "Mocha",
          },
        ],
        description: "sss",
        image:
          "https://gateway.pinata.cloud/ipfs/Qme4tAfoB1RhF7jmCZgXmurCQHF1Uc5dgXD4ZLb41owVhn",
        name: "ccc",
      },
    };
    return axios
      .post(url, JSONBody, {
        headers: {
          pinata_api_key: "",
          pinata_secret_api_key: "",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  getpin = async () => {
    const url = `https://api.pinata.cloud/data/pinList?status=pinned&metadata[keyvalues]={"owner":{"value":"0x35fD6bb34a38CC6746889FF976Fc05C3Ce3Fa236", "op":"eq"}}`;

    return axios
      .get(url, {
        headers: {
          pinata_api_key: "",
          pinata_secret_api_key: "",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div className="App">
        <h1>함수 실험실</h1>
        <h4>정보 업로드 / 보기</h4>
        <button onClick={this.uploadPersonalInfo0}>
          uploadPersonalInfo(근로자)
        </button>
        <button onClick={this.uploadPersonalInfo1}>
          uploadPersonalInfo(사업주)
        </button>
        <button onClick={this.getPersonInformation}>
          getPersonInformation
        </button>
        <button onClick={this.uploadWorkplace}>uploadWorkplace</button>
        <button onClick={this.getWorkplaces}>getWorkplaces</button>
        <h4>근로계약서 업로드 / 조회</h4>
        <button onClick={this.uploadLaborContract}>uploadLaborContract</button>
        <button onClick={this.getLaborContract0}>
          getLaborContract(근로자)
        </button>
        <button onClick={this.getLaborContract1}>
          getLaborContract(사업주)
        </button>
        <button onClick={this.getAllLaborContract}>getAllLaborContract</button>
        <button onClick={this.deleteEmployee}>deleteEmployee</button>
        <h4>출퇴근 업로드 / 조회</h4>
        <button onClick={this.uploadAttendance0}>uploadAttendance(출근)</button>
        <button onClick={this.uploadAttendance1}>uploadAttendance(퇴근)</button>
        <button onClick={this.getCalAttendance}>getCalAttendance</button>
        <button onClick={this.getAllAttendance}>getAllAttendance</button>
        <h4>급여 정산</h4>
        <button onClick={this.getPayment}>getPayment</button>
        <h4>기타 조회</h4>
        <button onClick={this.getEmployeeInfo}>getEmployeeInfo</button>
        <button onClick={this.getNumOfEmployee}>getNumOfEmployee</button>
        <button onClick={this.getIndexOfEmployee}>getIndexOfEmployee</button>
        <button onClick={this.getWorkTime}>getWorkTime</button>
        <button onClick={this.getWage}>getWage</button>
        <h4>토큰 함수</h4>
        <button onClick={this.balanceOf}>balanceOf</button>
        <button onClick={this.transfer}>transfer</button>
        <button onClick={this.buy}>buy</button>
        <button onClick={this.sell}>sell</button>
        <button onClick={this.geterc20address}>geterc20address</button>
        <h4>nft 함수</h4>
        <button onClick={this.nft_mint}>nft_mint</button>
        <button onClick={this.nft_balanceOf}>nft_balanceOf</button>
        <button onClick={this.nft_tokenURI}>nft_tokenInfo</button>
        <button onClick={this.nft_allTokenInfo}>nft_allTokenInfo</button>
        <h4>pinata test</h4>
        <button onClick={this.pinjsontoipfs}>pinjsontoipfs</button>
        <button onClick={this.getpin}>getpin</button>
      </div>
    );
  }
}

export default Test;
