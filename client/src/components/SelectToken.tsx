import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

interface SelectTokenProps {}

const SelectToken: React.FC<SelectTokenProps> = () => {
  const [value, setValue] = useState("ETH");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <Select
      placeholder="Select a token"
      fontStyle={value ? "normal" : "italic"}
      fontFamily="Arial, sans-serif"
      color="black"
      value={value}
      onChange={handleChange}
      mr={2}
      borderColor="black"
      borderWidth="1px"
      bgColor="#3ae8d7"
      _hover={{ boxShadow: "lg" }} // Larger shadow on hover
      _focus={{ boxShadow: "xl" }}
    >
      <option value="WETH">WETH</option>
    </Select>
  );
};

export default SelectToken;
