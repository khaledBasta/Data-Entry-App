import React, { useState, Fragment } from "react";
import AddUser from "./component/Users/AddUser";
import UsersList from "./component/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHanlder = (uName, uAge) => {
    // function form to get the latest snapshot of usersList
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, key: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHanlder} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
