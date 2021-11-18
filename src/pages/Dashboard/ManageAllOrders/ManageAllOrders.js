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

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://damp-tor-44023.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
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
          const remaining = orders.filter((mp) => mp._id !== id);
          setOrders(remaining);
        }
      });
  };

  return (
    <TableContainer component={Paper}>
      <h2
        style={{ fontFamily: "Genos", fontSize: "40px", textAlign: "center" }}
      >
        Manage All Orders
      </h2>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Product </TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{order?.name}</TableCell>
              <TableCell align="center">{order?.orderDetails?.name}</TableCell>
              <TableCell align="right">${order?.orderDetails?.price}</TableCell>
              <TableCell align="right">
                <Button variant="contained">Pending</Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => handleDelete(order._id)}
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

export default ManageAllOrders;
