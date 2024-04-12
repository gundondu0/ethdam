"use client"
import { Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { MetaMaskButton } from "@metamask/sdk-react-ui";


const Navbar = () => {
    return (
        <Box bg="primary" w="100%" p={4} color="text">
            <NextLink href="/" passHref>
                <Link mr={4}>Home</Link>
            </NextLink>

            <NextLink href="/swap" passHref>
                <Link mr={4}>Swap</Link>
            </NextLink>
            <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>


        </Box>
    );
};

export default Navbar;