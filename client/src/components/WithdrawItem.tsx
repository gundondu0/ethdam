"use client";

import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import React from "react";
import InitialFocus from "./CustomTransaction";

const WithdrawItem = () => {
  return (
    <InputGroup width="100%">
      <Input placeholder="Address" />
      <InputRightElement width="4.5rem">
        <InitialFocus />
      </InputRightElement>
    </InputGroup>
  );
};

export default WithdrawItem;
