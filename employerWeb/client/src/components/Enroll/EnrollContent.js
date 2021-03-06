import { Dialog } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import SubmitDialog from "./SubmitDialog";

const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin: 30px;
  padding: 10px;

  width: 100%;
  height: auto;

  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);
  border-radius: 20px;

  background-color: #f7f7f7;

  h1 {
    font-size: 26px;
    font-family: "Noto Sans CJK KR";
  }

  form > div {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }
`;

const LeftInput = styled.div`
  width: 100%;
`;

const RightInput = styled.div`
  width: 100%;
`;

const SubmitDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 260px;
    border-radius: 30px;
    font-family: "Noto Sans CJK KR";
    border: 0px;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    background-color: #1c89e9;
    color: white;
    margin-right: 20px;
  }

  /* input {
    width: 260px;
    border-radius: 30px;
    font-family: "Noto Sans CJK KR";
    border: 0px;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    background-color: #f1f1f1;
    color: #999999;
    margin-right: 20px;

    :hover {
      cursor: pointer;
      background-color: #f1f1f1cc;
    }
  } */
`;

const EnrollLabel = styled.label`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Noto Sans CJK KR";
    font-weight: bold;
    font-style: "normal";
    font-size: 22px;
  }
  input {
    width: auto;
    height: auto;
    padding: 10px;
    font-size: 16px;
    border: 0px;
    background-color: #f1f1f1;
    color: #999999;
    font-family: "Noto Sans CJK KR";
    font-weight: bold;
    border-radius: 40px;
  }
`;

const StyledResetButton = styled.input`
  width: 260px;
  border-radius: 30px;
  font-family: "Noto Sans CJK KR";
  border: 0px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  background-color: #f1f1f1;
  color: #999999;
  margin-right: 20px;

  :hover {
    cursor: pointer;
    background-color: #f1f1f1cc;
  }
`;

const StyledSubmitButton = styled.input`
  width: 260px;
  border-radius: 30px;
  font-family: "Noto Sans CJK KR";
  border: 0px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  background-color: #1c89e9;
  color: white;
  margin-right: 20px;

  :hover {
    cursor: pointer;
    background-color: #1c89e9cc;
  }
`;

const EnrollContent = ({
  name,
  onEnroll,
  wpinfo,
  onSubmit,
  onChange,
  onClickHandler,
}) => {
  const [submitOpen, setSubmitOpen] = useState(false);

  const onClose = () => {
    setSubmitOpen(false);
  };

  return (
    <Content>
      <h1> ????????? ?????? </h1>
      <form className="Enroll" method="post">
        <Dialog maxWidth={1280} onClose={onClose} open={submitOpen}>
          <SubmitDialog onClickClose={onClose} />
          <input type={"submit"} value="??????" />
        </Dialog>

        <div>
          <LeftInput>
            <EnrollLabel>
              <h2> ?????? </h2>
              <input
                placeholder="????????? ????????? ??????????????????."
                name="employeename"
                onChange={onChange}
              />
            </EnrollLabel>
            <EnrollLabel>
              <h2>??????</h2>
              <input
                placeholder="????????? ????????? ???????????????"
                name="address"
                onChange={onChange}
              />
            </EnrollLabel>
            <EnrollLabel>
              <h2>????????????</h2>
              <div style={{ display: "flex", width: "auto" }}>
                <input type="date" name="period1" onChange={onChange} />
                <p
                  style={{
                    color: "#999999",
                    fontFamily: "Noto Sans CJK KR",
                    fontWeight: "bold",
                  }}
                >
                  ??????
                </p>
                <input type="date" name="period2" onChange={onChange} />
              </div>
            </EnrollLabel>
          </LeftInput>

          <RightInput>
            <EnrollLabel>
              <h2> ?????? ?????? </h2>
              <input
                placeholder="?????? ????????? ???????????????"
                name="duties"
                onChange={onChange}
              />
            </EnrollLabel>

            <EnrollLabel>
              <h2> ?????? ?????? ?????? </h2>
              <input
                placeholder="?????? ?????? ????????? ???????????????"
                name="workingTime"
                onChange={onChange}
              />
            </EnrollLabel>
            <EnrollLabel>
              <h2> ????????? </h2>
              <input
                placeholder="???????????? ???????????????"
                name="workingDays"
                onChange={onChange}
              />
            </EnrollLabel>
            <EnrollLabel>
              <h2> ??????(??????) </h2>
              <input
                placeholder="??????(??????)??? ???????????????"
                name="wage"
                onChange={onChange}
              />
            </EnrollLabel>
            <EnrollLabel>
              <h2> ??????????????? </h2>
              <input
                placeholder="??????(??????)???????????? ???????????????"
                name="wageday"
                onChange={onChange}
              />
            </EnrollLabel>
            <EnrollLabel>
              <h2> ???????????? </h2>
              <input
                placeholder="?????? ????????? ???????????????"
                name="comment"
                onChange={onChange}
              />
            </EnrollLabel>
          </RightInput>
        </div>
        <SubmitDiv>
          <StyledSubmitButton
            type={"submit"}
            value="????????? ?????? ?????? ?????????"
            onClick={onSubmit}
          />
          <StyledResetButton gray type={"reset"} value="?????????" />
        </SubmitDiv>
      </form>
    </Content>
  );
};
export default EnrollContent;
