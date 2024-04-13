import React, { useState } from "react"; // Import React
import { Input } from "@chakra-ui/react";

const AmountInput = (amount, handleAmountChange) => {
  // Define a component named AmountInput

  return (
    <Input
      defaultValue={0}
      min={0}
      value={amount}
      _placeholder="Amount"
      borderColor="black"
      borderWidth="1px"
      boxShadow="hg" // Apply medium shadow predefined by Chakra UI
      bgColor="#3ae8d7"
      _hover={{ boxShadow: "lg" }} // Larger shadow on hover
      _focus={{ boxShadow: "xl" }}
      onChange={handleAmountChange}
      minW="150"
    ></Input>
  );
};

export default AmountInput; // Export the component named AmountInput
