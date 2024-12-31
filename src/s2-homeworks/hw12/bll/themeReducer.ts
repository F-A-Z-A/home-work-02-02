const initState = {
  themeId: 1,
};

export const themeReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "SET_THEME_ID":
      return { ...state, themeId: action.id };
    default:
      return state;
  }
};

export const changeThemeId = (id: number) => ({ type: "SET_THEME_ID", id }) as const;

type InitStateType = typeof initState;
type ActionsType = ReturnType<typeof changeThemeId>;

// ---------------------------------------------------------------------
// const initState = {
//   themeId: 1,
// };
//
// export const themeReducer = (state = initState, action: any): any => {
//   // fix any
//   switch (action.type) {
//     // дописать
//
//     default:
//       return state;
//   }
// };
//
// export const changeThemeId = (id: number): any => ({ type: "SET_THEME_ID", id }); // fix any
