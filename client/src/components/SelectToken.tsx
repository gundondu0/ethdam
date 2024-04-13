import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

interface SelectTokenProps { }

const SelectToken: React.FC<SelectTokenProps> = () => {
  const [value, setValue] = useState("ETH");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <Select
      placeholder="Select a token"
      value={value}
      onChange={handleChange}
      mr={2}
      borderColor="black"
      borderWidth="1px"
    >
      <option value="WETH">WETH</option>
    </Select>
  );
};

export default SelectToken;
