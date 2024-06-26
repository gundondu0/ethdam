import React, { use, useState } from "react";
import { Box, Button, Flex, HStack, Spacer } from "@chakra-ui/react";
import SelectToken from "./SelectToken";
import AmountInput from "./AmountInput";
import ButtonState from "./ButtonState";
import { BiTransfer } from "react-icons/bi";
import SelectAmount from "./SelectAmount";


const SwapBox = () => {
  const [inputType, setInputType] = useState(true);

  const [token, setToken] = useState("");
  const handleTokenChange = (event) => {
    setToken(event.target.value);
    console.log(event.target.value);
  };

  const [amount, setAmount] = useState("");
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    console.log(event.target.value);
  }
  return (
    <Flex
      direction="column"
      alignItems="center"
      margin="auto"
      border="1px solid #CBD5E0"
      borderRadius="md"
      p={4}
      maxHeight="300px"
      overflowY="auto"
      bgGradient="linear(to-r, #5be3d5, secondary)"
      borderColor="black"
      borderWidth="2px"
      minW="35vw"
    >
      <Flex flex="3" alignItems="center" mb="4">
        {inputType ? <AmountInput amount={amount} handleAmountChange={handleAmountChange} /> : <SelectAmount amount={amount} setAmount={setAmount} />}
        <Spacer minW="2" />
        <SelectToken token={token} handleTokenChange={handleTokenChange} />
        <Box
          _hover={{ cursor: "pointer", bg: "lightgray" }}
          borderRadius={15}
          p="1"
          borderWidth="1px" // Width of the border
          borderColor="black" // Color of the border using Chakra UI color system
          borderStyle="solid" // S
        >
          <BiTransfer size={30} onClick={() => setInputType(!inputType)} />
        </Box>
      </Flex >
      <ButtonState amount={amount} token={token} />
    </Flex >
  );
};

export default SwapBox;
