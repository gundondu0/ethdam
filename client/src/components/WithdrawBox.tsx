"use client";

import React, { useState } from "react";
import WithdrawItem from "./WithdrawItem";
import { Flex, Button, IconButton } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const WithdrawBox = () => {
  const [withdrawItems, setWithdrawItems] = useState([
    <WithdrawItem key={0} />,
  ]);

  const handleAddWithdrawItem = () => {
    const newKey = withdrawItems.length;
    const newWithdrawItem = <WithdrawItem key={newKey} />;
    setWithdrawItems([...withdrawItems, newWithdrawItem]);
  };

  const handleRemoveWithdrawItem = (index: number) => {
    const updatedWithdrawItems = withdrawItems.filter((item, i) => i !== index);
    setWithdrawItems(updatedWithdrawItems);
  };

  const handleWithdraw = () => {
    // Handle withdraw action here
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      maxWidth="400px"
      margin="auto"
      border="1px solid #CBD5E0"
      borderRadius="md"
      p={4}
      maxHeight="300px"
      overflowY="auto"
      position="relative"
    >
      {withdrawItems.map((item, index) => (
        <Flex
          key={index}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          {item}
          <IconButton
            icon={<CloseIcon />}
            aria-label="Remove withdraw item"
            onClick={() => handleRemoveWithdrawItem(index)}
          />
        </Flex>
      ))}
      <Flex mt={4}>
        <Button bg="primary" onClick={handleWithdraw} mr={2}>
          Withdraw
        </Button>
        <Button bg="primary" onClick={handleAddWithdrawItem}>
          + Add Wallet
        </Button>
      </Flex>
    </Flex>
  );
};

export default WithdrawBox;
