// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LaborContract {
  
  // 사람과 개인정보 mapping
  mapping(address => personalInfo) private _person;

  // 고용주의 사업장 리스트 index mapping
  mapping(address => uint256 []) private _employerWorkplaceList;

  // 근로자의 근로계약서 리스트 index mapping
  mapping(address => uint256 []) private _employeeLaborContractList;

  // 사업장 index 전역 변수
  uint private _workplaceIndex = 0;
  
  // 근로계약서 index 전역 변수
  uint private _laborContractIndex = 0;
  
  // 사람 개인정보
  // identiNumber : 0 => 근로자 1 => 고용주
  struct personalInfo {
    uint8 identiNumber;
    string name;
    uint age;
    string gender;
    string residence;
  }

  // 사업장 정보
  // employee와 attendance는 index 번호 같아야함 -> 검색 쉽게 하기 위함
  struct workplaceInfo {
    string employerName;
    string workplaceName;
    string name;
    string location;
    address employer;                  // 사업장 정보에 고용주 address 추가
    address [] employee;
    attendance [] attendanceList;
  }

  // 출퇴근 기록부
  // 후에 프론트 화면에서 요구하는 양식에 따라 변경할 수 있음
  struct attendance {
    //string [] startDay;
    uint [] startYear;
    uint [] startMonth;
    uint [] startDate;
    uint [] startTimeHour;
    uint [] startTimeMinute;
    //string [] endDay;
    uint [] endYear;
    uint [] endMonth;
    uint [] endDate;
    uint [] endTimeHour;
    uint [] endTimeMinute;
  }

  //해당 월 출근 기록부
  struct monthlyAttendance {
    uint [] month;             //몇 월의 기록인지 저장
    uint [] workDate;          //근로자가 해당 월에 며칠 일했는지 저장
    uint [] workHour;          //근로자가 해당 월에 몇 시간 일했는지 저장
  }

  // 근로계약서 저장소
  struct laborContract {
    address employer;
    address employee;
    string employeeName;
    string employerName;
    string peroid;            // 근로계약기간 
    string duties;            // 업무내용
    string workingStartTime;
    string workingTime;
    string workingCycle;       // 소정근로시간
    string workingDays;       // 근무일
    string wage;              // 임금(시급)
    string wageday;           // 임금지급일
    string comment;           // 기타사항
  }
  
  //struct 배열 선언부

  personalInfo [] personalinfo;
  workplaceInfo [] workplaceinfo;
  laborContract [] laborcontract;
  temporaryLabor [] temporarylabor;
  temporaryContract [] temporarycontract;

  //0. 고용주의 사업장 등록
  frunction registerWorkplace(string employerName, string workplaceName, string location) public returns (uint8){
      
      address employer;
      employer = msg.sender;
      uint max = 10000; // 추후 수정

      for(uint workplaceIndex = 0 ; workplaceIndex <= max ; workplaceIndex++){
          //if(workplaceInfo[workplaceIndex].workplaceName에 데이터가 없을 경우)
          {
            workplaceInfo[workplaceIndex].employerName.push(employerName);
            workplaceInfo[workplaceIndex].workplaceName.push(workplaceName);
            workplaceInfo[workplaceIndex].location.push(location);
            workplaceInfo[workplaceIndex].employer.push(employer);
            break;
          }
      } 
  }

  /* 
  1. 근로자가 고용주에게 근로계약서 요청 함수
    (근로자는 고용주에게 본인의 address 및 개인정보를 제시하면서 임시 근로계약서를 요청한다)
  */
  function requestContract(uint registationNum, string name, uint age, string gender, string residence) private returns (uint8){

    public address employee;
    employee = msg.sender;
    uint max = 10000; // 추후 수정

    for(uint employeeIndex = 0 ; employeeIndex <= max ; employeeIndex++){
        //if(temporaryLabor[employeeIndex].name에 데이터가 없을 경우)
        {
          temporaryLabor[employeeIndex].registationNum.push(registationNum);
          temporaryLabor[employeeIndex].name.push(name);
          temporaryLabor[employeeIndex].age.push(age);
          temporaryLabor[employeeIndex].gender.push(gender);
          temporaryLabor[employeeIndex].residence.push(residence);
          temporaryLabor[employeeIndex].employee.push(employee);
          break;
        }
    }

    return 1;

  }

  //2. 고용주가 임시 근로계약서 작성(근로 신청한 근로자의 주민등록번호, 이름을 입력하여 근로자 확인)
  function uploadRequirement(uint registationNum, string name, string period, string duties, string workingStartTime, string workingTime, 
  string workingCycle, string workingDays, string wage, string wageday, string comment) public returns (uint8) {

    uint max = 10000; // 추후 수정

    //사업장, 근로자 확인작업
    for(uint workplaceIndex = 0 ; workplaceIndex <= workplaceInfo.length ; workplaceIndex++){
        if(workplaceInfo[workplaceIndex].employer == msg.sender)
        {
            for(uint employeeIndex = 0 ; employeeIndex <= temporaryLabor.length ; employeeIndex++){
                if(temporaryLabor[employeeIndex].registationNum == registationNum)
                {
                    for(uint tempContractIndex = 0 ; tempContractIndex <= max ; tempContractIndex++){
                        //if(temporaryContract[contractIndex].employer에 데이터가 없다면)
                        {
                            temporaryContract[tempContractIndex].employer.push(msg.sender);
                            temporaryContract[tempContractIndex].employee.push(temporaryLabor[employeeIndex].employee);
                            temporaryContract[tempContractIndex].employerName.push(workplaceInfo[workplaceIndex].employerName);
                            temporaryContract[tempContractIndex].employeeName.push(name);
                            temporaryContract[tempContractIndex].period.push(period);
                            temporaryContract[tempContractIndex].duties.push(duties);
                            temporaryContract[tempContractIndex].workingStartTime.push(workingStartTime);
                            temporaryContract[tempContractIndex].workingTime.push(workingTime);
                            temporaryContract[tempContractIndex].workingCycle.push(workingCycle);
                            temporaryContract[tempContractIndex].workingDays.push(workingDays);
                            temporaryContract[tempContractIndex].wage.push(wage);
                            temporaryContract[tempContractIndex].wageday.push(wageday);
                            temporaryContract[tempContractIndex].comment.push(comment);
                            break;
                        }
                    }
                }
            }
        }
    }

    return 1;

  }

  //3. 근로자가 임시 근로계약서 확인
  function checkTemporaryContract() public view returns (string _employerName, string _period, string _duties, 
  string _workingStartTime, string _workingTime, string _workingCycle, string _workingDays, string _wage, string _wageday, string _comment){
    
    uint contractNum = 0;
    
    for(uint tempContractIndex = 0 ; tempContractIndex <= temporaryContract.length ; tempContractIndex++){
        if(temporaryContract[tempContractIndex].employee == msg.sender){
            contractNum = 1;
        }
    }

    require(contractNum != 1, "It isn't your contract in temporary contracts");

    return(
            temporaryContract[tempContractIndex].employerName,
            temporaryContract[tempContractIndex].period,
            temporaryContract[tempContractIndex].duties,
            temporaryContract[tempContractIndex].workingStartTime,
            temporaryContract[tempContractIndex].workingTime,
            temporaryContract[tempContractIndex].workingDays,
            temporaryContract[tempContractIndex].wage,
            temporaryContract[tempContractIndex].wageday,
            temporaryContract[tempContractIndex].comment);

  }

  //4. 근로자가 근로 계약서 확인 후 등록(checkNum : 0 -> 동의 / 1 -> 비동의)
  function registerContract(uint tempContractIndex, uint checkNum) returns (uint8){

    uint max = 1000000;

    for(uint tempContractIndex = 0 ; tempContractIndex <= temporaryContract.length ; tempContractIndex++){
        if(temporaryContract[tempContractIndex].employee == msg.sender){
            contractNum = 1;
        }
    }

    require(contractNum != 1, "It isn't your contract in temporary contracts");

    if(checkNum == 0)
    {
        for(uint contractIndex = 0 ; contractIndex <= max ; contractIndex++){
            if(laborContract[contractIndex].employerName에 데이터가 없다면){
                laborContract[contractIndex].employer.push(temporaryContract[tempContractIndex].employer);
                laborContract[contractIndex].employee.push(temporaryContract[tempContractIndex].employee);
                laborContract[contractIndex].employerName.push(temporaryContract[tempContractIndex].employerName);
                laborContract[contractIndex].employeeName.push(temporaryContract[tempContractIndex].employeeName);
                laborContract[contractIndex].period.push(temporaryContract[tempContractIndex].period);
                laborContract[contractIndex].duties.push(temporaryContract[tempContractIndex].duties);
                laborContract[contractIndex].workingStartTime.push(temporaryContract[tempContractIndex].workingStartTime);
                laborContract[contractIndex].workingTime.push(temporaryContract[tempContractIndex].workingTime);
                laborContract[contractIndex].workingCycle.push(temporaryContract[tempContractIndex].workingCycle);
                laborContract[contractIndex].workingDays.push(temporaryContract[tempContractIndex].workingDays);
                laborContract[contractIndex].wage.push(temporaryContract[tempContractIndex].wage);
                laborContract[contractIndex].wageday.push(temporaryContract[tempContractIndex].wageday);
                laborContract[contractIndex].comment.push(temporaryContract[tempContractIndex].comment);
            }
        }
    }

    if(checkNum == 1)
    {
        //이 부분은 협의 후에 정해야될 것으로 보입니다.
    }
    return 1;
  }