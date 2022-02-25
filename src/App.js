import "./App.css";
import { useState } from "react";

function App() {
  const [accounts, setAccounts] = useState([
    { firstName: "Code", lastName: "Byte", phone: "88885559999" },
  ]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  var TABLE_DATA = accounts
    .sort((a, b) => {
      var firstName = a.firstName.toUpperCase();
      var secondName = b.firstName.toUpperCase();

      if (firstName > secondName) {
        return 1;
      } else if (firstName < secondName) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((account) => {
      return (
        <tr>
          <td>{account.firstName}</td>
          <td>{account.lastName}</td>
          <td>{account.phone}</td>
        </tr>
      );
    });

  function handleSubmit(e) {
    e.preventDefault();

    const NEW_ACCOUNT = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    };

    setAccounts([...accounts, NEW_ACCOUNT]);
    setFirstName("");
    setLastName("");
    setPhone("");
  }
  function handleChangePhone(e) {
    setPhone(e.target.value);
  }
  function handleChangeFName(e) {
    setFirstName(e.target.value);
  }
  function handleChangeLName(e) {
    setLastName(e.target.value);
  }
  return (
    <div className="App">
      <h1>Address Book</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input onChange={handleChangeFName} value={firstName}></input>
        <label>Last Name:</label>
        <input onChange={handleChangeLName} value={lastName}></input>
        <label>Phone:</label>
        <input onChange={handleChangePhone} value={phone}></input>

        <button>Submit</button>
      </form>

      <table>
        <th>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Phone</td>
        </th>
        {TABLE_DATA}
      </table>
    </div>
  );
}

export default App;
