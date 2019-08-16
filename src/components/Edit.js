import React from "react";
import PropTypes from "prop-types";

const Edit = props => {
  const change = () => {
    props.setAge(35);
  };
  return (
    <div>
      <button onClick={() => props.setName("Harshavardhan")}>Change Name</button>
      <br />
      <br />
      <button onClick={change}>Change Age</button>
    </div>
  );
};

Edit.propTypes = {
  setAge: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
};

export default Edit;
