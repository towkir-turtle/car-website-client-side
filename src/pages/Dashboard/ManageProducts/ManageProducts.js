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

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://damp-tor-44023.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://damp-tor-44023.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Successfully deleted");
          const remaining = products.filter((mp) => mp._id !== id);
          setProducts(remaining);
        }
      });
  };

  return (
    <TableContainer component={Paper}>
      <h2
        style={{ fontFamily: "Genos", fontSize: "40px", textAlign: "center" }}
      >
        Manage Products
      </h2>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="center">Product Id</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="center">{product._id}</TableCell>
              <TableCell align="center">${product?.price}</TableCell>

              <TableCell align="right">
                <Button
                  onClick={() => handleDelete(product._id)}
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

export default ManageProducts;
