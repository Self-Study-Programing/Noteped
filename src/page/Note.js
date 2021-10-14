import React from "react";
import { connect } from "react-redux";
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
      {/* <NoteWrite /> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    note: state.note,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
