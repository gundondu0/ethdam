"use client";
import { Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { MetaMaskButton } from "@metamask/sdk-react-ui";
import { useState } from "react";

const Navbar = () => {
  return (
    <Box
      bg="secondary"
      w="100%"
      p={4}
      color="text"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      border="000000"
      borderColor={"black"}
      borderBottom="2px"
      borderStyle={"solid"}
    >
      <Box>
        <NextLink href="/" passHref>
          <Link mr={4}>Home</Link>
        </NextLink>

        <NextLink href="/swap" passHref>
          <Link mr={4}>Swap</Link>
        </NextLink>
      </Box>
      <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
    </Box>
  );
};

export default Navbar;
