import React, { useState } from "react"; // Import React
import { NumberInput, NumberInputField, Input } from "@chakra-ui/react";

const AmountInput = () => {
  // Define a component named AmountInput
  const [value, setValue] = useState(0);

  const handleChange = (_: string, valueAsNumber: number) => {
    if (isNaN(valueAsNumber)) {
      setValue(0);
    } else {
      setValue(valueAsNumber);
    }
  };

  return (
    <Input
      defaultValue={0}
      min={0}
      value={value}
      placeholder="Amount"
      borderColor="black"
      borderWidth="1px"
      boxShadow="hg" // Apply medium shadow predefined by Chakra UI
      bgColor="#3ae8d7"
      _hover={{ boxShadow: "lg" }} // Larger shadow on hover
      _focus={{ boxShadow: "xl" }}
      onChange={(event) =>
        handleChange(event.target.value, parseFloat(event.target.value))
      }
      minW="150"
    ></Input>
  );
};

export default AmountInput; // Export the component named AmountInput
