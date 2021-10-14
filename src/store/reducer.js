const initialState = {
  note: [
    {
      id: 0,
      title: "first",
      description: "",
      date: "2021-10-14",
    },
    {
      id: 1,
      title: "second",
      description: "",
      date: "2021-10-14",
    },
    {
      id: 2,
      title: "second",
      description: "",
      date: "2021-10-14",
    },
    {
      id: 3,
      title: "second",
      description: "",
      date: "2021-10-14",
    },
  ],
  current: {
    id: 0,
  },
};

export const CHANGECUR = "CHANGE_CURRENT";
export const CHANGETITLE = "CHANGE_TITLE";
export const CHANGEDES = "CHANGE_DESCRIPTION";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGECUR:
      return {
        ...state,
        current: {
          ...state.current,
          id: action.id,
        },
      };
    case CHANGETITLE:
      return {
        ...state,
        note: state.note.map((i) =>
          i.id === state.current.id ? (i.title = action.value) : i.title
        ),
      };
    case CHANGEDES:
      return {
        ...state,
        note: [
          ...state.note,
          state.note.map((i) =>
            i.id === state.current.id ? { ...i, title: action.value } : i
          ),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
