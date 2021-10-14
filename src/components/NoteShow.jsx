import React from "react";

const NoteShow = ({ note }) => {
  return (
    <div>
      <h1>{note.title}</h1>
      <h2>{note.date}</h2>
    </div>
  );
};

export default NoteShow;
