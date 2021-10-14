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
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
