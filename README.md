# ๐ข Blockchain-Management-Employee-Platform
ํ๊ตญ๊ณตํ๋ํ๊ต ์กธ์์ํ ์ค๋งํธ ์ปจํธ๋ํธ๋ฅผ ํ์ฉํ ๊ทผ๋ก์ ํตํฉ๊ด๋ฆฌ ํ๋ซํผ

## Description

์๋ฐ์๊ณผ ์ฌ์ฅ๋๋ค์ ๋ถ์ ํด๊ฒฐ๊ณผ ๊ทผ๋ก๊ณ์ฝ์, ์ถ/ํด๊ทผ ๋ฐ์ดํฐ์ ๋ํ ์ ๋ขฐ์ฑ ํฅ์์ ๋ชฉ์ ์ผ๋ก ๋ง๋ค์ด์ง ์ด๋๋ฆฌ์ ์ค๋งํธ ์ปจํธ๋ํธ๋ฅผ ํ์ฉํ ๊ทผ๋ก์ ํตํฉ๊ด๋ฆฌ ํ๋ซํผ์๋๋ค. 

์ด ํ๋ซํผ์ ๊ณ ์ฉ์ฃผ๊ฐ ์ฌ์ฉํ  ์ ์๋ Web๊ณผ ๊ทผ๋ก์๊ฐ ์ฌ์ฉํ  ์ ์๋ App์ด ์กด์ฌํ๋ฉฐ ํฌ๊ฒ ๋ค์๊ณผ ๊ฐ์ ๊ธฐ๋ฅ์ ์ ๊ณตํฉ๋๋ค.

- ์ค๋งํธ ์ปจํธ๋ํธ๋ฅผ ์ด์ฉํ ๊ทผ๋ก๊ณ์ฝ์ ์ ์ฅ&์กฐํ
- QR์ฝ๋์ ์ค๋งํธ ์ปจํธ๋ํธ๋ฅผ ์ด์ฉํ ์ถ/ํด๊ทผ ๊ธฐ๋ก
- ERC20 ํ ํฐ์ ์ด์ฉํ ๊ธ์ฌ ์ง๊ธ ๊ธฐ๋ฅ (์ด๋๋ฆฌ์ <-> ํ ํฐ ํ์  ๊ฐ๋ฅ)
- ์ผ์ ๋ํ ๋ณด์์ผ๋ก ERC721์ ์ด์ฉํ NFT ๋ณด์ ๋ฑ์ง ๊ธฐ๋ฅ (์ฅ๊ธฐ ๊ทผ๋ก, ์น์ , ๊ฐ๊ทผ)

## Architecture

<img src="/images/Architecture.png">

## More Descripton and Screenshot

๊ฐ ์ ํ๋ฆฌ์ผ์ด์์ ์คํฌ๋ฆฐ์ท๊ณผ ๊ตฌ๋ ๋ฐฉ๋ฒ์ ์๋๋ฅผ ์ฐธ์กฐํด์ฃผ์ธ์.

