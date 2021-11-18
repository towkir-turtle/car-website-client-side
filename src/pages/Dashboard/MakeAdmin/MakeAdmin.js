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
      <h2
        style={{ fontFamily: "Genos", fontSize: "40px", textAlign: "center" }}
      >
        Make A Admin
      </h2>
      <form style={{ textAlign: "center" }} onSubmit={handleAdminSubmit}>
        <TextField
          style={{
            fontFamily: "Genos",
            width: "40%",
            fontSize: "25px",
            marginRight: "10px",
          }}
          type="email"
          label="Email"
          variant="standard"
          onBlur={handleOnBlur}
        />
        <Button
          type="submit"
          style={{
            fontFamily: "Genos",
            fontSize: "20px",
            background: "#EA001E",
            color: "white",
            padding: "5px 30px",
          }}
        >
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
