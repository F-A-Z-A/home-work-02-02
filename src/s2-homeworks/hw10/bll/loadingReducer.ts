const initState = {
  isLoading: false,
};

export const loadingReducer = (state = initState, action: ActionsTypes): LoadingType => {
  switch (action.type) {
    case "CHANGE_LOADING":
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

// actions creators
export const loadingAC = (isLoading: boolean) => ({ type: "CHANGE_LOADING", isLoading }) as const;

// types
type LoadingType = typeof initState;
type ActionsTypes = ReturnType<typeof loadingAC>;

// -----------------------------------------------------------------------------
// const initState = {
//   isLoading: false,
// };
//
// export const loadingReducer = (state = initState, action: any): any => {
//   // fix any
//   switch (action.type) {
//     // пишет студент  // need to fix
//
//     default:
//       return state;
//   }
// };
//
// type LoadingActionType = {
//   type: "CHANGE_LOADING";
//   isLoading: boolean;
// };
//
// export const loadingAC = (isLoading: boolean): LoadingActionType => ({
//   type: "CHANGE_LOADING",
//   isLoading,
// });
