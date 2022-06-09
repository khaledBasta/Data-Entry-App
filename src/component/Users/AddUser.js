import { Fragment, useState, useRef } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  // Where u just only want to quickly read a value, and u never plan on changing anything,
  // Then u don't really need a state, "refs are probably better"
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [throwError, setThrowError] = useState(false);

  const addUserHanlder = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    console.log(enteredName, enteredUserAge);
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setThrowError({
        title: "Invalid input",
        message: "Please enter a vaild name and age.",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setThrowError({
        title: "Invalid input",
        message: "Please enter an age bigger than 0.",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);

    // U can manipulate the DOM without React but it is not prefered
    // Reset the value entered by a user using refs which is a less code
    // Or using state, which is definitely cleaner but is a bit more code
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHanlder = () => {
    setThrowError(null);
  };

  return (
    <Fragment>
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
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            // value={enteredAge}
            // onChange={ageChangeHandler}
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
