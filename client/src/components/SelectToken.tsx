import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

const SelectToken = (value, handleValueChange) => {
  return (
    <Select
      placeholder="Select a token"
      value={value}
      onChange={handleValueChange}
      mr={2}
      borderColor="black"
      borderWidth="1px"
      _hover={{ boxShadow: "lg" }} // Larger shadow on hover
      _focus={{ boxShadow: "xl" }}
    >
      <option value="WETH">WETH</option>
    </Select>
  );
};

export default SelectToken;
