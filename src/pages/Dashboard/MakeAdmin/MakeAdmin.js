import React, { useState } from "react";
import { Alert, Button, TextField } from "@mui/material";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://damp-tor-44023.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setSuccess(true);
          console.log(data);
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h2>Make A Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          type="email"
          label="email"
          variant="standard"
          onBlur={handleOnBlur}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
