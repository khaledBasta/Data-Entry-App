import { useState } from "react";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHanlder = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 1
    ) {
      alert("You entered an empty value");
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHanlder}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredUsername}
          onChange={usernameChangeHandler}
          id="username"
          type="text"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          value={enteredAge}
          onChange={ageChangeHandler}
          id="age"
          type="number"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
