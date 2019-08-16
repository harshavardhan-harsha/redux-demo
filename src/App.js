import React from "react";
import { connect } from "react-redux";
import { setAge, setName } from "./actions/UserActions";
import User from "./components/User";
import Edit from "./components/Edit";

import "./App.css";

const App = props => {
  return (
    <div className="App">
      <h1 style={{ color: "tomato" }}>React-Redux Example</h1>
      <User name={props.user.name} age={props.user.age} />
      <Edit setAge={props.setAge} setName={props.setName} />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state
});
export default connect(
  mapStateToProps,
  { setAge, setName }
)(App);
