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
    <InputGroup width="100%"
    >
      <Input flex="1" placeholder="Wallet Address" value={address} onChange={handleAddressChange} border="1px solid black"
        borderRadius="md"
        mr={2}
        bgColor="#3ae8d7"
        _placeholder={{
          // Adding styles to the placeholder
          color: "black", // Sets the color of the placeholder text
          fontFamily: "Arial, sans-serif", // Changes the font family of the placeholder
          fontStyle: "italic", // Optionally, makes the placeholder text italic
        }}
        _hover={{ boxShadow: "lg" }} // Larger shadow on hover
        _focus={{ boxShadow: "xl" }} />
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
                  <FormLabel>Delay</FormLabel>
                  <Input placeholder="10" value={delay} onChange={handleDelayChange} />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button mb="4" onClick={onClose}>Close</Button>
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

  const handleWithdraw = (withdrawItems) => {
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
      margin="auto"
      border="2px solid black"
      borderRadius="md"
      p={4}
      maxHeight="500px"
      bgGradient="linear(to-r, #5be3d5, secondary)"
      minW="35vw"
    >
      {withdrawItems.map((item, index) => (
        <Flex
          key={index}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          overflowY="auto"

        >
          <Flex flex="3" alignItems="center" mb="4">
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
        </Flex>
      ))}
      <Flex mt={4} mb="4">
        <Button bg="primary" onClick={handleWithdraw}
          borderColor="black" // Sets the border color
          borderWidth="1px" // Sets the border width
          borderStyle="solid" mr={2}>
          Withdraw
        </Button>
        <Button bg="primary" onClick={handleAddWithdrawItem} borderColor="black" // Sets the border color
          borderWidth="1px" // Sets the border width
          borderStyle="solid">
          + Add Wallet
        </Button>
      </Flex>
    </Flex >
  );
};

export default WithdrawBox;
