import { useState } from "react";
import { Button, IconButton, Slider } from "@mui/material";

export default function Retro() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [value, setValue] = useState(30);

  // API call

  // functions

  // handle click events
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        color={!isMenuOpen ? "secondary" : "success"}
      >
        {!isMenuOpen ? `Click here` : `Don't click here`}
      </Button>

      <IconButton></IconButton>

      <Slider
        defaultValue={10}
        sx={{ width: "10rem" }}
        value={value}
        onChange={handleChange}
      ></Slider>
    </div>
  );
}
