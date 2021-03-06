import React from "react";
import styled from "styled-components";

const StyeldWorkingDetails = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px 150px;
  grid-template-rows: 60px 60px;


  h4 {
    align-self: center;
    width: 140px;
    color: #999999;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    align-self: center;
    color: #999999;
    font-size: 20px;
  }
`;

const WorkingDetails = ({ userdata }) => {
  const categories = ["입사일", "근무일수", "마지막 근무일", "지각률"];

  return (
    <>
      <StyeldWorkingDetails>
        {categories.map((category, index) => (
          <>
            <h4>{category}: </h4>
            <p>{userdata[index]}</p>
          </>
        ))}
      </StyeldWorkingDetails>
    </>
  );

};

export default WorkingDetails;
