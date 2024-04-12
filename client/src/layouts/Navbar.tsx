import { Box, Link , Text} from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Box bg="primary" w="100%" p={4} color="white">
      <NextLink href="/" passHref>
        <Link mr={4}>Home</Link>
      </NextLink>

      <NextLink href="/about" passHref>
        <Link mr={4}>About</Link>
      </NextLink>

      <NextLink href="/contact" passHref>
        <Link>Contact</Link>
      </NextLink>
    </Box>
  );
};

export default Navbar;