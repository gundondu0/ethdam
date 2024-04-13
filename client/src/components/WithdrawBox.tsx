"use client";

import React, { useState } from "react";
import {
  Flex, Button, IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  SliderMark,
  Input,
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  RadioGroup,
  Stack,
  Radio,
  Divider,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { SettingsIcon } from "@chakra-ui/icons";


const WithdrawItem = ({ address, delay, amount, onItemChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleAddressChange = (event) => {
    onItemChange({ ...{ address: event.target.value, delay, amount } });
  };

  const handleAmountChange = (event) => {
    onItemChange({ ...{ address, delay, amount: event.target.value } });
  }

  const handleDelayChange = (event) => {
    onItemChange({ ...{ address, delay: event.target.value, amount } });
  }

  return (
    <InputGroup width="100%">
      <Input placeholder="Address" value={address} onChange={handleAddressChange} />
      <InputRightElement width="4.5rem">
        <>
          <IconButton
            onClick={onOpen}
            h="1.75rem"
            size="sm"
            aria-label="Settings"
            icon={<SettingsIcon />}
          />
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update your settings</ModalHeader>
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Amount</FormLabel>
                  <Input ref={initialRef} placeholder="WETH" value={amount} onChange={handleAmountChange} />
                </FormControl>

                <FormControl>
                  <FormLabel>Delay in seconds</FormLabel>
                  <Input placeholder="10" value={delay} onChange={handleDelayChange} />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </InputRightElement>
    </InputGroup>
  );
};

const WithdrawBox = () => {

  const [withdrawItems, setWithdrawItems] = useState([
    { key: 0, address: '', delay: "", amount: '' },
  ]);
  const handleAddWithdrawItem = () => {
    const newKey = withdrawItems.length;
    const newWithdrawItem = { key: newKey, address: '', delay: "", amount: '' };
    setWithdrawItems([...withdrawItems, newWithdrawItem]);
  };

  const handleRemoveWithdrawItem = (index: number) => {
    const updatedWithdrawItems = withdrawItems.filter((item, i) => i !== index);
    setWithdrawItems(updatedWithdrawItems);
  };

  const handleWithdraw = () => {
    // Handle withdraw action here
  };

  const handleItemChange = (index, updatedItem) => {
    const updatedWithdrawItems = withdrawItems.map((item, i) => i === index ? updatedItem : item);
    setWithdrawItems(updatedWithdrawItems);
    console.log(updatedWithdrawItems)
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
          <WithdrawItem
            address={item.address}
            delay={item.delay}
            amount={item.amount}
            onItemChange={(updatedItem) => handleItemChange(index, updatedItem)}
          />
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
