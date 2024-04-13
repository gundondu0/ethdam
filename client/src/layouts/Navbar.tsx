"use client"
import { Box, Button, Link } from "@chakra-ui/react";
import { useSDK } from "@metamask/sdk-react";
import { MetaMaskButton } from "@metamask/sdk-react-ui";
import NextLink from "next/link";
import { useState } from "react";



const Navbar = () => {

    return (
        <Box bg="secondary" w="100%" p={4} color="text" display="flex" alignItems="center" justifyContent="space-between">
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