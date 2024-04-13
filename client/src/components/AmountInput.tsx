import React, { useState } from "react"; // Import React
import { NumberInput, NumberInputField, Input } from "@chakra-ui/react";

const AmountInput = () => {
  // Define a component named AmountInput
  const [value, setValue] = useState("");

  const handleChange = (event: any) => setValue(event.target.value);

  return (
    <Input
      value={value}
      borderColor="black"
      borderWidth="1px"
      _placeholder={{
        // Adding styles to the placeholder
        color: "black", // Sets the color of the placeholder text
        fontFamily: "Arial, sans-serif", // Changes the font family of the placeholder
        fontStyle: "italic", // Optionally, makes the placeholder text italic
      }}
      placeholder="Amount"
      boxShadow="hg" // Apply medium shadow predefined by Chakra UI
      bgColor="#3ae8d7"
      _hover={{ boxShadow: "lg" }} // Larger shadow on hover
      _focus={{ boxShadow: "xl" }}
      onChange={handleChange}
      minW="150"
    ></Input>
  );
};

export default AmountInput; // Export the component named AmountInput
