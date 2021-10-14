import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NoteShow from "../components/NoteShow";
import NoteWrite from "../components/NoteWrite";

const Note = ({ note }) => {
  return (
    <>
      <div>
        {note.map((v) => (
          <NoteShow key={v.id} note={v} />
        ))}
      </div>
      <NoteWrite />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    note: state.note,
    current: state.current,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
