import { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [throwError, setThrowError] = useState(false);

  const addUserHanlder = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setThrowError({
        title: "Invalid input",
        message: "Please enter a vaild name and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setThrowError({
        title: "Invalid input",
        message: "Please enter an age bigger than 0.",
      });
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

  const errorHanlder = () => {
    setThrowError(null);
  };
  return (
    <Wrapper>
      {throwError && (
        <ErrorModal
          onExit={errorHanlder}
          title={throwError.title}
          message={throwError.message}
        />
      )}
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
    </Wrapper>
  );
};

export default AddUser;
