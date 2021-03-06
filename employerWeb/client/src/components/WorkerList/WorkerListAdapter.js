import React from "react";
import WorkerListItem from "./WorkerListItem";
import styled from "styled-components";

const Adapter = styled.div`
  display: flex;
  overflow-y: auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  tr {
    align-items: center;
    &::nth-child(even) {
      background-color: #f8f9fa;
    }
    & + & {
      border-top: 1px solid #dee2e6;
      margin-bottom: 50px;
    }
    th {
      text-align: center;
      font-family: "Noto Sans CJK KR";
      font-size: 24px;
      color: #999999;
      font-weight: bold;
      border-bottom: 6px solid #f1f1f1;
    }
    td {
      padding: 15px;
      text-align: center;
      font-family: "Noto Sans CJK KR";
      font-size: 20px;
      color: #999999;
      font-weight: bold;
    }
  }
`;

const WorkerListAdapter = ({
  workers,
  onClickEnquiry,
}) => {
  return (
    <Adapter>
      <table>
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>Address</th>
          <th>정보 조회</th>
        </tr>

        {workers &&
          workers.map((x, index) => (
            <WorkerListItem
              index={index + 1}
              address={workers[index][0]}
              name={workers[index][1]}
              onClickEnquiry={onClickEnquiry}
            />
          ))}
      </table>
    </Adapter>
  );
};

export default WorkerListAdapter;
