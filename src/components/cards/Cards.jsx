import React, { useState } from "react";
import { Card, Typography } from "@mui/material";

const Cards = () => {
  const [value, setValue] = useState();
  const handleChange = (newValue) => {
    setValue(newValue);
  }; 
  return (
    <Card sx={{ minWidth: 275, maxWidth: 300, padding: "1rem" }}>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Card Name: Project 1
      </Typography>
      <Typography variant="h5" component="div">
        Project Budget:5000
      </Typography>
      <input
        type="date"
        id="start"
        name="trip-start"
        value={value}
        onChange={(e) => {
         
          setValue(e.target.value);
        }}
      ></input>
      <section>
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Edit Card
        </button>
        <button> Delete Card</button>
        <button>Copy Card </button>
      </section>
    </Card>
  );
};

export { Cards };