- [์ฌ์์ฃผ Web](https://github.com/somewheregreeny/Blockchain-Management-Employee-Platform/blob/main/employerWeb)

- [๊ทผ๋ก์ App](https://github.com/somewheregreeny/Blockchain-Management-Employee-Platform/blob/main/employeeApp)

- [Backend](https://github.com/somewheregreeny/Blockchain-Management-Employee-Platform/tree/main/database-backend)

- [SmartContract](https://github.com/somewheregreeny/Blockchain-Management-Employee-Platform/tree/main/employerWeb/contracts)

## Tech Stack

|๋ถ๋ฅ|๊ธฐ์ 
|---|-----|
|FrontEnd|<img src="https://img.shields.io/badge/React&React--Native-61DAFB?style=flat&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Expo-000?style=flat&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Web3.js-F16822?style=flat&logo=Web3.js&logoColor=black"> <img src="https://img.shields.io/badge/Ethers.js-2535a0?style=flat&logo=Solidity&logoColor=white">|
|BackEnd|<img src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=Go&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white">|
|BlockChain|<img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=Ethereum&logoColor=white"> <img src="https://img.shields.io/badge/Solidity-363636?style=flat&logo=Solidity&logoColor=white">|

## Members

|์ด๋ฆ|ํ๊ณผ|์ญํ |
|------|---|-----|
|์ด์์ค|์ปดํจํฐ๊ณตํ๊ณผ|Web, App Blcokchain ์ฐ๊ฒฐ, DB, Blockchain, Smart Contract ์์ฑ|
|ํ๋ฏผ์ฑ|์ํํธ์จ์ด๊ณตํ๊ณผ|๊ณํ์/๋ณด๊ณ ์ ์์ฑ, ๋์์ธ, Smart Contract ์์ฑ|
|๋ฐํ๋ฏผ|์ํํธ์จ์ด๊ณตํ๊ณผ|DB, Smart Contract ์์ฑ|
|๊น๋ํ|์ํํธ์จ์ด๊ณตํ๊ณผ|Web, App Front ๋ด๋น|

## Git Convention

### Process

* ๊ฐ์ ๋งก์ ๋๋ก ๋ธ๋์น๋ฅผ ๋ฐ์ ์์ํฉ๋๋ค.

* ๋ธ๋์น ์ด๋ฆ์ (Front/Back)/(๊ธฐ๋ฅ๋ช) ์ผ๋ก ์์ฑํด์ฃผ์๊ธฐ ๋ฐ๋๋๋ค.
  * ex) Back/add-new-contract Front/add-login-page

* ๋ณธ์ธ์ ์์์ด ์๋ฃ๋๋ฉด main ๋ธ๋์น๋ก pull request๋ฅผ ์์ฑํฉ๋๋ค.

* ํ์ ํ์๋ค์ ์ฝ๋ ๋ฆฌ๋ทฐ๋ฅผ ๋ฐ๊ณ  mergeํฉ๋๋ค.

### Issues

* ์ด์ํ ๋ฒ๊ทธ๋ ์๋ฌธ์ ์ด ์๊ธด ๊ฒฝ์ฐ ์์ธํ๊ฒ Issues์ ์์ฑํฉ๋๋ค.

* ๊ทธ ํ ์นดํก ๋๋ ๋์ค์ฝ๋์์ ํ์๋ค์๊ฒ ์๋ฆฝ๋๋ค.

### Commit message

* ๊ธฐ๋ณธ์ ์ธ git convention์ ์ค์ํฉ๋๋ค.

* ๋ํ employeeApp = eA / employerWeb = eW๋ก ์ค์ฌ ์์ฑํฉ๋๋ค.


1. Feat : ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ


```
Feat : ๊ทผ๋ก๊ณ์ฝ์ ์ปจํธ๋ํธ ์์ฑ
```


2. Fix : ๋ฒ๊ทธ ์์ 

* ์ด์์ ๊ดํ ๋ฒ๊ทธ ์์ ์ด๋ผ๋ฉด ๋ค์ ์ด์๋ฒํธ๋ ๋ถ์ฌ์ค๋๋ค.


```
Fix : ๊ฐ์ด ์ปจํธ๋ํธ์ ๋ค์ด๊ฐ์ง ์๋ ๋ฒ๊ทธ ์์  #2
```


3. Docs : ๋ฌธ์ ์์ 


```
Docs : readme์ ๋ฉค๋ฒ๊ตฌ์ฑ ์ถ๊ฐ 
```


4. Refactor : ์ฝ๋ ๋ฆฌํฉํ ๋ง


```
Refactor : ๊ทผ๋ก๊ณ์ฝ์ ์ ์กํ๋ ๋ก์ง ํจ์จ์ ์ผ๋ก ๋ณ๊ฒฝ
```

* body์๋ ๊ธด ์ค๋ช์ด ํ์ํ๋ค๊ณ  ์๊ฐํ  ๋ ์์ฑํด์ค๋๋ค. ํ์์๋ค๊ณ  ์๊ฐํ๋ฉด ์์ฑํ์ง ์์๋ ๋ฉ๋๋ค.

* ์์์ ์์ ์ด์ง๋ง ์ด๋ค ํ๋์ ์ ํ๋์ง๋ฅผ ๊ธฐ๋ณธ ํ ๋๋ก ์์ฑํด์ฃผ์๊ธธ ๋ฐ๋๋๋ค.

### Comment

* ์์ ์ด ๋ง๋  ํจ์๊ฐ ์ด๋ ํ ์ญํ ์ ํ๋์ง ์ฃผ์์ผ๋ก ๋จ๊ฒจ์ฃผ์๊ธฐ ๋ฐ๋๋๋ค.

* ๋ค๋ฅธ ์ฌ๋์ด ๋ณด์์ ๋ ์๋ฌธ์ ์ด ๋ง์ด ์๊ธฐ์ง ์๋๋ก ์ง๊ด์ ์ด๊ฒ ๋ถํ๋๋ฆฝ๋๋ค.
