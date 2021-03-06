import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #2669a4;
  font-family: "Noto Sans CJK KR";
  font-weight: bold;
  border: 0px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  border-radius: 30px;
  padding-left: 30px;
  padding-right: 30px;
  cursor: pointer;

  :hover {
    background-color: #2669a4ee;
  }
`;

const WorkerListItem = ({
  index,
  address,
  name,
  onClickEnquiry,
}) => {
  const shortenAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(
      address.length - 6,
      address.length
    )}`;
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{shortenAddress(address)}</td>
      <td>
        <Button
          onClick={(e) => {
            onClickEnquiry(index - 1, e);
          }}
        >
          조회
        </Button>
      </td>
    </tr>
  );
};

export default WorkerListItem;
