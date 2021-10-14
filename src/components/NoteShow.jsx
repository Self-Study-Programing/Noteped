import React from "react";
import { connect } from "react-redux";
import { CHANGECUR } from "../store/reducer";

const NoteShow = ({ note, ChangeCur }) => {
  const onClick = () => {
    ChangeCur(note.id);
  };
  return (
    <button onClick={onClick}>
      <h1>{note.title}</h1>
      <h2>{note.date}</h2>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeCur: (id) => dispatch({ type: CHANGECUR, id }),
  };
};

export default connect(null, mapDispatchToProps)(NoteShow);
