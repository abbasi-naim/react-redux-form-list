import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const users = [
  {
    value: "User1",
    label: "User#1",
  },
  {
    value: "User2",
    label: "User#2",
  },
  {
    value: "User3",
    label: "User#3",
  },
];

export default function SelectTextFields() {
  const [user, setUsers] = React.useState("User1");

  const handleChange = (event) => {
    setUsers(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "13ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="select-users"
          select
          value={user}
          onChange={handleChange}
        >
          {users.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
