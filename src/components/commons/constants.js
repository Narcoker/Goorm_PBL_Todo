// 작업 추가 모드, 작업 수정 모드
export const MODE = {
  ADD: Symbol.for("MODE: ADD"),
  EDIT: Symbol.for("MODE: EDIT"),
};
// 작업 상태
export const WORK_STATE = {
  BEFORE_START: Symbol("WORK_STATE: BEFORE_START"),
  IN_PROGRESS: Symbol("WORK_STATE: IN_PROGRESS"),
  END: Symbol("WORK_STATE: END"),
};
