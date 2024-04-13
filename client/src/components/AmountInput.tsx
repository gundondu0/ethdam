import React, { useState } from "react"; // Import React
import { NumberInput, NumberInputField } from "@chakra-ui/react";

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
    <NumberInput
      defaultValue={0}
      min={0}
      value={value}
      onChange={handleChange}
      minW="150"
    >
      <NumberInputField
        borderColor="black"
        borderWidth="1px"
        boxShadow="hg" // Apply medium shadow predefined by Chakra UI
        _hover={{ boxShadow: "lg" }} // Larger shadow on hover
        _focus={{ boxShadow: "xl" }}
      ></NumberInputField>
    </NumberInput>
  );
};

export default AmountInput; // Export the component named AmountInput
