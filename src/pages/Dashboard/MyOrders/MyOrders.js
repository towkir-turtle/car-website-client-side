import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://damp-tor-44023.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://damp-tor-44023.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Successfully deleted");
          const remaining = myOrders.filter((mp) => mp._id !== id);
          setMyOrders(remaining);
        }
      });
  };

  return (
    <TableContainer component={Paper}>
      <h2
        style={{ fontFamily: "Genos", fontSize: "40px", textAlign: "center" }}
      >
        My Orders
      </h2>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrders.map((myOrder) => (
            <TableRow
              key={myOrder.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {myOrder?.name}
              </TableCell>
              <TableCell align="left">{myOrder?.orderDetails?.name}</TableCell>
              <TableCell align="right">
                ${myOrder?.orderDetails?.price}
              </TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => handleDelete(myOrder._id)}
                  variant="contained"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyOrders;
