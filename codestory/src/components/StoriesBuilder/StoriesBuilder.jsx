import React from "react";
import PropTypes from "prop-types";
import "./StoriesBuilder.css";

function StoriesBuilder({
  stateTitle,
  stateContent,
  stateNewCharacter,
  funcInputData,
  funcAddNewCharacter
}) {
  return (
    <div className="initialize container">
      <input
        className="initialize__input"
        type="text"
        name="title"
        onChange={funcInputData}
        value={stateTitle}
        placeholder="Title"
      />
      <input
        className="initialize__input"
        type="text"
        name="newCharacter"
        onChange={funcInputData}
        value={stateNewCharacter}
        placeholder="Add new character"
      />
      <button
        className="initialize__add-character-button"
        type="button"
        onClick={funcAddNewCharacter}
      >
        Add New character
      </button>
      <textarea
        className="initialize__textarea"
        name="content"
        onChange={funcInputData}
        value={stateContent}
        placeholder="Story"
      />
    </div>
  );
}

StoriesBuilder.propTypes = {
  stateTitle: PropTypes.string.isRequired,
  stateContent: PropTypes.string.isRequired,
  funcInputData: PropTypes.func.isRequired,
  funcAddNewCharacter: PropTypes.func.isRequired,
  stateNewCharacter: PropTypes.string.isRequired
};

export default StoriesBuilder;
