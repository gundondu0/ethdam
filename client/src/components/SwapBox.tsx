import React, { use, useState } from "react";
import { Box, Button, Flex, HStack, Spacer } from "@chakra-ui/react";
import SelectToken from "./SelectToken";
import AmountInput from "./AmountInput";
import ButtonState from "./ButtonState";
import { BiTransfer } from "react-icons/bi";
import SelectAmount from "./SelectAmount";

const SwapBox = () => {
  const [inputType, setInputType] = useState(true);

  return (
    <Flex
      direction="column"
      alignItems="center"
      maxWidth="700px"
      margin="auto"
      border="1px solid #CBD5E0"
      borderRadius="md"
      p={4}
      maxHeight="300px"
      overflowY="auto"
      bgGradient="radial(circle, secondary, accent)"
    >
      <Flex flex="3" alignItems="center" mb="4">
        {inputType ? <AmountInput /> : <SelectAmount />}
        <Spacer minW="2" />
        <SelectToken />
        <Box
          _hover={{ cursor: "pointer", bg: "lightgray" }}
          borderRadius={15}
          p="1"
          borderWidth="2px" // Width of the border
          borderColor="black" // Color of the border using Chakra UI color system
          borderStyle="solid" // S
        >
          <BiTransfer size={30} onClick={() => setInputType(!inputType)} />
        </Box>
      </Flex>
      <ButtonState />
    </Flex>
  );
};

export default SwapBox;
