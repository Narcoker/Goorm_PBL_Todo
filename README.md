## [[구름\_PBL] TodoList WebSite](https://narcoker.github.io/Goorm_PBL_Todo/) - 배포 링크

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/>  
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
   <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
   <br/>
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>  
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/> 
  <br/>
  모바일 버전 UI가 구현되지 않았습니다.
  <br/>  
체험 시 PC 접속을 권장합니다.
   
</div>

- 팀: 개인
- 수행기간: 7/10(월) ~ 7/16(일)
- 과정
  - 유저 시나리오 작성
  - 서비스 플로우(유저 플로우) 작성
  - UI 디자인 제출
  - 최종 코드 제출

## 최종 결과물

https://github.com/Narcoker/Goorm_PBL_Todo/assets/79975172/1a9ca47c-81ae-42c9-917a-263922395620

## 유저 플로우, 기능

### 용어

- 작업: 사용자가 등록할 해야할 일
- 세부 작업: 작업을 완수하기 위해서 세부적으로 해야할 작업
- 상태: 작업과 세부 작업의 상태, `시작 전 | 진행 중 | 완료`

### 작업 등록

> 작업을 등록한다.

### 작업 삭제

> 등록된 작업을 삭제한다.

### 작업 이름 수정

> 등록된 작업의 이름을 수정한다.

### 작업 상태 변경

> 등록된 작업의 상태를 변경한다.  
> 작업의 상태 아이콘을 클릭하여 변경할 수 있다.  
> 시작 전 -> 진행 중 -> 완료 -> 시작전 -> ...

### 작업 시작일, 종료일 수정

> 등록된 작업의 시작일과 종료일을 수정한다.  
> 종료일은 시작일보다 빠를 수 없다.
>
> 세부 작업이 존재한다면 작업의 시작일과 종료일을 직접 수정할 수 없다.  
> 세부 작업의 시작일과 종료일에 의존하여 자동적으로 변경된다.
>
> 작업의 시작일은 세부 작업들의 시작일 중 가장 빠른 일자가 된다.  
> 작업의 종료일은 세부 작업들의 종료일 중 가장 늦은 일자가 된다.

### 세부 작업 등록

> 등록된 작업의 세부 작업을 등록한다.

### 세부 작업 이름 수정

> 등록된 세부 작업의 이름을 수정한다.

### 세부 작업 상태 변경

> 등록된 세부 작업의 상태를 변경할 수 있다.  
> 세부 작업의 상태 아이콘을 클릭하여 변경할 수 있다.
>
> `시작 전` -> `진행 중` -> `완료` -> `시작 전` -> `...``

## 유저 시나리오

![유저 시나리오](/FOR_README/유저시나리오.png)
