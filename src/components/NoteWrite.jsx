import React from "react";
import { connect } from "react-redux";
import { CHANGETITLE, CHANGEDES } from "../store/reducer";

const NoteWrite = ({ note, current, ChangeTitle, ChangeDes }) => {
  const onChangeTitle = (e) => {
    ChangeTitle(e.target.value);
  };

  const onChangeDes = (e) => {
    ChangeDes(e.target.value);
  };
  return (
    <>
      <input type="text" value={note[current].title} onChange={onChangeTitle} />
      <input
        type="text"
        value={note[current].description}
        onChange={onChangeDes}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    note: state.note,
    current: parseInt(state.current.id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeTitle: (value) => dispatch({ type: CHANGETITLE, value }),
    ChangeDes: (value) => dispatch({ type: CHANGEDES, value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteWrite);
